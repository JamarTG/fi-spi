import type { Dispatch, SetStateAction } from "react";

interface ControlsProps {
  setSimulationMode: Dispatch<SetStateAction<boolean>>;
  routeFilter: string;
  setRouteFilter: Dispatch<SetStateAction<string>>;
  simulationMode: boolean;
  setShowAllRoutes: Dispatch<SetStateAction<boolean>>;
  showAllRoutes: boolean;
  setShowShelters: Dispatch<SetStateAction<boolean>>;
  showShelters: boolean;
  setShowFireZones: Dispatch<SetStateAction<boolean>>;
  showFireZones: boolean;
}

const getSimulationButtonText = (simulationMode: boolean) => {
  return simulationMode ? "Stop Simulation" : "Start Evacuation Simulation";
};

const getSimulationButtonColor = (simulationMode: boolean) => {
  return simulationMode ? "bg-[#ff4400]" : "bg-[#4CAF50]";
};

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
  
  const toggleSimulationMode = () => {
    setSimulationMode((prev) => !prev);
  };
  const routeFilterHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRouteFilter(e.target.value);
  };
  const showAllRoutesHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowAllRoutes(e.target.checked);
  };
  const showSheltersHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowShelters(e.target.checked);
  };
  const showFireZonesHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowFireZones(e.target.checked);
  };

  return (
    <div className="mb-4">
      <button
        onClick={toggleSimulationMode}
        className={`w-full px-2 py-2 text-white border-none rounded cursor-pointer mb-2 ${getSimulationButtonColor(simulationMode)}`}
      >
        {getSimulationButtonText(simulationMode)}
      </button>

      <div className="mb-2">
        <label className="text-xs block mb-1">Route Filter:</label>
        <select
          value={routeFilter}
          onChange={routeFilterHandler}
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
            onChange={showAllRoutesHandler}
            className="mr-1"
          />
          Show All Routes
        </label>
        <label className="flex items-center mb-1">
          <input
            type="checkbox"
            checked={showShelters}
            onChange={showSheltersHandler}
            className="mr-1"
          />
          Show Shelters
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={showFireZones}
            onChange={showFireZonesHandler}
            className="mr-1"
          />
          Show Fire Zones
        </label>
      </div>
    </div>
  );
};

export default Controls;
