import { Marker } from "react-leaflet/Marker";
import { emergencyShelters } from "../data";
import { Popup } from "react-leaflet/Popup";
import { getShelterIcon } from "../utils";

interface EmergencySheltersProps {
  showShelters: boolean;
}

const EmergencyShelters: React.FC<EmergencySheltersProps> = ({ showShelters }) => {
  if (!showShelters) return;
  
  return (
    <div>
      {showShelters &&
        emergencyShelters.map((shelter) => (
          <Marker
            key={`shelter-${shelter.id}`}
            position={[shelter.lat, shelter.lng]}
          >
            <Popup>
              <div className="min-w-[200px]">
                <h4 className="m-0 mb-2.5">
                  {getShelterIcon(shelter.type)} {shelter.name}
                </h4>
                <p>
                  <strong>Type:</strong> {shelter.type.replace("_", " ")}
                </p>
                <p>
                  <strong>Capacity:</strong> {shelter.capacity.toLocaleString()} people
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  <span className={shelter.status === "operational" ? "text-green-600" : "text-orange-500"}>{shelter.status}</span>
                </p>
                <div className="mt-2">
                  <strong>Facilities:</strong>
                  <ul className="my-1 pl-5">
                    {shelter.facilities.map((facility, index) => (
                      <li
                        key={index}
                        className="text-xs"
                      >
                        {facility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
    </div>
  );
};

export default EmergencyShelters;
