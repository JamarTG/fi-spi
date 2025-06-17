import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import { defensibleSpaces, existingFirebreaks, proposedFirebreaks } from "./data";
import ProjectSummary from "./components/ProjectSummary";
import ModeToggle from "./components/ModeToggle";
import Filters from "./components/Filters";
import ProposedProjectsList from "./components/ProposedProjectsList";
import MaintenanceSchedule from "./components/MaintenanceSchedule";
import Legend from "./components/Legend";
import ExistingFirebreaks from "./components/ExistingFirebreaks";
import ProposedFirebreaksC from "./components/ProposedFirebreaks_C";
import DefensibleSpaces from "./components/DefensibleSpaces";
import MapTitle from "../../components/MapTitle";
import WaterSources from "./components/WaterSources";
import MapOfJamaica from "../../components/MapOfJamaica";

const FirebreakLocations: React.FC = () => {
  const [showExisting, setShowExisting] = useState(true);
  const [showProposed, setShowProposed] = useState(true);
  const [showDefensible, setShowDefensible] = useState(true);
  const [showWaterSources, setShowWaterSources] = useState(true);
  const [selectedFirebreak, setSelectedFirebreak] = useState<number | null>(null);
  const [planningMode, setPlanningMode] = useState(false);
  const [priorityFilter, setPriorityFilter] = useState("all");

  const totalCost = proposedFirebreaks.reduce((sum, fb) => sum + (fb.cost || 0), 0);
  const criticalCount = proposedFirebreaks.filter((fb) => fb.priority === "critical").length;
  const protectedPopulation = defensibleSpaces.reduce((sum, ds) => sum + ds.population, 0);

  const filteredProposed = proposedFirebreaks.filter((fb) => {
    if (priorityFilter === "all") return true;
    return fb.priority === priorityFilter;
  });

  return (
    <div className="h-screen w-full relative flex">
      <div className="top-2.5 right-2.5 z-[1000] bg-white p-4 rounded-lg shadow-lg min-w-[300px] max-h-[85vh] overflow-y-auto">
        <MapTitle title={"Firebreak Management System"} />

        <ProjectSummary
          totalCost={totalCost}
          criticalCount={criticalCount}
          protectedPopulation={protectedPopulation}
          existingFirebreaks={existingFirebreaks}
        />

        <ModeToggle
          setPlanningMode={setPlanningMode}
          planningMode={planningMode}
        />

        <Filters
          priorityFilter={priorityFilter}
          setPriorityFilter={setPriorityFilter}
          showExisting={showExisting}
          setShowExisting={setShowExisting}
          showProposed={showProposed}
          setShowProposed={setShowProposed}
          showDefensible={showDefensible}
          setShowDefensible={setShowDefensible}
          showWaterSources={showWaterSources}
          setShowWaterSources={setShowWaterSources}
        />

        <ProposedProjectsList
          filteredProposed={filteredProposed}
          setSelectedFirebreak={setSelectedFirebreak}
          selectedFirebreak={selectedFirebreak}
        />

        <MaintenanceSchedule />
        <Legend />
      </div>

      <MapOfJamaica>
        <ExistingFirebreaks showExisting={showExisting} />
        <ProposedFirebreaksC
          showProposed={showProposed}
          filteredProposed={filteredProposed}
          selectedFirebreak={selectedFirebreak}
          planningMode={planningMode}
        />
        <DefensibleSpaces showDefensible />
        <WaterSources showWaterSources />
      </MapOfJamaica>
    </div>
  );
};

export default FirebreakLocations;
