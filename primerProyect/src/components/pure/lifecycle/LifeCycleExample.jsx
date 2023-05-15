/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LifeCycleExample extends Component {

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps: Se llama justo antes de renderizar el componente, tanto en el montaje inicial como en las actualizaciones posteriores.');
        return null;  // Devuelve null si no hay cambios en el estado
    }
    
    constructor(props) {
        super(props)
        console.log('CONSTRUCTOR: Cuando se instancia el componente');
    }

    componentDidMount() {
        console.log('DidMount: Justo después del montaje del componente')
    }

    shouldComponentUpdate(nextProps, nextState) {
        /**
         * Controlar si el componente debe o no actualizarse
         */
        // return true / false
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DidUpdate: Justo después de actualizarse');
    }

    componentWillUnmount() {
        console.log('WillUnmount: Justo antes de desaparecer')
    }

    render() {
        console.log('RENDER: Se llama cuando se monta el componente y cada vez que se actualiza');
        return (
            <div>

            </div>
        )
    }
}

LifeCycleExample.propTypes = {

}

export default LifeCycleExample
