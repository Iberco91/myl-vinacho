import React, { useState } from 'react'; // Agregamos useState aquí
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  // 1. El estado debe estar DENTRO de la función del componente
  const [menuAbierto, setMenuAbierto] = useState(false);

  // 2. La función para cerrar también va dentro
  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <nav className="navbar">
      {/* 3. El Botón Hamburguesa */}
      <div 
        className={`hamburger ${menuAbierto ? 'open' : ''}`} 
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* 4. La lista de secciones con la clase dinámica 'active' */}
      <ul className={`secciones ${menuAbierto ? 'active' : ''}`}>
        <li>
          <NavLink to="/" onClick={cerrarMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/champions" onClick={cerrarMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Champions
          </NavLink>
        </li>
        <li>
          <NavLink to="/licho" onClick={cerrarMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            LiCho
          </NavLink>
        </li>
        <li>
          <NavLink to="/carlicho" onClick={cerrarMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            CarLiCho
          </NavLink>
        </li>
        <li>
          <NavLink to="/informacion-cartas" onClick={cerrarMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Información Cartas
          </NavLink>
        </li>
        <li>
          <NavLink to="/aclaraciones" onClick={cerrarMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Aclaraciones
          </NavLink>
        </li>
        <li>
          <NavLink to="/otros" onClick={cerrarMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Otros
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}