# miSecondReact
Pruebas react

Primer prueba:

* archivo src/models/levels.enum.js
 es una especie de ENUM
```jsx
export const LEVELS = {
    NORMAL: 'normal',
    URGENT: 'urgent',
    BLOCKING: 'blocking'
}
```

* archivo src/models/task.class.js
es una clase
```jsx
import { LEVELS } from "./levels.enum";
export class Task {

    name = '';
    description = '';
    completed = false;
    level = LEVELS.NORMAL

    constructor(name, description, completed, level){
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.level = level;
    }
}


```

* archivo src/components/pure/task.jsx

```jsx
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';


const TaskComponent = ({ task }) => {
    return (
        <div>
            <h2>
                Nombre: { task.name }
            </h2>
            <h3>
                Descripción: { task.description }
            </h3>
            <h4>
                Level: { task.level }
            </h4>
            <h5>
                This task is: { task.completed ? 'COMPLETADO':'PENDIENTE'}
            </h5>
        </div>
    );
};

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
    //nos aseguramos que sea de tipo task
};

export default TaskComponent;
```



Luego esta el tasklisk que tiene una tarea por defecto
```jsx
/* eslint-disable no-unused-vars */
import React from 'react';
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default Description', false, LEVELS.NORMAL)

    return (
        <div>
            <div>
                Your tasks:

            </div>
            {/* TODO: Aplicar un for/map para renderizar una lista */}

            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};




export default TaskListComponent;

```

***

## EJERCICIO 1

## Crear dos componentes

Cada uno de estos componentes tendrá sus propias características.

### Componente A

Este componente va a tener un `Contacto` (crea una clase para ello), que va a contar con las siguientes características:

- `Nombre`: que será un String.
- `Apellido`: también un String.
- `Email`: de nuevo un String.
- `Conectado`: será un booleano que nos indicará si la persona está conectada o no.

### Componente B

Por otro lado, tenemos el componente B que va a recibir por props un contacto y va a poder cambiar su estado de conectado a desconectado y viceversa.

- Si el contacto está conectado, se debe mostrar: `Contacto En Línea`
- Si el contacto no está conectado, se debe mostrar: `Contacto No Disponible`

## Renderizado de componentes en la solución

- El Componente A debe ser renderizado dentro del componente `App.js` del proyecto.
- El Componente B debe ser renderizado desde el componente A y recibir los props adecuadamente.

# Solucion:

* Creo clase contact.class.js en src models

```js
export class Contact {
    name = '';
    lastname = '';
    email = '';
    connected = false;

    constructor(name, lastname, email, connected){
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.connected = connected;
    }
}

```

* creo componente puro contact.jsx en src/components/pure/contact.jsx

```jsx
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
 
 
 ```

 * Creo contact_list.jsx en components/contact_list.jsx
(siglas RFC)

 ```jsx
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


 ```

 ## Solucion alternativa 

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contacto.class';
import ComponenteB from './componenteB';

function componenteA({ contacto }) {
  return (
    <div>
      <h2>Nombre: {contacto.nombre}</h2>
      <h3>Apellidos: {contacto.apellido}</h3>
      <h3>Email: {contacto.email}</h3>
      <ComponenteB estado={true} />
    </div>
  );
}

componenteA.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),
};

export default componenteA;
```

componenteB:

```jsx

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contacto.class';

function ComponenteB(estado) {
  const [conectado, setConectado] = useState(estado);
  return (
    <div>
      <h3> {conectado === false ? 'Contacto no disponible' : 'Contacto En linea'}</h3>
      <button onClick={() => setConectado(!conectado)}>{conectado === false ? 'Conectado' : 'Desconectado'}</button>
    </div>
  );
}

ComponenteB.propTypes = {
  estado: PropTypes.bool,
};

export default ComponenteB;
```