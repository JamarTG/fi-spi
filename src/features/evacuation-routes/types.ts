import type { LatLngExpression } from "leaflet";

export interface EvacuationRoute {
  id: number;
  name: string;
  path: LatLngExpression[];
  priority: "primary" | "secondary" | "alternative" | "emergency";
  status: string;
  capacity: "high" | "medium" | "low";
  estimatedTime: number;
  hazardLevel: "high" | "medium" | "low";
  population: number;
}

export interface EmergencyShelter {
  id: number;
  name: string;
  lat: number;
  lng: number;
  capacity: number;
  type: string;
  facilities: string[];
  status: string;
}

export interface EvacuationProgress {
  [key: number]: number;
}
