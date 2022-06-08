import React, { useState } from "react";
import Map from "./Map";
import { Layers, TileLayer, VectorLayer } from "./Layers";
import { Style, Icon, Fill, Stroke } from "ol/style";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { LineString } from "ol/geom";
import { osm, vector } from "./Source";
import { fromLonLat, get } from "ol/proj";
import GeoJSON from "ol/format/GeoJSON";
import { Controls, FullScreenControl } from "./Controls";
import { transform } from "ol/proj";
import { Geolocation } from "ol";
import FeatureStyles from "./Features/Styles";

import mapConfig from "./config.json";
import "./App.css";

const geojsonObject = mapConfig.geojsonObject;
const geojsonObject2 = mapConfig.geojsonObject2;
const markersLonLat = [mapConfig.bogotaCityLonLat, mapConfig.blueSpringsLonLat];

function addMarkers(lonLatArray) {
  var iconStyle = new Style({
    image: new Icon({
      anchor:[0.5, 30],
      anchorXUnits: "fraction",
      anchorYUnits: "pixels",
      src: mapConfig.markerImage32,
    }),
  });
  let features = lonLatArray.map((item) => {
    let feature = new Feature({
      geometry: new Point(fromLonLat(item)),
    });
    feature.setStyle(iconStyle);
    return feature;
  });
  features.push(addLine(lonLatArray))
  return features;
}

function addLine(lonLatArray) {
  let points = [ lonLatArray[0], lonLatArray[1] ]
  for (let i = 0; i < points.length; i++) {
    points[i] = transform(points[i], 'EPSG:4326', 'EPSG:3857');
  }
  let feature = new Feature({
    geometry: new LineString(points)
  })
  feature.setStyle(new Style({
    fill: new Fill({ color: '#000000', weight: 4 }),
    stroke: new Stroke({ color: '#000000', width: 2 })
  }))

  return feature
}


const App = () => {
  const [center, setCenter] = useState(mapConfig.center);
  const [zoom, setZoom] = useState(14);

  const [showLayer1, setShowLayer1] = useState(true);
  const [showLayer2, setShowLayer2] = useState(true);
  const [showMarker, setShowMarker] = useState(true);

  const [features, setFeatures] = useState(addMarkers(markersLonLat));

  return (
    <div className="App">
      <div className="main-sidebar">
        <div className="logos">
          <img src="logoTransmilenio.png" className="small-image"/>
          <div className="vertical-line"></div>
          <img src="logoSitp.png" className="small-image"/>
        </div>
        <div className="formulario">
          <h3>Datos del viaje:</h3>
          <div className="horizontal-line"></div>
          <form className="main-form">
              Punto de salida:
              <input className="form-control icon-input-ubicacion" />
              <br />
              Punto de llegada:
              <input className="form-control icon-input-ubicacion" />
              <br />
              Hora de salida:
              <input className="form-control icon-input-reloj" />
              <br />
              <br />
              <button className="btn btn-success submit-button" type="submit"> Encontrar tiempo </button>
          </form>
        </div>
        <div className="link-section">
          <a href="https://www.transmilenio.gov.co/" target="_blank">Ir a pagina Transmilenio</a> |
          <a href="#"> Equipo de desarrollo</a>
        </div>
      </div>
      <div className="main-title">
        Encuentra el tiempo que tomara tu viaje
      </div>
      <Map center={fromLonLat(center)} zoom={zoom}>
        <Layers>
          <TileLayer source={osm()} zIndex={0} />
          {showLayer1 && (
            <VectorLayer
              source={vector({
                features: new GeoJSON().readFeatures(geojsonObject, {
                  featureProjection: get("EPSG:3857"),
                }),
              })}
              style={FeatureStyles.MultiPolygon}
            />
          )}
          {showLayer2 && (
            <VectorLayer
              source={vector({
                features: new GeoJSON().readFeatures(geojsonObject2, {
                  featureProjection: get("EPSG:3857"),
                }),
              })}
              style={FeatureStyles.MultiPolygon}
            />
          )}
          {showMarker && <VectorLayer source={vector({ features })} />}
        </Layers>
        <Controls>
          <FullScreenControl />
        </Controls>
      </Map> 
      <div>
        <input
          type="checkbox"
          checked={showLayer1}
          onChange={(event) => setShowLayer1(event.target.checked)}
        />{" "}
        Johnson County
      </div>
      <div>
        <input
          type="checkbox"
          checked={showLayer2}
          onChange={(event) => setShowLayer2(event.target.checked)}
        />{" "}
        Wyandotte County
      </div>
      <hr />
      <div>
        <input
          type="checkbox"
          checked={showMarker}
          onChange={(event) => setShowMarker(event.target.checked)}
        />{" "}
        Show markers
      </div>
    </div>
  );
};

export default App;