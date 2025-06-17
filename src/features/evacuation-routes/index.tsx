import React, { useState } from "react";
import "leaflet/dist/leaflet.css";

import EvacuationStatistics from "./components/EvacuationStatistics";
import Controls from "./components/Controls";
import MapTitle from "../../components/MapTitle";
import {evacuationRoutes } from "./data";
import RouteList from "./components/RouteList";
import RoutePriority from "./components/RoutePriority";
import useSimulation from "./hooks/useSimulation";
import MapOfJamaica from "../../components/MapOfJamaica";
import FireZones from "./components/FireZones";
import AllRoutes from "./components/AllRoutes";
import EmergencyShelters from "./components/EmergencyShelters";

const EvacuationRoutesC: React.FC = () => {
  const [selectedRoute, setSelectedRoute] = useState<number | null>(null);
  const [showAllRoutes, setShowAllRoutes] = useState(true);
  const [showShelters, setShowShelters] = useState(true);
  const [showFireZones, setShowFireZones] = useState(true);
  const [routeFilter, setRouteFilter] = useState("all");
  const [simulationMode, setSimulationMode] = useState(false);
  const [evacuationProgress, setEvacuationProgress] = useState<{ [key: number]: number }>({});

  useSimulation(simulationMode, setEvacuationProgress);

  const filteredRoutes = evacuationRoutes.filter((route) => {
    if (routeFilter === "all") return true;
    if (routeFilter === "clear") return route.status === "clear";
    if (routeFilter === "primary") return route.priority === "primary";
    return true;
  });

  const totalEvacuees = evacuationRoutes.reduce((sum, route) => sum + route.population, 0);
  const evacuatedCount = evacuationRoutes.reduce(
    (sum, route) => sum + Math.floor((route.population * (evacuationProgress[route.id] || 0)) / 100),
    0
  );

  return (
    <div className="h-screen w-full flex">
      <div className="top-[10px] right-[10px] z-[1000] bg-white p-[15px] rounded-[8px] shadow-[0_2px_10px_rgba(0,0,0,0.3)] min-w-[280px] max-h-[80vh] overflow-y-auto">
        <MapTitle title="Evacuation Command Center" />

        <EvacuationStatistics
          evacuatedCount={evacuatedCount}
          totalEvacuees={totalEvacuees}
        />

        <Controls
          setSimulationMode={setSimulationMode}
          setRouteFilter={setRouteFilter}
          setShowAllRoutes={setShowAllRoutes}
          setShowShelters={setShowShelters}
          setShowFireZones={setShowFireZones}
          simulationMode={simulationMode}
          routeFilter={routeFilter}
          showAllRoutes={showAllRoutes}
          showShelters={showShelters}
          showFireZones={showFireZones}
        />

        <RouteList
          filteredRoutes={filteredRoutes}
          setSelectedRoute={setSelectedRoute}
          selectedRoute={selectedRoute}
          evacuationProgress={evacuationProgress}
          simulationMode={simulationMode}
        />

        <RoutePriority />
      </div>

      <MapOfJamaica>
        <FireZones showFireZones={showFireZones} />

        <AllRoutes
          showAllRoutes={showAllRoutes}
          filteredRoutes={filteredRoutes}
          selectedRoute={selectedRoute}
          simulationMode={simulationMode}
          evacuationProgress={evacuationProgress}
        />
        <EmergencyShelters showShelters={showShelters} />
      </MapOfJamaica>
    </div>
  );
};

export default EvacuationRoutesC;
