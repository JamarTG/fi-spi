import React, { useState } from 'react';
import { MapContainer, TileLayer, LayersControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MAP_CONFIG } from '../../constants';
import FirePredictions from './components/FirePredictions';

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

      <MapContainer
        center={MAP_CONFIG.JAMAICA_CENTER}
        zoom={7}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
        maxBounds={MAP_CONFIG.JAMAICA_BOUNDS}
        maxBoundsViscosity={1.0}
      >
        <LayersControl position="topleft">
          <LayersControl.BaseLayer checked name="Satellite">
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              attribution="Tiles © Esri — Source: NASA, NOAA"
            />
          </LayersControl.BaseLayer>
          
          <LayersControl.BaseLayer name="Street Map">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="© OpenStreetMap contributors"
            />
          </LayersControl.BaseLayer>
        </LayersControl>

        <FirePredictions showPredictions={showPredictions} />
      </MapContainer>
    </div>
  );
};

export default FirePredictionMap;
