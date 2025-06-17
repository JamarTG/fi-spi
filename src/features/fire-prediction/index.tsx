import React, { useState } from "react";
import "leaflet/dist/leaflet.css";

const FirePredictionMap: React.FC = () => {
  const [showPredictions, setShowPredictions] = useState(true);

  return (
    <div className="h-[90vh] w-[70vw] relative">
      <div className="absolute top-2.5 right-2.5 z-50 bg-white p-2.5 rounded-md shadow-md">
        <h3 className="mb-2.5 text-sm">Fire Risk Legend</h3>
        <div className="text-xs">
          <div className="flex items-center mb-1.5">
            <div className="w-3.5 h-3.5 bg-[#ff4444] mr-2 rounded-full"></div>
            High Risk (80%+)
          </div>
          <div className="flex items-center mb-1.5">
            <div className="w-3.5 h-3.5 bg-[#ff8800] mr-2 rounded-full"></div>
            Medium Risk (40-79%)
          </div>
          <div className="flex items-center mb-2.5">
            <div className="w-3.5 h-3.5 bg-[#ffdd00] mr-2 rounded-full"></div>
            Low Risk (0-39%)
          </div>
          <label className="flex items-center text-[11px]">
            <input
              type="checkbox"
              checked={showPredictions}
              onChange={(e) => setShowPredictions(e.target.checked)}
              className="mr-1.5"
            />
            Show Predictions
          </label>
        </div>
      </div>

      {/*  */}
    </div>
  );
};

export default FirePredictionMap;
