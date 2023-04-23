import Header from '@/components/Header'
import Content from '@/components/Content'
import Acceso from '@/components/Acceso'
import React from 'react'
import Rectificacion from '@/components/Rectificacion'
import Cancelacion from '@/components/Cancelacion'
import Oposicion from '@/components/Oposicion'

export default function Home() {
  const [showAcceso, setshowAcceso] = React.useState(false);
  const [showRectificacion, setshowRectificacion] = React.useState(false);
  const [showCancelacion, setshowCancelacion] = React.useState(false);
  const [showOposicion, setshowOposicion] = React.useState(false);

  function displayAcceso(e){
    e.preventDefault()
    if (showAcceso){
        setshowAcceso(false)   
    } else {
        setshowAcceso(true)
    }
  }

  function displayRectificacion(e){
    e.preventDefault()
    if (showRectificacion){
        setshowRectificacion(false)   
    } else {
        setshowRectificacion(true)
    }
  }

  function displayCancelacion(e){
    e.preventDefault()
    if (showCancelacion){
        setshowCancelacion(false)   
    } else {
        setshowCancelacion(true)
    }
  }

  function displayOposicion(e){
    e.preventDefault()
    if (showOposicion){
        setshowOposicion(false)   
    } else {
        setshowOposicion(true)
    }
  }

  return (
    <div>
      <Acceso
        showAcceso = {showAcceso}
        displayAcceso = {displayAcceso}
      />
      <Rectificacion
        showRectificacion = {showRectificacion}
        displayRectificacion = {displayRectificacion}
      />
      <Cancelacion
        showCancelacion = {showCancelacion}
        displayCancelacion = {displayCancelacion}
      />
      <Oposicion
        showOposicion = {showOposicion}
        displayOposicion = {displayOposicion}
      />
      <Header/>
      <Content
        displayAcceso = {displayAcceso}
        displayRectificacion = {displayRectificacion}
        displayCancelacion = {displayCancelacion}
        displayOposicion = {displayOposicion}
      />
    </div>
  )
}
