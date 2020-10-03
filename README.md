### Introduction

This is a project which shows the latest earthquakes on google maps.

- [Earthquake-Api:](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php/) Source of the Data required. Especially this json-format of [all-day](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson).
- [google-map-react:](https://github.com/google-map-react/google-map-react) This libary was used to visualize the data on google maps.
- [Google Api](https://console.developers.google.com) You will need "Maps JavaScript API" and an api-key for this project.

### Demo

<img src="https://raw.githubusercontent.com/Atska/earthquake-React/master/public/examplePicture/Demo.jpg"/>

### `npm start`

Save your api-key in a .env.local file (create one if it doesnt exist) like this: <br />

REACT_APP_GOOGLE_KEY="Insert key here" (The REACT_APP_ is important otherwise it doesnt work)

To start the app use following command:
> REACT_APP_GOOGLE_KEY="insert key" npm start

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console
