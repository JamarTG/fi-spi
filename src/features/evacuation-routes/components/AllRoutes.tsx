import React from "react";
import { Polyline } from "react-leaflet/Polyline";
import { getHazardColor, getRouteColor } from "../utils";
import type { EvacuationProgress, EvacuationRoutes } from "../types";
import { Popup } from "react-leaflet/Popup";

interface AllRoutesProps {
  showAllRoutes: boolean;
  filteredRoutes: EvacuationRoutes[]
  selectedRoute: number | null;
  simulationMode:boolean
evacuationProgress: EvacuationProgress
}

const AllRoutes: React.FC<AllRoutesProps> = ({ showAllRoutes, filteredRoutes, selectedRoute, simulationMode, evacuationProgress }) => {
  if (!showAllRoutes)
    return (
      <div>
        {showAllRoutes &&
          filteredRoutes.map((route) => (
            <Polyline
              key={`route-${route.id}`}
              positions={route.path}
              pathOptions={{
                color: getRouteColor(route.priority, route.status),
                weight: selectedRoute === route.id ? 6 : 4,
                opacity: selectedRoute === route.id ? 1 : 0.8,
                dashArray: route.status === "partially_blocked" ? "10, 10" : undefined,
              }}
            >
              <Popup>
                <div className="min-w-[200px]">
                  <h4 className="m-0 mb-2.5">{route.name}</h4>
                  <p>
                    <strong>Priority:</strong> {route.priority}
                  </p>
                  <p>
                    <strong>Status:</strong>{" "}
                    <span style={{ color: getRouteColor(route.priority, route.status) }}>{route.status.replace("_", " ")}</span>
                  </p>
                  <p>
                    <strong>Capacity:</strong> {route.capacity}
                  </p>
                  <p>
                    <strong>Est. Time:</strong> {route.estimatedTime} minutes
                  </p>
                  <p>
                    <strong>Population:</strong> {route.population.toLocaleString()} people
                  </p>
                  <p>
                    <strong>Risk Level:</strong> <span style={{ color: getHazardColor(route.hazardLevel) }}>{route.hazardLevel}</span>
                  </p>
                  {simulationMode && (
                    <div className="mt-2 p-1 bg-gray-100 rounded-sm">
                      <strong>Evacuation Progress:</strong> {(evacuationProgress[route.id] || 0).toFixed(1)}%
                    </div>
                  )}
                </div>
              </Popup>
            </Polyline>
          ))}
      </div>
    );
};

export default AllRoutes;
