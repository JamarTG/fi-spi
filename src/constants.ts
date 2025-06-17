import type { LatLngBoundsExpression } from "leaflet";

export const MAP_CONFIG = {
  JAMAICA_CENTER: [18.1096, -77.2975] as [number, number],
  JAMAICA_BOUNDS: [
    [17.5, -79],
    [18.7, -76],
  ] as LatLngBoundsExpression,
  ZOOM:7
};
