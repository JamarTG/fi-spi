export const generateSpreadPolygons = (origin: any, timeElapsed: number) => {
  const polygons = [];
  const baseRadius = 0.005;
  const spreadRate = origin.windSpeed * 0.0001;

  for (let t = 0; t <= timeElapsed; t += 30) {
    if (t < origin.ignitionTime) continue;

    const actualTime = t - origin.ignitionTime;
    const radius = baseRadius + spreadRate * actualTime;

    // Create elliptical spread based on wind direction
    // const windRadians = (origin.windDirection * Math.PI) / 180;
    const windFactor = 1 + origin.windSpeed * 0.02; // Wind elongation factor

    const points = [];
    for (let angle = 0; angle < 360; angle += 20) {
      const angleRadians = (angle * Math.PI) / 180;

      // Elongate in wind direction
      let r = radius;
      const angleDiff = Math.abs(angle - origin.windDirection);
      if (angleDiff < 90 || angleDiff > 270) {
        r *= windFactor; // Spread faster in wind direction
      }

      const lat = origin.lat + r * Math.cos(angleRadians);
      const lng = origin.lng + r * Math.sin(angleRadians);
      points.push([lat, lng]);
    }

    polygons.push({
      id: `${origin.id}-${t}`,
      points,
      time: t,
      intensity: Math.max(0.8 - actualTime * 0.01, 0.2), // Fade over time
      color: getFireColor(actualTime),
    });
  }

  return polygons;
};

export const getFireColor = (timeElapsed: number) => {
  if (timeElapsed < 60) return "#ff0000"; // Bright red for fresh fire
  if (timeElapsed < 180) return "#ff4400"; // Orange-red
  if (timeElapsed < 360) return "#ff8800"; // Orange
  return "#cc4400"; // Dark orange for older fire
};

export const formatTime = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`;
};

export const generateWindArrow = (origin: any) => {
  const windRadians = (origin.windDirection * Math.PI) / 180;
  const arrowLength = 0.02; // Length of wind arrow

  const endLat = origin.lat + arrowLength * Math.cos(windRadians);
  const endLng = origin.lng + arrowLength * Math.sin(windRadians);

  return [
    [origin.lat, origin.lng],
    [endLat, endLng],
  ];
};
