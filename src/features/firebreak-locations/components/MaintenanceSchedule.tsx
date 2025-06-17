import { existingFirebreaks } from "../data";

const MaintenanceSchedule = () => {
  return (
    <div className="mb-4">
      <h4 className="mb-2 text-sm">Maintenance Status</h4>
      {existingFirebreaks.map((fb) => (
        <div
          key={fb.id}
          className={`mb-1.5 p-1.5 rounded border text-[10px] ${
            fb.status === "needs_maintenance"
              ? "bg-yellow-100 border-yellow-400 text-yellow-600 font-semibold"
              : "bg-gray-50 border-gray-300"
          }`}
        >
          <div className="font-bold">{fb.name}</div>
          <div>Effectiveness: {fb.effectiveness}%</div>
          <div>Last maintained: {fb.lastMaintained}</div>
          {fb.status === "needs_maintenance" && <div className="text-yellow-600 font-bold mt-1">⚠️ Maintenance Required</div>}
        </div>
      ))}
    </div>
  );
};

export default MaintenanceSchedule;
