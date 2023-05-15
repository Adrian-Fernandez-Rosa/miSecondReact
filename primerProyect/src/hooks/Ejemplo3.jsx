/* eslint-disable no-unused-vars */
/**
 * Ejemplo HOOKS
 * - useState()
 * - useContext() Trabajar con datos es decir
 * trabajar con el contexto y pasarselo a componentes inferiores
*/

import React, {useState, useContext} from 'react';

/**
 * 
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 */

    // Icializado en estado vacio que va a rellenarse con datos
    // del contexto del padre
    const miContexto = React.createContext(null);

const Componente1 = () => {

    const state = useContext(miContexto);


    return (
        <div>
            <h1>
                El token es: {state.token}
            </h1>
            {/* Renderizamos componente 2 */}
            <Componente2 />
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h2>
                La sesión es: {state.sesion}
            </h2>
        </div>
    );
}




export default function MiComponenteConContexto() {
    

    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }

    // Creamos el estado de este componente
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion(){
        setSessionData(
            {
                token: 'JWT123456789',
                session: Math.random()*22
            }
        );
    }

    return (
        <miContexto.Provider value={sessionData}>
        {/* Todo lo que esté aqui dentro puede leer los datos de session data */}
        {/* Además, si se actualiza, los componentes de aquí, también se actualizan */}
        <Componente1></Componente1>
        <button onClick={actualizarSesion}>Actualizar Sesión</button>
        </miContexto.Provider>
    );
}


