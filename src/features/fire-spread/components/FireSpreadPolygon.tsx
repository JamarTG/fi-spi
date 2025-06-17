import { Polygon } from "react-leaflet";
import { fireOrigins } from "../data";
import { generateSpreadPolygons } from "../utils";

interface FireSpreadPolygonProps {
  currentTime: number;
}

const FireSpreadPolygon: React.FC<FireSpreadPolygonProps> = ({ currentTime }) => {
  return (
    <div>
      {fireOrigins.map((fire) => {
        if (currentTime < fire.ignitionTime) return null;

        const spreadPolygons = generateSpreadPolygons(fire, currentTime);

        return spreadPolygons.map((polygon) => (
          <Polygon
            key={polygon.id}
            positions={polygon.points}
            pathOptions={{
              color: polygon.color,
              fillColor: polygon.color,
              fillOpacity: Math.max(0.1, polygon.intensity * 0.3),
              weight: 1,
              opacity: polygon.intensity,
            }}
          />
        ));
      })}
    </div>
  );
};

export default FireSpreadPolygon;
