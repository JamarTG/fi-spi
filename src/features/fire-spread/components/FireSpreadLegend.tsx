const FireSpreadLegend = () => {
  return (
    <div className="text-[11px] text-gray-600">
      <div className="mb-1.5 font-semibold">Legend:</div>

      <div className="flex items-center mb-0.5">
        <div className="w-3 h-3 bg-[#ff0000] mr-1.5 rounded-sm" />
        Active fire (0-1h)
      </div>

      <div className="flex items-center mb-0.5">
        <div className="w-3 h-3 bg-[#ff4400] mr-1.5 rounded-sm" />
        Spreading (1-3h)
      </div>

      <div className="flex items-center mb-0.5">
        <div className="w-3 h-3 bg-[#ff8800] mr-1.5 rounded-sm" />
        Established (3-6h)
      </div>

      <div className="flex items-center">
        <div className="w-3 h-3 bg-[#cc4400] mr-1.5 rounded-sm" />
        Mature fire (6h+)
      </div>
    </div>
  );
};

export default FireSpreadLegend;
