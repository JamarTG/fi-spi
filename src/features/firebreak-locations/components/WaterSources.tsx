import { waterSources } from "../data";
import { Marker, Popup } from "react-leaflet";

interface WaterSourcesProps {
  showWaterSources: boolean;
}

const WaterSources: React.FC<WaterSourcesProps> = ({ showWaterSources }) => {
  if (!showWaterSources)
    return (
      <div>
        {showWaterSources &&
          waterSources.map((source) => (
            <Marker
              key={`water-${source.id}`}
              position={[source.lat, source.lng]}
            >
              <Popup>
                <div className="min-w-[180px]">
                  <h4 className="mb-2 text-base font-semibold">💧 {source.name}</h4>
                  <p>
                    <strong>Type:</strong> {source.type}
                  </p>
                  <p>
                    <strong>Capacity:</strong> {source.capacity}
                  </p>
                  <p>
                    <strong>Access:</strong> {source.access}
                  </p>
                  <p>
                    <strong>Status:</strong>{" "}
                    <span className={source.status === "operational" ? "text-green-600" : "text-orange-500"}>{source.status}</span>
                  </p>
                  <div className="mt-2 p-2 bg-blue-50 rounded text-[11px]">
                    <strong>Firefighting Resource</strong>
                    <br />
                    Available for aerial and ground operations
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
      </div>
    );
};

export default WaterSources;
