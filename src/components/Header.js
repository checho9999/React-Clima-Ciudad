import React from 'react';

const Header = ( { titulo } ) => {
    return (
        <nav>            
            <div className='nav-wrapper light-blue darken-2'>
                <a href='#!' className='brand-logo'>{titulo}</a> {/* Materialize requiere utilizar enlaces deshabilitados, por eso el !, y tampoco pueder ser vacio, por eso el #*/}                 
            </div>
        </nav>         
    );
}
 
export default Header;
