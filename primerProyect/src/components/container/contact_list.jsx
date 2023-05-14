/* eslint-disable no-unused-vars */
import React from 'react';
import { Contact } from '../../models/Contact.class';
import ContactComponent from '../pure/contact';
import { useState } from 'react';

const ContactList = () => {
    const defaultContact = new Contact('Adrian', 'Fernandez', 'adrian@gmail.com', true)
    const [contact, setContact] = useState(defaultContact);

    const changeConnection = () => {
        // Actualiza el estado `connected` de `contact` directamente
        setContact(prevContact => ({...prevContact, connected: !prevContact.connected}));
    }
    
    return (
        <div>
            <div>
                <h1>CONTACTOS</h1>
            </div>
            <ContactComponent contact={contact} changeStatus={changeConnection} ></ContactComponent>
        </div>
    );
};


export default ContactList;
