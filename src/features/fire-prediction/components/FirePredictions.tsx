import { Circle, Popup } from "react-leaflet";
import { firePredictions } from "../data";
import { getIntensityOpacity, getRiskColor } from "../utils";

interface FirePredictionsProps {
  showPredictions: boolean;
}

const FirePredictions: React.FC<FirePredictionsProps> = ({ showPredictions }) => {
  if (!showPredictions) return null;

  return (
    <div>
      {firePredictions.map((prediction) => (
        <Circle
          key={prediction.id}
          center={[prediction.lat, prediction.lng]}
          radius={prediction.radius}
          pathOptions={{
            color: getRiskColor(prediction.riskLevel),
            fillColor: getRiskColor(prediction.riskLevel),
            fillOpacity: getIntensityOpacity(prediction.intensity),
            weight: 2,
          }}
        >
          <Popup>
            <div className="min-w-[200px]">
              <h4
                className="mb-2 font-bold"
                style={{ color: getRiskColor(prediction.riskLevel) }}
              >
                {prediction.riskLevel.toUpperCase()} RISK ZONE
              </h4>
              <p>
                <strong>Fire Probability:</strong> {prediction.probability}%
              </p>
              <p>
                <strong>Predicted Intensity:</strong> {prediction.intensity}
              </p>
              <p>
                <strong>Affected Radius:</strong> {(prediction.radius / 1000).toFixed(1)} km
              </p>
              <div>
                <strong>Contributing Factors:</strong>
                <ul className="my-1 pl-5 list-disc">
                  {prediction.factors.map((factor, index) => (
                    <li
                      key={index}
                      className="text-xs"
                    >
                      {factor}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-2 p-2 bg-gray-100 rounded text-[11px]">
                <strong>Recommendation:</strong>{" "}
                {prediction.riskLevel === "high"
                  ? "Immediate evacuation may be required. Monitor weather conditions."
                  : prediction.riskLevel === "medium"
                  ? "Stay alert and prepare evacuation plans."
                  : "Continue normal activities with basic fire safety awareness."}
              </div>
            </div>
          </Popup>
        </Circle>
      ))}
    </div>
  );
};

export default FirePredictions;
