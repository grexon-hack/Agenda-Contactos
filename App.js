import React from 'react'
import Container from './components/Container'
// import EntradaContactos from './components/EntradaContactos'
import Contactos from './components/Contactos'


const App = () => {
  return (
    <div>
      <Container />
      <h1>Agenda de Contactos</h1>
      <br />
      <Contactos />
      <br />
      
    </div>
  )
}

export default App
