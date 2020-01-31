import React, { useEffect, useState } from "react";
import Map from "./components/Maps/Map";
import FetchEarthquakeData from "./FetchEarthquakeData";

import "./App.css";

function App() {
  const url =
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";
  const [earthquakes, setEarthquakes] = useState([]);

  // fetch the url, traverse the json-tree for the wanted array and set the data in the earthquakes object
  useEffect(() => {
    FetchEarthquakeData(url).then(data => {
      setEarthquakes(data.features);
    });
  }, []);

  return (
    <div className="App">
      <Map earthquakes={earthquakes} />
    </div>
  );
}

export default App;
