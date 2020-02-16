import React from 'react';
import PropTypes from 'prop-types';

const Header = ( { titulo } ) => {
    return (
        <nav>            
            <div className='nav-wrapper light-blue darken-2'>
                <a href='#!' className='brand-logo'>{titulo}</a> {/* Materialize requiere utilizar enlaces deshabilitados, por eso el !, y tampoco pueder ser vacio, por eso el #*/}                 
            </div>
        </nav>         
    );
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
 
export default Header;
