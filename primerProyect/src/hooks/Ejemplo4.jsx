/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/**
 * Ejemplo para enteder el uso de props.children
 */

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>*** Ejemplo de Children PROPS ***</h1>
            <h2>
                Nombre: {props.nombre}
            </h2>
            {/* props.children pintará por defecto
            aquello que se encuentre las etiquetas de apertura y cierre
            de este componente desde el componente de orden superior 
             */}
             {props.children}
        </div>
    );
}

export default Ejemplo4;
