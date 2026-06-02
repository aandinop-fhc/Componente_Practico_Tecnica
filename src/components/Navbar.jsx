import React from 'react';
import '../styles/App.css';


function Navbar({ pendientes, idioma }) {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
         <span> {idioma === 'es' ? ' Tu agenda virtual' : '  Your virtual agenda'}</span>
      </div>

      <ul className="navbar__links">
        <li><a href="#inicio">{idioma === 'es' ? 'Inicio' : 'Home'}</a></li>
        <li><a href="#agenda">{idioma === 'es' ? 'Agenda' : 'Calendar'}</a></li>
        <li><a href="#configuracion">{idioma === 'es' ? 'Configuración' : 'Settings'}</a></li>
      </ul>

      {/* Badge de tareas pendientes — se actualiza en tiempo real con React */}
      <div className="navbar__badge">
        <span className="badge__icon">⏳</span>
        <span className="badge__texto">
          {idioma === 'es'
            ? `${pendientes} tarea${pendientes !== 1 ? 's' : ''} pendiente${pendientes !== 1 ? 's' : ''}`
            : `${pendientes} task${pendientes !== 1 ? 's' : ''} pending`}
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
