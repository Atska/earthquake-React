import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import "./Map.css";

const Map = ({ earthquakes }) => {
  const defaultZoom = 6;

  // object to visualize the earthquakes
  const Circle = ({ radius, text }) => {
    return (
      <div style={{ width: radius, height: radius }} className="Circle">
        <p className="magnitudeText">{text}</p>
      </div>
    );
  };

  // creates Circle objects with the props lat and lng for the location and radius to visualize the earthquakes
  const Earthquakes = () => {
    return earthquakes.map(earthquake => (
      <Circle
        lat={earthquake.geometry.coordinates[1]}
        lng={earthquake.geometry.coordinates[0]}
        key={earthquake.id}
        // this radius-value was chosen to show small earthquakes as small and bigger ones with a wider circle
        radius={earthquake.properties.mag * earthquake.properties.mag}
      />
    ));
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
        defaultCenter={{ lat: 50.937531, lng: 6.960279 }}
        defaultZoom={defaultZoom}>
        {Earthquakes()}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
