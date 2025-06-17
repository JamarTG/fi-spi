import React from "react";

interface MapTitlePrps {
  title: string;
}

const MapTitle: React.FC<MapTitlePrps> = ({ title }) => {
  return <h3 className="mb-4 text-base text-center">{title}</h3>

};

export default MapTitle;
