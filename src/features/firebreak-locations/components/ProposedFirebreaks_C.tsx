import { Polyline, Popup } from "react-leaflet";
import type { ProposedFirebreaks } from "../types";
import { getPriorityColor } from "../utils";

interface ProposedFirebreaksProps {
  showProposed: boolean;
  filteredProposed: ProposedFirebreaks[];
  selectedFirebreak: number | null;
  planningMode: boolean;
}

const ProposedFirebreaksC: React.FC<ProposedFirebreaksProps> = ({ showProposed, filteredProposed, selectedFirebreak, planningMode }) => {
  return (
    <div>
      {showProposed &&
        filteredProposed.map((fb) => (
          <Polyline
            key={`proposed-${fb.id}`}
            positions={fb.path}
            pathOptions={{
              color: getPriorityColor(fb.priority),
              weight: selectedFirebreak === fb.id ? 8 : Math.max(4, fb.width / 10),
              opacity: selectedFirebreak === fb.id ? 1 : 0.7,
              dashArray: "15, 10",
            }}
          >
            <Popup>
              <div className="min-w-[220px] text-[13px]">
                <h4
                  className="mb-2 font-semibold"
                  style={{ color: getPriorityColor(fb.priority) }}
                >
                  {fb.name} (PROPOSED)
                </h4>
                <p>
                  <strong>Type:</strong> {fb.type.replace("_", " ")}
                </p>
                <p>
                  <strong>Width:</strong> {fb.width} meters
                </p>
                <p>
                  <strong>Priority:</strong> <span style={{ color: getPriorityColor(fb.priority) }}>{fb.priority}</span>
                </p>
                <p>
                  <strong>Estimated Cost:</strong> ${fb.cost?.toLocaleString()}
                </p>
                <p>
                  <strong>Timeline:</strong> {fb.timeline}
                </p>
                <div className="mt-2">
                  <strong>Protected Assets:</strong>
                  <ul className="my-1 pl-5 list-disc">
                    {fb.protectedAssets?.map((asset, index) => (
                      <li
                        key={index}
                        className="text-[12px]"
                      >
                        {asset}
                      </li>
                    ))}
                  </ul>
                </div>
                {planningMode && (
                  <div className="mt-2 p-2 rounded bg-blue-50 text-[11px]">
                    <strong>Planning Notes:</strong>
                    <br />
                    Environmental impact assessment required.
                    <br />
                    Coordinate with local authorities.
                  </div>
                )}
              </div>
            </Popup>
          </Polyline>
        ))}
    </div>
  );
};

export default ProposedFirebreaksC;
