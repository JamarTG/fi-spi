import React from "react";
import { getDefensibleSpaceColor } from "../utils";
import { Circle, Popup } from "react-leaflet";
import { defensibleSpaces } from "../data";

interface DefensibleSpacesProps {
  showDefensible: boolean;
}

const DefensibleSpaces: React.FC<DefensibleSpacesProps> = ({ showDefensible }) => {
  if (!showDefensible) return;
  return (
    <div>
      {defensibleSpaces.map((space) => {
        const color = getDefensibleSpaceColor(space.clearanceLevel, space.status);

        return (
          <Circle
            key={`defensible-${space.id}`}
            center={[space.center[0], space.center[1]]}
            radius={space.radius}
            pathOptions={{
              color,
              fillColor: color,
              fillOpacity: 0.2,
              weight: 2,
              dashArray: space.status === "needs_improvement" ? "10, 5" : undefined,
            }}
          >
            <Popup>
              <div className="min-w-[200px]">
                <h4 className="mb-2.5">{space.name}</h4>
                <p>
                  <strong>Type:</strong> {space.type.replace("_", " ")}
                </p>
                <p>
                  <strong>Clearance Level:</strong>{" "}
                  <span
                    className="font-semibold"
                    style={{ color }}
                  >
                    {space.clearanceLevel}
                  </span>
                </p>
                <p>
                  <strong>Radius:</strong> {space.radius} meters
                </p>
                <p>
                  <strong>Status:</strong> {space.status.replace("_", " ")}
                </p>
                <p>
                  <strong>Population:</strong> {space.population.toLocaleString()}
                </p>

                <div className="mt-2">
                  <strong>Protected Assets:</strong>
                  <ul className="my-1 ml-5 list-disc">
                    {space.assets.map((asset, index) => (
                      <li
                        key={index}
                        className="text-sm"
                      >
                        {asset}
                      </li>
                    ))}
                  </ul>
                </div>

                {space.status === "needs_improvement" && (
                  <div className="mt-2 p-2 bg-yellow-100 rounded text-yellow-800 text-sm font-semibold">
                    <strong>Improvement Needed:</strong>
                    <br />
                    Increase vegetation clearance and maintain access roads.
                  </div>
                )}
              </div>
            </Popup>
          </Circle>
        );
      })}
    </div>
  );
};

export default DefensibleSpaces;
