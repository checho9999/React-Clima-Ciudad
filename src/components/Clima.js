import React from 'react';
import PropTypes from 'prop-types';

const Clima = ( { resultado } ) => {

    //Extraemos desde resultado solo los datos que necesitamos
    const { name, main } = resultado;

    //Para que no tire error de que undefined con el main.temp..es decir, para que no se ejecute Clima
    if (!name) return null;

    //Constante de Grados kelvin para hacer la conversion a Grados centigrados
    const kelvin = 273.15;

    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es: </h2>
                <p className="temperatura">
                    { parseFloat( main.temp - kelvin, 10 ).toFixed(2) }  <span> &#x2103; </span>
                </p>
                <p>Temperatura Máxima:
                    { parseFloat( main.temp_max - kelvin, 10 ).toFixed(2) }  <span> &#x2103; </span>
                </p>
                <p>Temperatura Minima:
                    { parseFloat( main.temp_min - kelvin, 10 ).toFixed(2) }  <span> &#x2103; </span>
                </p>
            </div>
        </div>
     );
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Clima;