import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error'

function App() {

  //useState del Formulario
  const [ busqueda, guardarBusqueda ] = useState({
    ciudad: '',
    pais: ''
  })

  //Para que no se este verificando todo el tiempo el cambio caracter a caracter del input
  //...con esto, solo lo hace cuando esta el Formulario OK
  const [ consultar, guardarConsultar ] = useState(false)
 
  //State de respuesta de la API
  const [ resultado, guardarResultado ] = useState({})

  //State del resultado de la busqueda
  const [ error, guardarError ] = useState(false)

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

        //Para actualizar el state con la respuesta de la API
        guardarResultado(resultado);

        //console.log(resultado);

        //Para poder volver a hacer otra consulta
        guardarConsultar(false);

        //Para setear si el resultado de la busqueda fue correcto o no
        if (resultado.cod === '404'){
          guardarError(true);  
        }
        else{
          guardarError(false);
        }

      } 
    }

    consultarAPI();

  }, [ consultar, ciudad, pais ])

  //Para determinar que componente se carga
  let componente;
  //Carga condicional de componentes, segun haya o no error en la busqueda de informacion
  if(error) {
    componente = <Error mensaje="No hay resultados" />
  } else {
    componente = <Clima resultado={resultado} />
  }

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
              {componente}
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
