import { Circle, Popup } from "react-leaflet";
import { fireOrigins } from "../data";
import { formatTime } from "../utils";

interface FireOriginsProps {
  currentTime: number;
}

const FireOrigins: React.FC<FireOriginsProps> = ({ currentTime }) => {
  return (
    <div>
  {fireOrigins.map((fire) => (
    <Circle
      key={`origin-${fire.id}`}
      center={[fire.lat, fire.lng]}
      radius={200}
      pathOptions={{
        color: "#000",
        fillColor: currentTime >= fire.ignitionTime ? "#ff0000" : "#666",
        fillOpacity: 0.8,
        weight: 2,
      }}
    >
      <Popup>
        <div className="min-w-[200px]">
          <h4 className="mb-2.5 font-semibold">{fire.name}</h4>
          <p><strong>Cause:</strong> {fire.cause}</p>
          <p><strong>Ignition Time:</strong> {formatTime(fire.ignitionTime)}</p>
          <p><strong>Wind:</strong> {fire.windSpeed} km/h at {fire.windDirection}°</p>
          <p><strong>Vegetation:</strong> {fire.vegetation}</p>
          <p><strong>Terrain:</strong> {fire.terrain}</p>
          {currentTime >= fire.ignitionTime && (
            <p><strong>Burning for:</strong> {formatTime(currentTime - fire.ignitionTime)}</p>
          )}
        </div>
      </Popup>
    </Circle>
  ))}
</div>

  );
};

export default FireOrigins;
