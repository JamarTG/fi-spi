import React, { type Dispatch, type SetStateAction } from "react";
import { getPriorityColor } from "../utils";
import type { ProposedFirebreaks } from "../types";

interface ProposedProjectsListProps {
  filteredProposed: ProposedFirebreaks[];
  setSelectedFirebreak: Dispatch<SetStateAction<number | null>>;
  selectedFirebreak: number | null;
}

const ProposedProjectsList: React.FC<ProposedProjectsListProps> = ({ filteredProposed, setSelectedFirebreak, selectedFirebreak }) => {
  return (
    <div className="mb-4">
      <h4 className="mb-2 text-sm font-semibold">Proposed Projects</h4>
      {filteredProposed.map((fb) => (
        <div
          key={fb.id}
          onClick={() => setSelectedFirebreak(selectedFirebreak === fb.id ? null : fb.id)}
          className={`mb-2 p-2 rounded border-2 text-[11px] cursor-pointer ${selectedFirebreak === fb.id ? "bg-blue-50" : "bg-gray-100"}`}
          style={{
            borderColor: getPriorityColor(fb.priority),
          }}
        >
          <div className="font-bold mb-1">{fb.name}</div>
          <div className="flex justify-between mb-1">
            <span>
              Priority: <span style={{ color: getPriorityColor(fb.priority) }}>{fb.priority}</span>
            </span>
            <span>{fb.timeline}</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>Cost: ${fb.cost?.toLocaleString()}</span>
            <span>Width: {fb.width}m</span>
          </div>
          <div className="text-[10px] text-gray-600">Protects: {fb.protectedAssets?.join(", ")}</div>
        </div>
      ))}
    </div>
  );
};

export default ProposedProjectsList;
