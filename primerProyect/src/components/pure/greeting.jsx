/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    constructor(props){
        super(props);
        this.state = {
            age: 31
        }
    }

    render() {
        return (
            <div>
            <h1>
                !Holus { this.props.name}!
            </h1>
            <h2>
                Tu edad es de: {this.state.age}
            </h2>
            <div>
                <button onClick={this.birthday}>
                    sumar
                </button>
            </div>
            </div>
        );
    }

    birthday = () => {
        this.setState((prevState) => (
           {
            age: prevState.age +1
           }
        ))
    }
}


/*
PropTypes es una forma de comprobar los tipos en React, 
es decir, verificar que las props que un componente recibe 
tienen el tipo de valor esperado. Esto puede ser útil durante el desarrollo para evitar errores y bugs 
causados por pasar datos del tipo incorrecto a un componente.
*/
Greeting.propTypes = {
    name: PropTypes.string,

};


export default Greeting;
