export const getRouteColor = (priority: string, status: string) => {
  if (status === "blocked") return "#ff0000";
  if (status === "partially_blocked") return "#ff8800";

  switch (priority) {
    case "primary":
      return "#00aa00";
    case "secondary":
      return "#0066cc";
    case "emergency":
      return "#cc00cc";
    case "alternative":
      return "#888888";
    default:
      return "#666666";
  }
};

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

export const getHazardColor = (level: string) => {
  switch (level) {
    case "high":
      return "#ff4444";
    case "medium":
      return "#ff8800";
    case "low":
      return "#44aa44";
    default:
      return "#888888";
  }
};