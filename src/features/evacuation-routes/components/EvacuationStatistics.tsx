interface EvacuationStatisticsProps {
  evacuatedCount: number;
  totalEvacuees: number;
}

const EvacuationStatistics: React.FC<EvacuationStatisticsProps> = ({ evacuatedCount, totalEvacuees }) => {
  return (
    <div className="mb-4 p-2.5 bg-blue-50 rounded-md border border-blue-600">
      <div className="text-xs font-bold mb-1">Evacuation Status</div>
      <div className="text-xl font-bold text-blue-600">
        {evacuatedCount.toLocaleString()} / {totalEvacuees.toLocaleString()}
      </div>
      <div className="text-[11px] text-gray-600">{((evacuatedCount / totalEvacuees) * 100).toFixed(1)}% evacuated</div>
      <div className="w-full h-2 bg-gray-300 rounded mt-1.5">
        <div
          className="h-full bg-blue-600 rounded transition-[width] duration-300"
          style={{ width: `${(evacuatedCount / totalEvacuees) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default EvacuationStatistics;
