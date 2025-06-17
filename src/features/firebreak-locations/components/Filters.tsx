import type { Dispatch, SetStateAction } from "react";

interface FiltersProps {
  priorityFilter: string;
  setPriorityFilter: Dispatch<SetStateAction<string>>;
  showExisting: boolean;
  setShowExisting: Dispatch<SetStateAction<boolean>>;
  showProposed: boolean;
  setShowProposed: Dispatch<SetStateAction<boolean>>;
  showDefensible: boolean;
  setShowDefensible: Dispatch<SetStateAction<boolean>>;
  showWaterSources: boolean;
  setShowWaterSources: Dispatch<SetStateAction<boolean>>;
}

const Filters: React.FC<FiltersProps> = ({
  priorityFilter,
  setPriorityFilter,
  showExisting,
  setShowExisting,
  showProposed,
  setShowProposed,
  showDefensible,
  showWaterSources,
  setShowDefensible,
  setShowWaterSources,
}) => {
  return (
    <div className="mb-4">
      <div className="mb-2.5">
        <label className="block text-[12px] mb-1">Priority Filter:</label>
        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
          className="w-full p-1 text-[12px]"
        >
          <option value="all">All Priorities</option>
          <option value="critical">Critical Only</option>
          <option value="high">High Priority</option>
          <option value="medium">Medium Priority</option>
        </select>
      </div>

      <div className="text-[12px]">
        <label className="flex items-center mb-1.5">
          <input
            type="checkbox"
            checked={showExisting}
            onChange={(e) => setShowExisting(e.target.checked)}
            className="mr-1.5"
          />
          Existing Firebreaks
        </label>
        <label className="flex items-center mb-1.5">
          <input
            type="checkbox"
            checked={showProposed}
            onChange={(e) => setShowProposed(e.target.checked)}
            className="mr-1.5"
          />
          Proposed Firebreaks
        </label>
        <label className="flex items-center mb-1.5">
          <input
            type="checkbox"
            checked={showDefensible}
            onChange={(e) => setShowDefensible(e.target.checked)}
            className="mr-1.5"
          />
          Defensible Spaces
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={showWaterSources}
            onChange={(e) => setShowWaterSources(e.target.checked)}
            className="mr-1.5"
          />
          Water Sources
        </label>
      </div>
    </div>
  );
};

export default Filters;
