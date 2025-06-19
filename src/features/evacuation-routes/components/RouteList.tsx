import type { Dispatch, SetStateAction } from "react";
import type { EvacuationProgress, EvacuationRoute } from "../types";
import { getHazardColor, getRouteColor } from "../utils";

interface RouteListProps {
  filteredRoutes: EvacuationRoute[];
  setSelectedRoute: Dispatch<SetStateAction<number | null>>;
  selectedRoute: number | null;
  evacuationProgress: EvacuationProgress;
  simulationMode: boolean;
}

const RouteList: React.FC<RouteListProps> = ({ filteredRoutes, setSelectedRoute, selectedRoute, evacuationProgress, simulationMode }) => {
  return (
    <div className="mb-4">
      <h4 className="m-0 mb-2 text-sm">Active Routes</h4>
      {filteredRoutes.map((route) => (
        <div
          key={route.id}
          onClick={() => setSelectedRoute(selectedRoute === route.id ? null : route.id)}
          className={`mb-2 p-2 rounded text-[11px] cursor-pointer ${selectedRoute === route.id ? "bg-blue-50" : "bg-gray-50"}`}
          style={{
            border: `2px solid ${getRouteColor(route)}`,
          }}
        >
          <div className="font-bold mb-1">{route.name}</div>
          <div className="flex justify-between mb-1">
            <span>
              Status: <span style={{ color: getRouteColor(route) }}>{route.status.replace("_", " ")}</span>
            </span>
            <span>{route.estimatedTime} min</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>Population: {route.population.toLocaleString()}</span>
            <span style={{ color: getHazardColor(route.hazardLevel) }}>{route.hazardLevel} risk</span>
          </div>
          {simulationMode && (
            <div className="mt-1">
              <div className="text-[10px] mb-0.5">Evacuated: {(evacuationProgress[route.id] || 0).toFixed(0)}%</div>
              <div className="w-full h-1 bg-gray-300 rounded-sm">
                <div
                  className="h-full rounded-sm transition-[width] duration-300"
                  style={{
                    width: `${evacuationProgress[route.id] || 0}%`,
                    backgroundColor: getRouteColor(route),
                  }}
                ></div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RouteList;
