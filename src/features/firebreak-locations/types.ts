import type { LatLngExpression } from "leaflet";

export interface ExistingFirebreaks {
  id: number;
  name: string;
  path: LatLngExpression[];
  type: string;
  width: number;
  status: string;
  effectiveness: number;
  lastMaintained: string;
  priority: string;
}

export interface ProposedFirebreaks {
  id: number;
  name: string;
  path: LatLngExpression[];
  type: string;
  width: number;
  status: string;
  priority: string;
  cost: number;
  timeline: string;
  protectedAssets: string[];
}