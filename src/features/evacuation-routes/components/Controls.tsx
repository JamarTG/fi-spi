import type { Dispatch, SetStateAction } from "react";

interface ControlsProps {
  setSimulationMode: Dispatch<SetStateAction<boolean>>;
  setRouteFilter: Dispatch<SetStateAction<string>>;
  simulationMode: boolean;
  routeFilter: string;
  setShowAllRoutes: Dispatch<SetStateAction<boolean>>;
  showAllRoutes: boolean;
  setShowShelters: Dispatch<SetStateAction<boolean>>;
  showShelters: boolean;
  setShowFireZones: Dispatch<SetStateAction<boolean>>;
  showFireZones: boolean;
}

const Controls: React.FC<ControlsProps> = ({
  setSimulationMode,
  simulationMode,
  setRouteFilter,
  routeFilter,
  showAllRoutes,
  setShowAllRoutes,
  setShowShelters,
  showShelters,
  setShowFireZones,
  showFireZones,
}) => {
  return (
    <div className="mb-4">
  <button
    onClick={() => setSimulationMode(!simulationMode)}
    className={`w-full px-2 py-2 text-white border-none rounded cursor-pointer mb-2 ${
      simulationMode ? "bg-[#ff4400]" : "bg-[#4CAF50]"
    }`}
  >
    {simulationMode ? "Stop Simulation" : "Start Evacuation Simulation"}
  </button>

  <div className="mb-2">
    <label className="text-xs block mb-1">Route Filter:</label>
    <select
      value={routeFilter}
      onChange={(e) => setRouteFilter(e.target.value)}
      className="w-full px-1 py-1 text-xs"
    >
      <option value="all">All Routes</option>
      <option value="clear">Clear Routes Only</option>
      <option value="primary">Primary Routes Only</option>
    </select>
  </div>

  <div className="text-xs">
    <label className="flex items-center mb-1">
      <input
        type="checkbox"
        checked={showAllRoutes}
        onChange={(e) => setShowAllRoutes(e.target.checked)}
        className="mr-1"
      />
      Show All Routes
    </label>
    <label className="flex items-center mb-1">
      <input
        type="checkbox"
        checked={showShelters}
        onChange={(e) => setShowShelters(e.target.checked)}
        className="mr-1"
      />
      Show Shelters
    </label>
    <label className="flex items-center">
      <input
        type="checkbox"
        checked={showFireZones}
        onChange={(e) => setShowFireZones(e.target.checked)}
        className="mr-1"
      />
      Show Fire Zones
    </label>
  </div>
</div>

  );
};

export default Controls;
