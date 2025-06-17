import React from "react";
import { LayersControl, MapContainer, Marker, Polyline, Popup, TileLayer } from "react-leaflet";
import { MAP_CONFIG } from "../../../constants";
import FireZones from "./FireZones";
import { emergencyShelters } from "../data";
import { getHazardColor, getRouteColor, getShelterIcon } from "../utils";
import type { EvacationProgress, EvacuationRoutes } from "../types";

interface EvacuationRouteMapProps {
  showShelters: boolean;
  showFireZones: boolean;
  showAllRoutes: boolean;
  filteredRoutes: EvacuationRoutes[];
  selectedRoute: number | null;
  simulationMode: boolean;
  evacuationProgress: EvacationProgress;
}

const EvacuationRouteMap: React.FC<EvacuationRouteMapProps> = ({
  showShelters,
  showAllRoutes,
  showFireZones,
  filteredRoutes,
  selectedRoute,
  evacuationProgress,
  simulationMode,
}) => {
  return (
    <MapContainer
      center={MAP_CONFIG.JAMAICA_CENTER}
      zoom={MAP_CONFIG.ZOOM}
      scrollWheelZoom={true}
      className="h-full w-full"
      maxBounds={MAP_CONFIG.JAMAICA_BOUNDS}
      maxBoundsViscosity={1.0}
    >
      <LayersControl position="topleft">
        <LayersControl.BaseLayer
          checked
          name="Street Map"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap contributors"
          />
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name="Satellite">
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution="Tiles © Esri — Source: NASA, NOAA"
          />
        </LayersControl.BaseLayer>
      </LayersControl>

      <FireZones showFireZones={showFireZones} />

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

      {showShelters &&
        emergencyShelters.map((shelter) => (
          <Marker
            key={`shelter-${shelter.id}`}
            position={[shelter.lat, shelter.lng]}
          >
            <Popup>
              <div className="min-w-[200px]">
                <h4 className="m-0 mb-2.5">
                  {getShelterIcon(shelter.type)} {shelter.name}
                </h4>
                <p>
                  <strong>Type:</strong> {shelter.type.replace("_", " ")}
                </p>
                <p>
                  <strong>Capacity:</strong> {shelter.capacity.toLocaleString()} people
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  <span className={shelter.status === "operational" ? "text-green-600" : "text-orange-500"}>{shelter.status}</span>
                </p>
                <div className="mt-2">
                  <strong>Facilities:</strong>
                  <ul className="my-1 pl-5">
                    {shelter.facilities.map((facility, index) => (
                      <li
                        key={index}
                        className="text-xs"
                      >
                        {facility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
};

export default EvacuationRouteMap;
