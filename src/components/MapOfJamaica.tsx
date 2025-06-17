import type { PropsWithChildren } from "react";
import { LayersControl } from "react-leaflet/LayersControl";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { MAP_BOUNDS_CONFIG, MAP_UI_CONFIG, MAP_VIEW_CONFIG } from "../constants";

const MapOfJamaica: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <MapContainer
      center={MAP_VIEW_CONFIG.CENTER}
      zoom={MAP_VIEW_CONFIG.ZOOM}
      scrollWheelZoom={MAP_VIEW_CONFIG.SCROLL_WHEEL_ZOOM}
      className={MAP_UI_CONFIG.BASE_CLASSNAME}
      maxBounds={MAP_BOUNDS_CONFIG.MAX_BOUNDS}
      maxBoundsViscosity={MAP_BOUNDS_CONFIG.MAX_BOUNDS_VISCOSITY}
    >
      <LayersControl position={MAP_UI_CONFIG.LAYER_CONTROL_POSITION}>
        <LayersControl.BaseLayer
          checked
          name="Satellite"
        >
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
      {children}
    </MapContainer>
  );
};

export default MapOfJamaica;
