import { NavLink } from 'react-router-dom'

export function Header () {
  return (
    <header>
      <h1>UNIDAD 1: FUNCIONES Y DESARROLLO DEL PARO ESTUDIANTIL</h1>
      <ul>
        <li><NavLink to='/'>Funciones</NavLink></li>
        <li><NavLink to='/ejemplos-escritos'>Ejemplos</NavLink></li>
        <li><NavLink to='/paro-estudiantil'>Función respecto al paro estudiantil</NavLink></li>
      </ul>
    </header>
  )
}
