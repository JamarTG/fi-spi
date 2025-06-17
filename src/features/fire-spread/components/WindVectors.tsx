import { Polygon } from "react-leaflet";
import { fireOrigins } from "../data";
import { generateWindArrow } from "../utils";

interface WindVectorsProps {
  showWindVectors: boolean;
  currentTime: number;
}

const WindVectors: React.FC<WindVectorsProps> = ({ showWindVectors, currentTime }) => {
  if (!showWindVectors) return;
  return (
    <div>
      {fireOrigins.map((fire) => {
        if (currentTime < fire.ignitionTime) return null;

        const windArrow = generateWindArrow(fire);
        if (!windArrow || windArrow.length === 0) return null;

        return (
          <Polygon
            key={`wind-${fire.id}`}
            positions={windArrow}
            pathOptions={{
              color: "#0066cc",
              weight: 3,
              opacity: 0.8,
            }}
          />
        );
      })}
    </div>
  );
};

export default WindVectors;
