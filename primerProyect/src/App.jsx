/* eslint-disable no-unused-vars */
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ContactList from './components/container/contact_list'
import TaskListComponent from './components/container/task_list'
import Ejemplo1 from './hooks/Ejemplo1'
import Ejemplo2 from './hooks/Ejemplo2'
import MiComponenteConContexto from './hooks/Ejemplo3'
import Ejemplo4 from './hooks/Ejemplo4'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     
      {/* Componente propio greeting.jsx */}
      {/* <Greeting name="adri"/> */}
      {/* <GreetingF name="Adriancitus" /> */}
      {/* <TaskListComponent /> */}
      {/* Ejemplos de uso de HOOKS  */}
      {/* <Ejemplo1 /> */}
      {/* <Ejemplo2 /> */}
      {/* <h1> EJemplo useState y useContext</h1> */}
      {/* <MiComponenteConContexto /> */}
      <Ejemplo4 nombre="Pachufum">
      {/* Todo lo que hay aqui es tratado como props.children */}
      <h3>
        Contenido del props.children
      </h3>
      </Ejemplo4>



      {/* <hr></hr>
      <h1>mis ejercicios</h1>
      <ContactList /> */}
    </>
  )
}

export default App
