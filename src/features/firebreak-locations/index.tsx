import React, { useState } from "react";
import { MapContainer, TileLayer, LayersControl } from "react-leaflet";
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

const JAMAICA_CENTER: [number, number] = [18.1096, -77.2975];
const JAMAICA_BOUNDS: [[number, number], [number, number]] = [
  [17.5, -79],
  [18.7, -76],
];

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
    <div className="h-screen w-full relative">
 
      <div className="absolute top-2.5 right-2.5 z-[1000] bg-white p-4 rounded-lg shadow-lg min-w-[300px] max-h-[85vh] overflow-y-auto">
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


      <MapContainer
        center={JAMAICA_CENTER}
        zoom={9}
        scrollWheelZoom={true}
        className="h-full w-full"
        maxBounds={JAMAICA_BOUNDS}
        maxBoundsViscosity={1.0}
      >
        <LayersControl position="topleft">
          <LayersControl.BaseLayer
            checked
            name="Satellite"
          >
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              attribution="Tiles © Esri — Source: NASA, NOAA"
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="Street Map">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="© OpenStreetMap contributors"
            />
          </LayersControl.BaseLayer>
        </LayersControl>

        <ExistingFirebreaks showExisting={showExisting} />

        <ProposedFirebreaksC
          showProposed={showProposed}
          filteredProposed={filteredProposed}
          selectedFirebreak={selectedFirebreak}
          planningMode={planningMode}
        />

        <DefensibleSpaces showDefensible={showDefensible} />
        <WaterSources showWaterSources={showWaterSources} />
      </MapContainer>
    </div>
  );
};

export default FirebreakLocations;
