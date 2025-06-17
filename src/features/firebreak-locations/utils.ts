export const getFirebreakColor = (type: string, status: string) => {
  if (status === "proposed") return "#0066cc";
  if (status === "needs_maintenance") return "#ff8800";

  switch (type) {
    case "road":
      return "#444444";
    case "water":
      return "#0088cc";
    case "cleared_vegetation":
      return "#88aa44";
    default:
      return "#666666";
  }
};

export const getDefensibleSpaceColor = (clearanceLevel: string, status: string) => {
  if (status === "needs_improvement") return "#ff8800";

  switch (clearanceLevel) {
    case "high":
      return "#00aa00";
    case "medium":
      return "#88cc00";
    case "low":
      return "#cccc00";
    default:
      return "#888888";
  }
};

export const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "critical":
      return "#ff0000";
    case "high":
      return "#ff4400";
    case "medium":
      return "#ff8800";
    case "low":
      return "#ffcc00";
    default:
      return "#888888";
  }
};