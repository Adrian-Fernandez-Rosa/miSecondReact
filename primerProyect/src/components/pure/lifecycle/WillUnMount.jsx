/* eslint-disable no-unused-vars */
/**
 * Cuando el componente va a desaparecer
 */

import React, {useEffect} from 'react';

const WillUnMount = () => {

    useEffect(() => {
       
        return () => {
            console.log("Comportamiento antes de que el componente desaparezca")
        }
    });

    return (
        <div>
            <h1>
                WillUnMount
            </h1>
        </div>
    );
}

export default WillUnMount;
