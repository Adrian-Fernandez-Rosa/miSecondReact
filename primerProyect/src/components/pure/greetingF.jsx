/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    // Breve introducción a useState
    /**
     * const [variable, método para actualizar] = useState(valor inicial);
     * (useState es método hook)
     */
    const [age, setage] = useState(31);


    const birthday = () => {
        // Actualizar el State
        setage(age+1);
    }

    return (
        <div>
            <h1>
                !Holus { props.name} desde componente funcional!
            </h1>
            <h2>
                Tu edad es de: {age}
            </h2>
            <div>
                <button onClick={birthday}>
                    sumar
                </button>
            </div>
            </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
