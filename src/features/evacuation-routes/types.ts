import type { LatLngExpression } from "leaflet";

export interface EvacuationRoutes {
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

export interface EvacationProgress {
  [key: number]: number;
}
