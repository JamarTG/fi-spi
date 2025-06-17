import type { ExistingFirebreaks } from "../types";

interface ProjectSummaryProps {
  totalCost: number;
  criticalCount: number;
  protectedPopulation: number;
  existingFirebreaks: ExistingFirebreaks[];
}

const ProjectSummary: React.FC<ProjectSummaryProps> = ({ totalCost, criticalCount, protectedPopulation, existingFirebreaks }) => {
  return (
    <div className="mb-4 p-3 bg-blue-50 rounded-md border border-blue-600">
      <div className="text-xs font-bold mb-2">Project Overview</div>
      <div className="text-[11px] mb-1">
        <strong>Total Investment:</strong> ${totalCost.toLocaleString()}
      </div>
      <div className="text-[11px] mb-1">
        <strong>Critical Projects:</strong> {criticalCount}
      </div>
      <div className="text-[11px] mb-1">
        <strong>Protected Population:</strong> {protectedPopulation.toLocaleString()}
      </div>
      <div className="text-[11px]">
        <strong>Existing Firebreaks:</strong> {existingFirebreaks.length}
      </div>
    </div>
  );
};

export default ProjectSummary;
