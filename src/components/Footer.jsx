import React from 'react';
import '../styles/App.css';


function Footer({ idioma }) {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>{idioma === 'es' ? '© 2026 Mi Aplicación de Tareas' : '© 2026 My Todo App'}</p>
      <div className="footer__contenido">
        <div className="footer__marca">
          <span className="footer__logo"> {idioma === 'es' ? ' Tu agenda virtual' : '  Your virtual agenda'}</span>
          <p className="footer__slogan">
            {idioma === 'es' ? 'Organiza tu día, transforma tu vida.' : 'Organize your day, transform your life.'}
          </p>
        </div>

        <nav className="footer__nav">
          <h4>{idioma === 'es' ? 'Navegación' : 'Navigation'}</h4>
          <ul>
            <li><a href="#inicio">{idioma === 'es' ? 'Inicio' : 'Home'}</a></li>
            <li><a href="#agenda">{idioma === 'es' ? 'Agenda' : 'Calendar'}</a></li>
            <li><a href="#configuracion">{idioma === 'es' ? 'Configuración' : 'Settings'}</a></li>
          </ul>
        </nav>

        <div className="footer__tech">
          <h4>{idioma === 'es' ? 'Tecnologías' : 'Technologies'}</h4>
          <ul>
            <li>⚛️ React 18</li>
            <li>🎨 CSS3</li>
            <li>⚡ JavaScript ES6+</li>
          </ul>
        </div>
      </div>

      <div className="footer__copy">
        <p>{idioma === 'es' ? `© ${anioActual} AgendaVirtual — Proyecto Académico. Todos los derechos reservados.` : `© ${anioActual} AgendaVirtual — Academic Project. All rights reserved.`}</p>
        <p className="footer__autor">{idioma === 'es' ? 'Desarrollado con ❤️ usando React' : 'Developed with ❤️ using React'}</p>
      </div>
    </footer>
  );
}

export default Footer;
