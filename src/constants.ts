import type { ControlPosition, LatLngBoundsExpression, LatLngExpression } from "leaflet";


export const MAP_VIEW_CONFIG = {
  CENTER: [18.1096, -77.2975] as LatLngExpression,
  ZOOM: 9,
  SCROLL_WHEEL_ZOOM: true,
};

export const MAP_BOUNDS_CONFIG = {
  MAX_BOUNDS: [
    [17.5, -79],
    [18.7, -76],
  ] as LatLngBoundsExpression,
  MAX_BOUNDS_VISCOSITY: 1,
};

export const MAP_UI_CONFIG = {
  BASE_CLASSNAME: "h-full w-full",
  LAYER_CONTROL_POSITION: "topleft" as ControlPosition,
};

