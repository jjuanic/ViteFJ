
import './App.css'
import Navegacion from './componentes/Navegacion'
import {Routes, Route} from 'react-router-dom'
import Home from './componentes/Home'
import Error from './componentes/Error'
import Formulario from './componentes/Formulario'

function App() {

  return (
    <>
    <Navegacion/>
    <Routes>
      <Route path ='/home' element={<Home />}/>
      <Route path ='/formulario' element={<Formulario />}/>
      <Route path ='*' element={<Error />}/>
    </Routes>
    </>
  )
}


export default App
