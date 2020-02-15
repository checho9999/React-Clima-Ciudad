import React, { useState } from 'react';

const Formulario = () => {

    //useState del Formulario
    const [ busqueda, guardarBusqueda ] = useState({
        ciudad: '',
        pais: ''
    })

    //Para saber si hubo error en la validacion del Formulario
    const [error, guardarError] = useState(false)   

    //Extrayendo ciudad y pais desde el useState
    const { ciudad, pais } = busqueda;  
        
    //Colocamos la ciudad y el pais en el state
    const handleChange = e => {
        //Actualizamos el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    //Para monitorear/validar el Formulario luego de que el usuario presione el submit
    const handleSubmit = e => {
        e.preventDefault();

        //validando la ciudad y el pais del input
        if ( ciudad.trim() === '' || pais.trim() === '' ) {
            guardarError(true);
            return;
        }

        guardarError(false);

    }

    return (  
        <form
            onSubmit={handleSubmit}
        >

        {error ? <p className='red darken-4 error'>Todos lo campos son Oblitatorios</p> : null }

        <div className="input-field col s12">
            <input
                type="text"
                name="ciudad"
                id="ciudad"
                value={ciudad}
                onChange={handleChange}
            />
            <label htmlFor="ciudad">Ciudad: </label>
        </div>

        <div className="input-field col s12">
            <select
                name="pais"
                id="pais"
                value={pais}
                onChange={handleChange}
            >
                <option value="">-- Seleccione un país --</option>
                <option value="US">Estados Unidos</option>
                <option value="MX">México</option>
                <option value="AR">Argentina</option>
                <option value="CO">Colombia</option>
                <option value="CR">Costa Rica</option>
                <option value="ES">España</option>
                <option value="PE">Perú</option>
            </select>
            <label htmlFor="pais">País: </label>
        </div>

        <div className="input-field col s12">
            <input  
                type="submit"
                value="Buscar Clima"
                className="waves-effect waves-light btn-large btn-block yellow accent-4"
            />
        </div>
    </form>
    );
}
 
export default Formulario;