/* eslint-disable no-unused-vars */
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ContactList from './components/container/contact_list'
import TaskListComponent from './components/container/task_list'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     
     {/* Componente propio greeting.jsx */}
      {/* <Greeting name="adri"/> */}
      {/* <GreetingF name="Adriancitus" /> */}
      <TaskListComponent />
      <hr></hr>
      <h1>mis ejercicios</h1>
      <ContactList />
    </>
  )
}

export default App
