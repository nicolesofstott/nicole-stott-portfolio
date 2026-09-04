import { NavLink } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  return (
    <header>
      <nav className="nav" aria-label="Main">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </nav>
    </header>
  )
}
