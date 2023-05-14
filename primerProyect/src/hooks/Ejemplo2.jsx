/* eslint-disable no-unused-vars */
/**
 * Ejemplo de uso de
 * - useState()
 * - useRef(): s una herramienta útil en React para guardar 
 *          referencias a elementos del DOM y para guardar valores mutables
 *          que necesitas a lo largo de la vida del componente, 
 *          pero que no deben causar re-renderizados.
 * - useEffect(): Para controlar los cambios en la vista
 */

import React, { useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {

    // Vamos a crear dos contadores distintos
    // cada uno en un estado diferente
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // Vamos a crear una referencia con useRef() para asociar una variable
    // con un elemento del DOM del componente (vista HTML)
    const miRef = useRef();

    function incrementar1() {
        setContador1(contador1+1);
    }

    function incrementar2() {
        setContador2(contador2+1);
    }

    /**
     * Trabajando con UseEffect
     */

    /**
     * ? Caso 1: Ejecutar SIEMPRE un snippet de código
     * Cada vez que haya un cambio en el estado del componente
     * se ejecuta aquello que esté dentro del useEffect()
     */

    // useEffect(() => {
       
    //     console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
    //     console.log('Mostrando referencia a elemento del DOM:')
    //     console.log(miRef);

    // }); Como el effect no tiene condiciones se ejecuta siempre que exista un cambio

    /**
     * ? Caso 2: Ejecutar solo cuando cambie CONTADOR1
     * Cada vez que haya un cambio en contador 1, se ejecuta lo que diga el 
     * useEffect.
     * En caso de que cambie  contador2, no habrá ejecucion
     */

    // useEffect(() => {
        
    //     console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1');
    //     console.log('Mostrando referencia a elemento del DOM:')
    //     console.log(miRef);

    // }, [contador1]); //que sufra cambios el contador 1

     useEffect(() => {
        
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1/ CONTADOR 2');
        console.log('Mostrando referencia a elemento del DOM:')
        console.log(miRef);

    }, [contador1, contador2]); 

    return (
        <div>
            <h1>*** Ejemplo de useState(), useRef() y useEffect()***</h1>
            <h2>CONTADOR 1: {contador1}</h2>
            <h2>CONTADOR 2: {contador2}</h2>
            {/* Elemento referenciado */}
            <h4 ref={miRef}>
            Ejemplo de elemento referenciado
            </h4>
            {/* Botones para cambiar los contadores */}
            <div>
                <button onClick={incrementar1}>Incrementar contador 1</button>
                <button onClick={incrementar2}>Incrementar contador 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
