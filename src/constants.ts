import type { LatLngBoundsExpression } from "leaflet";

interface JamaicaMapConfig {
  CENTER: [number, number];
  MAX_BOUNDS: LatLngBoundsExpression;
  ZOOM: number;
}

export const JAMAICA_MAP_CONFIG: JamaicaMapConfig = {
  CENTER: [18.1096, -77.2975],
  MAX_BOUNDS: [
    [17.5, -79],
    [18.7, -76],
  ],
  ZOOM: 9,
};
