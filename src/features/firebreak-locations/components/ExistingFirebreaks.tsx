import { Polyline, Popup } from "react-leaflet";
import { getFirebreakColor, getPriorityColor } from "../utils";
import { existingFirebreaks } from "../data";

interface ExistingFirebreaksProps {
  showExisting: boolean;
}

const ExistingFirebreaks: React.FC<ExistingFirebreaksProps> = ({ showExisting }) => {
  if (!showExisting) return;
  return (
   <div>
  {existingFirebreaks.map((fb) => {
    const firebreakColor = getFirebreakColor(fb.type, fb.status);
    const priorityColor = getPriorityColor(fb.priority);

    return (
      <Polyline
        key={`existing-${fb.id}`}
        positions={fb.path}
        pathOptions={{
          color: firebreakColor,
          weight: Math.max(4, fb.width / 10),
          opacity: 0.8,
          dashArray: fb.status === "needs_maintenance" ? "10, 5" : undefined,
        }}
      >
        <Popup>
          <div className="min-w-[200px]">
            <h4 className="mb-2.5">{fb.name}</h4>
            <p>
              <strong>Type:</strong> {fb.type.replace("_", " ")}
            </p>
            <p>
              <strong>Width:</strong> {fb.width} meters
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span className="font-semibold" style={{ color: firebreakColor }}>
                {fb.status.replace("_", " ")}
              </span>
            </p>
            <p>
              <strong>Effectiveness:</strong> {fb.effectiveness}%
            </p>
            <p>
              <strong>Last Maintained:</strong> {fb.lastMaintained}
            </p>
            <p>
              <strong>Priority:</strong>{" "}
              <span className="font-semibold" style={{ color: priorityColor }}>
                {fb.priority}
              </span>
            </p>

            {fb.status === "needs_maintenance" && (
              <div className="mt-2 p-1.5 bg-yellow-100 rounded text-yellow-800 font-bold">
                ⚠️ MAINTENANCE REQUIRED
              </div>
            )}
          </div>
        </Popup>
      </Polyline>
    );
  })}
</div>

  );
};

export default ExistingFirebreaks;
