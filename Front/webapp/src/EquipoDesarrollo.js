import React from 'react'
import EDA from './EDA'
import { Link } from 'react-router-dom'

function EquipoDesarrollo() {
  return (
    <div>
        <Link className='btn btn-success submit-button' to='/' style={{position: "fixed", top:"30px", left:"30px"}}>Volver</Link>
        <EDA/>
    </div>
  )
}

export default EquipoDesarrollo