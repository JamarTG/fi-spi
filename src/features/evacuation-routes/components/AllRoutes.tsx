import React from "react";
import { Polyline } from "react-leaflet/Polyline";
import { Popup } from "react-leaflet/Popup";
import List from "../../../components/List";
import type { EvacuationProgress, EvacuationRoute } from "../types";
import { formatEvacuationProgress, generateRouteKey, getHazardColor, getPathOptions, getRouteColor } from "../utils";

interface AllRoutesProps {
  showAllRoutes: boolean;
  filteredRoutes: EvacuationRoute[];
  selectedRoute: number | null;
  simulationMode: boolean;
  evacuationProgress: EvacuationProgress;
}

const AllRoutes: React.FC<AllRoutesProps> = ({ showAllRoutes, filteredRoutes, selectedRoute, simulationMode, evacuationProgress }) => {
 

  const renderEvacuationRoute = (route: EvacuationRoute) => (
    <Polyline
      key={generateRouteKey(route)}
      positions={route.path}
      pathOptions={getPathOptions(route,selectedRoute)}
    >
      <Popup>
        <div className="min-w-[200px] p-2">
          <h4 className="m-0 mb-2 text-lg font-semibold">{route.name}</h4>
          <div className="space-y-1 text-sm">
            <p>
              <span className="font-medium">Priority:</span> {route.priority}
            </p>
            <p>
              <span className="font-medium">Status:</span>{" "}
              <span className={getRouteColor(route)}>{route.status.replace("_", " ")}</span>
            </p>
            <p>
              <span className="font-medium">Capacity:</span> {route.capacity}
            </p>
            <p>
              <span className="font-medium">Est. Time:</span> {route.estimatedTime} minutes
            </p>
            <p>
              <span className="font-medium">Population:</span> {route.population.toLocaleString()} people
            </p>
            <p>
              <span className="font-medium">Risk Level:</span>{" "}
              <span className={getHazardColor(route.hazardLevel)}>{route.hazardLevel}</span>
            </p>
            {simulationMode && (
              <div className="mt-2 p-1 bg-gray-100 rounded text-xs">
                <span className="font-medium">Evacuation Progress:</span> {formatEvacuationProgress(evacuationProgress[route.id])}%
              </div>
            )}
          </div>
        </div>
      </Popup>
    </Polyline>
  );

  if (!showAllRoutes) return null;
  return (
    <List
      data={filteredRoutes}
      renderFn={renderEvacuationRoute}
    />
  );
};

export default AllRoutes;
