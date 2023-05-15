/* eslint-disable no-unused-vars */

import React, {useEffect} from 'react';

export const DidUpdateHook = () => {

    useEffect(() => {
        console.log('Comportamiento cuando el componente recibe nuevos props o cambia el estado')
    });

    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
}


