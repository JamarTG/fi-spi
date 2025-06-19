import type { PathOptions } from "leaflet";
import type { EvacuationRoute } from "./types";

export const getShelterIcon = (type: string) => {
  switch (type) {
    case "major_shelter":
      return "🏟️";
    case "shelter":
      return "🏠";
    case "medical_center":
      return "🏥";
    case "temporary":
      return "⛺";
    default:
      return "📍";
  }
};

export const getRouteColor = (route:EvacuationRoute) => {
  if (route.status === "blocked") return "text-red-600";
  if (route.status === "partially_blocked") return "text-amber-500";

  switch (route.priority) {
    case "primary":
      return "text-green-600";
    case "secondary":
      return "text-blue-600";
    case "emergency":
      return "text-purple-600";
    case "alternative":
      return "text-gray-500";
    default:
      return "text-gray-600";
  }
};

export const getHazardColor = (level: string) => {
  switch (level) {
    case "high":
      return "text-red-500";
    case "medium":
      return "text-amber-500";
    case "low":
      return "text-green-500";
    default:
      return "text-gray-500";
  }
};

export function formatEvacuationProgress(value: number | undefined): string {
  return (value ?? 0).toFixed(1) + "%";
}

export const generateRouteKey = (route: EvacuationRoute) => `route-${route.id}`;

const getPathWeight = (route: EvacuationRoute, selectedRoute: number | null) => {
  return selectedRoute === route.id ? 6 : 4;
};
const getPathOpacity = (route: EvacuationRoute, selectedRoute: number | null) => {
  return selectedRoute === route.id ? 1 : 0.8;
};
const getPathDashArray = (route: EvacuationRoute) => {
  route.status === "partially_blocked" ? "10, 10" : undefined;
};
const getPathColor = (route: EvacuationRoute) => {
  if (route.status === "blocked") return "text-red-600";
  if (route.status === "partially_blocked") return "text-amber-500";

  switch (route.priority) {
    case "primary":
      return "text-green-600";
    case "secondary":
      return "text-blue-600";
    case "emergency":
      return "text-purple-600";
    case "alternative":
      return "text-gray-500";
    default:
      return "text-gray-600";
  }
};

export const getPathOptions = (route: EvacuationRoute, selectedRoute: number | null) =>
  ({
    color: getPathColor(route).replace("text-", ""),
    weight: getPathWeight(route, selectedRoute),
    opacity: getPathOpacity(route, selectedRoute),
    dashArray: getPathDashArray(route),
  } as PathOptions);
