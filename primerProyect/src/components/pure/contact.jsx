/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
 import React, { useState } from 'react';
 import PropTypes from 'prop-types';
 import { Contact } from '../../models/Contact.class';
 
 
 
 const ContactComponent = ({ contact, changeStatus }) => {
    return (
        <div>
            <div>
            <h2>
                Nombre: { contact.name }
            </h2>
            <h3>
                Apellido: { contact.lastname }
            </h3>
            <h4>
               Email: { contact.email }
            </h4>
            <h5>
                This task is: { contact.connected ? 'Contacto En Línea':'Contacto No Disponible'}
            </h5>
            <button onClick={changeStatus}>{ contact.connected ? 'Desconectar' : 'Conectar' }</button>
        </div>
        </div>
    );
};
 

 
 
 export default ContactComponent;
 