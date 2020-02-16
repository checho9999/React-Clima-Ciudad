import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {

  //useState del Formulario
  const [ busqueda, guardarBusqueda ] = useState({
    ciudad: '',
    pais: ''
  })

  //
  const [ consultar, guardarConsultar ] = useState(false)

  //Extrayendo ciudad y pais desde el useState
  const { ciudad, pais } = busqueda;  

  useEffect(() => {
    const consultarAPI = async () => {
      
      //console.log(consultar);

      if (consultar){

        const appId = '47ae33b71718658cf6c30bff3469f629';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        console.log(resultado);
      } 
    }

    consultarAPI();

  }, [ consultar, ciudad, pais ])

  return (        
    <Fragment>

      <Header
        titulo='Clima React App'
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario                        
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsultar={guardarConsultar}
              />
            </div>

            <div className="col m6 s12">
              2
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
