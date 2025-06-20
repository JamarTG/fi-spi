import "leaflet/dist/leaflet.css";
import React, { useState, useEffect, useRef } from "react";
import { formatTime } from "./utils";
import ActiveFires from "./components/ActiveFires";
import MapTitle from "../../components/MapTitle";
import FireSpreadLegend from "./components/FireSpreadLegend";
import FireOrigins from "./components/FireOrigins";
import FireSpreadPolygon from "./components/FireSpreadPolygon";
import WindVectors from "./components/WindVectors";
import MapOfJamaica from "../../components/MapOfJamaica";

const FireSpreadSimulation: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [showWindVectors, setShowWindVectors] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          const newTime = prev + 10 * playbackSpeed;
          return newTime > 720 ? 0 : newTime;
        });
      }, 500);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isPlaying, playbackSpeed]);

  return (
    <div className="h-screen w-full flex relative">
      <div className="top-2.5 right-2.5 z-[1000] bg-white p-4 rounded-lg shadow-lg min-w-[250px]">
        <MapTitle title="Fire Spread Simulation" />

        <div className="mb-4 text-center">
          <div className="text-2xl font-bold text-[#ff4400]">{formatTime(currentTime)}</div>
          <div className="text-xs text-gray-500">Time since first ignition</div>
        </div>

        <div className="mb-4">
          <div className="flex gap-2 mb-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`flex-1 py-2 rounded text-white ${isPlaying ? "bg-[#ff4400]" : "bg-green-600 hover:bg-green-700"}`}
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
            <button
              onClick={() => setCurrentTime(0)}
              className="flex-1 py-2 rounded bg-gray-600 hover:bg-gray-700 text-white"
            >
              Reset
            </button>
          </div>

          <div className="mb-2">
            <label className="block text-xs mb-1">Playback Speed: {playbackSpeed}x</label>
            <input
              type="range"
              min="0.5"
              max="4"
              step="0.5"
              value={playbackSpeed}
              onChange={(e) => setPlaybackSpeed(parseFloat(e.target.value))}
              className="w-full cursor-pointer"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="flex items-center text-xs">
            <input
              type="checkbox"
              checked={showWindVectors}
              onChange={(e) => setShowWindVectors(e.target.checked)}
              className="mr-1"
            />
            Show Wind Vectors
          </label>
        </div>

        <FireSpreadLegend />
      </div>

      <ActiveFires currentTime={currentTime} />

      <MapOfJamaica>
        <FireOrigins currentTime={currentTime} />
        <FireSpreadPolygon currentTime={currentTime} />
        <WindVectors
          currentTime={currentTime}
          showWindVectors={showWindVectors}
        />
      </MapOfJamaica>
    </div>
  );
};

export default FireSpreadSimulation;
