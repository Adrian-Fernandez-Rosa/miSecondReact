/* eslint-disable no-unused-vars */
/**
 * Ejemplo de uso del hook useState
 * 
 * Crear un componente de tipo de función y acceder a su estado
 * privado a través de un hook y, además, poder modificarlo
 */

import React, { useState } from 'react';
/**
 * Los componentes funcionales no tienen constructores ni métodos
 * que se puedan sobreescribir, por lo que se debe declarar
 * 
 * 
 */
const Ejemplo1 = () => {

    // Valor inicial para contador
    const valorInicial = 0;

    // Valor inicial para una persona
    const personaInicial = {
        nombre: 'Adriancitus',
        email: 'adriancitus@laweaCosmica.com'
    }

    /**
     * Queremos que el VALORINICIAL y PERSONAINICIAL sean
     * parte del estado del componente para así poder gestionar
     * su cambio y que éste sea reflejado en la vista del componente.
     * 
     * const [nombreVar, Funcionparacambiar] = useState(valorInicial)
     *
     */

    /**
     * no hay que declarar todas las variables con useState
     * solo aquellas que queremos almacenar en el componente 
     * y implica un renderizado nuevo del componente
     */
    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * Función para actualizar el estado privado que contiene el contador
     */
    function incrementaContador(){
        // ? funcionParaCambiar(nuevoValor)
        setContador(contador + 1);
    }

    /**
     * Función para actualizar el estado de persona en el componente
     */
    function actualizarPersona(nombre){
        setPersona(
            {
                nombre: 'El pepe',
                email: 'pepeWEONCITO@prendete.com'
            }
        )
    }

    return (
        <div>
            <h1>*** Ejemplo de useState()***</h1>
            <h2>CONTADOR: {contador}</h2>
            <h2>DATOS DE LA PERSONA:</h2>
            <h3>NOMBRE: {persona.nombre}</h3>
            <h4>EMAIL: {persona.email}</h4>
            {/* Bloque de botones para actualizar el estado del componente */}
            <button onClick={incrementaContador}>incrementar contador</button>
            <button onClick={actualizarPersona}>Actualizar Persona</button>
        </div>
    );
}

export default Ejemplo1;
