const RoutePriority = () => {
  return (
    <div className="text-[11px]">
  <div className="mb-1 font-bold">Route Priority:</div>

  <div className="flex items-center mb-1">
    <div className="w-4 h-[3px] bg-green-600 mr-1.5" />
    Primary (fastest, highest capacity)
  </div>

  <div className="flex items-center mb-1">
    <div className="w-4 h-[3px] bg-blue-700 mr-1.5" />
    Secondary (backup routes)
  </div>

  <div className="flex items-center mb-1">
    <div className="w-4 h-[3px] bg-purple-700 mr-1.5" />
    Emergency (high-risk areas)
  </div>

  <div className="flex items-center">
    <div className="w-4 h-[3px] bg-gray-500 mr-1.5" />
    Alternative (overflow routes)
  </div>
</div>

  );
};

export default RoutePriority;
