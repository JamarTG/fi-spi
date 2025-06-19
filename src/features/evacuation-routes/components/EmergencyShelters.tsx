import { Marker } from "react-leaflet/Marker";
import { emergencyShelters } from "../data";
import { Popup } from "react-leaflet/Popup";
import { getShelterIcon } from "../utils";
import type { EmergencyShelter } from "../types";
import List from "../../../components/List";
import type { LatLngExpression } from "leaflet";

interface EmergencySheltersProps {
  showShelters: boolean;
}

const EmergencyShelters: React.FC<EmergencySheltersProps> = ({ showShelters }) => {
  if (!showShelters) return;

  const getShelterKey = (shelter: EmergencyShelter) => {
    return `shelter-${shelter.id}`;
  };

  const getEmergencyShelterCoords = (shelter: EmergencyShelter):LatLngExpression => {
    return [shelter.lat, shelter.lng]
  }

  const renderEmergencyShelter = (shelter: EmergencyShelter) => (
    <Marker
      key={getShelterKey(shelter)}
      position={getEmergencyShelterCoords(shelter)}
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
  );
  return <List data={emergencyShelters} renderFn={renderEmergencyShelter} />;
};

export default EmergencyShelters;
