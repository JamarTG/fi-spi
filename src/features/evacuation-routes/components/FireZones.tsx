import { Circle, Popup } from "react-leaflet";
import { activeFires } from "../data";

interface FireZonesProps {
  showFireZones: boolean;
}

const FireZones: React.FC<FireZonesProps> = ({ showFireZones }) => {
  if (!showFireZones) return;
  return (
    <div>
  {showFireZones &&
    activeFires.map((fire) => (
      <Circle
        key={`fire-${fire.id}`}
        center={[fire.lat, fire.lng]}
        radius={fire.radius}
        pathOptions={{
          color: "#ff0000",
          fillColor: "#ff4444",
          fillOpacity: 0.3,
          weight: 2,
        }}
      >
        <Popup>
          <div>
            <h4 className="m-0 mb-1 text-red-600">{fire.name}</h4>
            <p>Severity: {fire.severity}</p>
            <p>Danger radius: {(fire.radius / 1000).toFixed(1)} km</p>
            <p className="text-orange-600 font-bold">EVACUATION REQUIRED</p>
          </div>
        </Popup>
      </Circle>
    ))}
</div>

  );
};

export default FireZones;
