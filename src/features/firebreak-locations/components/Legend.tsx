const Legend = () => {
  return (
    <div className="text-[11px] sm:text-xs md:text-sm">
      <div className="mb-1 font-bold sm:mb-2 md:mb-3">Legend:</div>

      <div className="mb-2">
        <div className="mb-1 font-bold">Firebreak Types:</div>

        <div className="flex items-center mb-1">
          <div className="w-4 h-0.5 bg-gray-700 mr-2 sm:w-5 sm:h-1"></div>
          Road barriers
        </div>
        <div className="flex items-center mb-1">
          <div className="w-4 h-0.5 bg-blue-600 mr-2 sm:w-5 sm:h-1"></div>
          Water barriers
        </div>
        <div className="flex items-center mb-1">
          <div className="w-4 h-0.5 bg-green-600 mr-2 sm:w-5 sm:h-1"></div>
          Cleared vegetation
        </div>
        <div className="flex items-center mb-1">
          <div className="w-4 h-0.5 bg-blue-800 mr-2 sm:w-5 sm:h-1"></div>
          Proposed
        </div>
      </div>

      <div>
        <div className="mb-1 font-bold">Priority Levels:</div>

        <div className="flex items-center mb-1">
          <div className="w-3 h-3 bg-red-600 mr-2 sm:w-4 sm:h-4"></div>
          Critical
        </div>
        <div className="flex items-center mb-1">
          <div className="w-3 h-3 bg-orange-600 mr-2 sm:w-4 sm:h-4"></div>
          High
        </div>
        <div className="flex items-center mb-1">
          <div className="w-3 h-3 bg-orange-400 mr-2 sm:w-4 sm:h-4"></div>
          Medium
        </div>
      </div>
    </div>
  );
};

export default Legend;
