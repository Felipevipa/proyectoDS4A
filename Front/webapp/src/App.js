import React, { useEffect, useState } from "react";
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
import { Geolocation, View } from "ol";
import FeatureStyles from "./Features/Styles";

import mapConfig from "./config.json";
import "./App.css";
import CurrentLocation from "./Utilities/CurrentLocation";

import { Link } from 'react-router-dom'

const geojsonObject = mapConfig.geojsonObject;
const geojsonObject2 = mapConfig.geojsonObject2;
const markersLonLat = [mapConfig.bogotaCityLonLat, mapConfig.blueSpringsLonLat];


let campo = 0
let outFeatures = []

const App = () => {
  const [center, setCenter] = useState(mapConfig.center);
  const [zoom, setZoom] = useState(14);

  const [showLayer1, setShowLayer1] = useState(true);
  const [showLayer2, setShowLayer2] = useState(true);
  const [showMarker, setShowMarker] = useState(true);

  const [features, setFeatures] = useState(addMarkers(markersLonLat));
  const [puntoSalida, setPuntoSalida] = useState("")
  const [puntoLlegada, setPuntoLlegada] = useState("")
  const [hora, setHora] = useState("")
  const [estimacion, setEstimacion] = useState("")
  const [showForm, setShowForm] = useState(true)
  const [numeroCampo, setNumeroCampo] = useState(0)


  function addMarkers(lonLatArray) {
    var iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 30],
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
    let points = [lonLatArray[0], lonLatArray[1]]
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

  function addPoint(point) {
    // point = transform(point.coordinate, 'EPSG:3857', 'EPSG:4326');
    let iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 30],
        anchorXUnits: "fraction",
        anchorYUnits: "pixels",
        src: mapConfig.markerImage32,
      }),
    });
    let feature = new Feature({
      geometry: new Point(fromLonLat(point)),
    });
    feature.setStyle(iconStyle);
    return feature;
  }

  useEffect(() => {
    console.log(features)
    setShowMarker(true)
    outFeatures = features
  }, [features])

  useEffect(() => {
    console.log(showMarker)
  }, [showMarker])

  useEffect(() => {
    console.log(numeroCampo)
  }, [numeroCampo])


  const handleClick = (evt) => {

    var lonlat = transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326');
    console.log(lonlat)
    setShowMarker(false)
    // setFeatures(addMarkers([lonlat,[-74.10031803719421, 4.6066443389633065]]).concat(features))
    console.log("comparacion", numeroCampo == 0)

    if (campo == 0) {
      setFeatures([addPoint(lonlat), outFeatures[1], addLine([lonlat, transform(outFeatures[1].getGeometry().getCoordinates(), 'EPSG:3857', 'EPSG:4326')])])
      setPuntoSalida(lonlat)
      campo = 1;
    } else {
      setFeatures([outFeatures[0], addPoint(lonlat), addLine([lonlat, transform(outFeatures[0].getGeometry().getCoordinates(), 'EPSG:3857', 'EPSG:4326')])])
      setPuntoLlegada(lonlat)
      campo = 0
    }



  }

  function timeStringToFloat(time) {
    var hoursMinutes = time.split(/[.:]/);
    var hours = parseInt(hoursMinutes[0], 10);
    var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
    return hours + minutes / 60;
  }
  function floatToTimeString(time) {
    let n = new Date(0, 0);
    n.setSeconds(time * 60 * 60);;
    return n.toTimeString().slice(0, 8)
  }

  const encontrarTiempo = (e) => {
    e.preventDefault()
    const data = {
      hora_inicio: timeStringToFloat(hora),
      x_origen: puntoSalida[0],
      y_origen: puntoSalida[1],
      x_parada: puntoLlegada[0],
      y_parada: puntoLlegada[1]
    }

    console.log(data)
    setShowForm(false)

    setEstimacion(floatToTimeString(1.2))
  }


  return (
    <div className="App">
      <div className="main-sidebar">
        <div className="logos">
          <img src="logoTransmilenio.png" className="small-image" />
          <div className="vertical-line"></div>
          <img src="logoSitp.png" className="small-image" />
        </div>
        {!showForm &&
          <div>
            <button className='btn btn-success submit-button' style={{ marginLeft: "50px" }} onClick={e => setShowForm(true)}>Volver</button>
          </div>}
        <div className="formulario">
          <h3>Datos del viaje:</h3>
          <div className="horizontal-line"></div>
          {showForm &&
            <form className="main-form" onSubmit={e => encontrarTiempo(e)}>
              Punto de salida:
              <input className="form-control icon-input-ubicacion" value={puntoSalida} onChange={(event) => { setPuntoSalida(event.target.value); }} onClick={() => campo = 0} required />
              <br />
              Punto de llegada:
              <input className="form-control icon-input-ubicacion" value={puntoLlegada} onChange={(event) => { setPuntoLlegada(event.target.value); }} onClick={() => campo = 1} required />
              <br />
              Hora de salida:
              <input className="form-control icon-input-reloj" type="time" value={hora} onChange={e => setHora(e.target.value)} required />
              <br />
              <br />
              <button className="btn btn-success submit-button" type="submit"> Encontrar tiempo </button>
              <button className="btn btn-success submit-button" onClick={() => { setPuntoSalida(""); setPuntoLlegada(""); setHora("") }}> Limpiar Formulario </button>
            </form>
          }
          {!showForm &&
            <div>
              <div className="main-form">
                <p>Punto de salida:</p>
                <p className="icon-input-ubicacion">{puntoSalida[0] + " " + puntoSalida[1]}</p><br />
                <p>Punto de llegada:</p>
                <p className="icon-input-ubicacion">{puntoLlegada[0] + " " + puntoLlegada[1]}</p><br />
                <p>Hora de salida:</p>
                <p className="icon-input-reloj">{hora}</p>
              </div>
              <h3>Tiempo estimado:</h3>
              <div className="horizontal-line"></div>
              <div className="main-form">
                <p>Deberias llegar a tu destino a las:</p>
                <p className="icon-input-reloj">{floatToTimeString(timeStringToFloat(estimacion) + timeStringToFloat(hora))}</p><br />
                <p>Tiempo total:</p>
                <p className="icon-input-reloj">{estimacion}</p><br />
              </div>
            </div>
          }
          {/* <button className="btn btn-success submit-button" onClick={getCurrentLocation}> Encontrar posición actual </button> */}
        </div>
        <div className="link-section">
          <a href="https://www.transmilenio.gov.co/" target="_blank">Ir a pagina Transmilenio</a> |
          <Link to="/equipo-de-desarrollo"> Equipo de desarrollo</Link>
        </div>
      </div>
      <div className="main-title">
        Encuentra el tiempo que tomara tu viaje
      </div>
      <Map center={fromLonLat(center)} zoom={zoom} handleClick={handleClick} numeroCampo={numeroCampo} >
        <CurrentLocation />
        <Layers>
          <TileLayer source={osm()} zIndex={0} />

          {showMarker && <VectorLayer source={vector({ features })} />}
        </Layers>
        <Controls>
          <FullScreenControl />
        </Controls>
      </Map>
    </div>
  );
};

export default App;