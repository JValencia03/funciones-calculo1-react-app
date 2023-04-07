import './App.css'
import { Funciones } from './components/Funciones'
import { ParoEstudiantil } from './components/ParoEstudiantil'
import { EjemplosEscritos } from './components/EjemplosEscritos'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

function App () {
  return (
    <>
      <div id='page'>
        <Header />
        <Routes>
          <Route path='/' element={<Funciones />} />
          <Route path='/ejemplos-escritos' element={<EjemplosEscritos />} />
          <Route path='/paro-estudiantil' element={<ParoEstudiantil />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
