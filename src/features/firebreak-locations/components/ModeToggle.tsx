import type { Dispatch, SetStateAction } from "react";

interface ModeToggleProps {
  setPlanningMode: Dispatch<SetStateAction<boolean>>;
  planningMode: boolean;
}

const ModeToggle: React.FC<ModeToggleProps> = ({ setPlanningMode, planningMode }) => {
  return (
    <div className="mb-4">
      <button
        onClick={() => setPlanningMode(!planningMode)}
        className={`w-full py-2 mb-2.5 rounded text-white cursor-pointer border-0 ${planningMode ? "bg-orange-600" : "bg-green-600"}`}
      >
        {planningMode ? "Exit Planning Mode" : "Enter Planning Mode"}
      </button>
    </div>
  );
};

export default ModeToggle;
