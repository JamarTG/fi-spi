import { formatTime } from "../utils";
import { fireOrigins } from "../data";

interface ActiveFiresProps {
  currentTime: number;
}

const ActiveFires: React.FC<ActiveFiresProps> = ({ currentTime }) => {
  return (
    <div className="absolute bottom-2.5 left-2.5 z-50 bg-white p-2.5 rounded-md shadow-md max-w-xs">
      <h4 className="mb-2.5 text-sm">Active Fires</h4>
      {fireOrigins.map((fire) => {
        const isActive = currentTime >= fire.ignitionTime;
        const duration = Math.max(0, currentTime - fire.ignitionTime);

        return (
          <div
            key={fire.id}
            className={`
          mb-2
          p-1.5
          rounded-sm
          border
          ${isActive ? "bg-red-100 border-red-500" : "bg-gray-100 border-gray-300"}
        `}
          >
            <div className="text-xs font-bold">{fire.name}</div>
            <div className="text-xs text-gray-600">
              {isActive ? `Active for ${formatTime(duration)}` : `Ignites at ${formatTime(fire.ignitionTime)}`}
            </div>
            <div className="text-xs text-gray-600">
              Wind: {fire.windSpeed} km/h, {fire.windDirection}°
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ActiveFires;
