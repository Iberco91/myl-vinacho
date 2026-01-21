import React from 'react';
import { NavLink } from 'react-router-dom';         // 1. Importamos la herramienta NavLink de la librería que instalamos.

// 3. Definimos la función del componente. El nombre debe coincidir con el archivo.
export default function Navbar() {
  return (
    <nav>
      <ul className="secciones">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/champions" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Champions
          </NavLink>
        </li>
        <li>
          <NavLink to="/licho" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            LiCho
          </NavLink>
        </li>
        <li>
          <NavLink to="/carlicho" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            CarLiCho
          </NavLink>
        </li>
        <li>
          <NavLink to="/informacion-cartas" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Información Cartas
          </NavLink>
        </li>
        <li>
          <NavLink to="/aclaraciones" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Aclaraciones
          </NavLink>
        </li>
        <li>
          <NavLink to="/otros" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Otros
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}