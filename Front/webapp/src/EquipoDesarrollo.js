import React from 'react'

import EDA from './EDA'
import './css/EquipoDesarrollo.css'
import { Link } from 'react-router-dom'
import data from './data.json'
import Dashboard from './Dashboard';
import { useState } from 'react'
// import faker from 'faker';



function EquipoDesarrollo() {

  const[graph, setGraph] = useState("USAQUEN.html")

  const handleChange = (e) => {
    let graphSelected
    if(e.target.value == 1) {
      graphSelected = "USAQUEN.html"
    } else if(e.target.value == 2) {
      graphSelected = "CHAPINERO.html"
    } else if(e.target.value == 3) {
      graphSelected = "SANTA_FE.html"
    } else if(e.target.value == 4) {
      graphSelected = "SAN_CRISTOBAL.html"
    } else if(e.target.value == 5) {
      graphSelected = "USME.html"
    } else if(e.target.value == 6) {
      graphSelected = "TUNJUELITO.html"
    } else if(e.target.value == 7) {
      graphSelected = "BOSA.html"
    } else if(e.target.value == 8) {
      graphSelected = "KENNEDY.html"
    } else if(e.target.value == 9) {
      graphSelected = "FONTIBON.html"
    } else if(e.target.value == 10) {
      graphSelected = "ENGATIVA.html"
    } else if(e.target.value == 11) {
      graphSelected = "SUBA.html"
    } else if(e.target.value == 12) {
      graphSelected = "BARRIOS_UNIDOS.html"
    } else if(e.target.value == 13) {
      graphSelected = "TEUSAQUILLO.html"
    } else if(e.target.value == 14) {
      graphSelected = "LOS_MARTIRES.html"
    } else if(e.target.value == 15) {
      graphSelected = "ANTONIO_NARIÑO.html"
    } else if(e.target.value == 16) {
      graphSelected = "PUENTE_ARANDA.html"
    } else if(e.target.value == 17) {
      graphSelected = "CANDELARIA.html"
    } else if(e.target.value == 18) {
      graphSelected = "RAFAEL_URIBE_URIBE.html"
    } else if(e.target.value == 19) {
      graphSelected = "CIUDAD_BOLIVAR.html"
    }
    
    console.log(graphSelected)
    setGraph(graphSelected)

  }

  return (
    <>
      <Link className='btn btn-success submit-button' to='/' style={{ position: "fixed", top: "15px", left: "15px" }}>Volver</Link>
      <br />
      <br />
      <br />
      <div className='select-container'>
        <div>Selecciona una localidad</div>
        <select className='form-select s' onChange={e => handleChange(e)}>
          {data.localidades.map(localidad => {
            return <option value={localidad.id}>{localidad.nombre}</option>
          })}

        </select>
      </div>

      <iframe src={"/static/graphs/" + graph} style={{ width: "100vw", height: "90vh" }}></iframe>
      {/* <Dashboard /> */}
    </>
  )
}

export default EquipoDesarrollo