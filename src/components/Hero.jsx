import React from 'react';
import '../styles/App.css';

function Hero({ colorBanner, idioma }) {
  return (
    <section
      id="inicio"
      className="hero"
      style={{ backgroundColor: colorBanner.fondo, color: colorBanner.texto }}
    >
      <div className="hero__contenido">
        <p className="hero__etiqueta">
          {idioma === 'es' ? '✨ Tu asistente de productividad' : '✨ Your productivity assistant'}
        </p>
        
        <h1 className="hero__titulo">
          {idioma === 'es' ? 'Organiza tu día fácilmente' : 'Organize your day easily'}
        </h1>
        
        <p className="hero__subtitulo">
          {idioma === 'es' 
            ? 'Gestiona tus tareas, eventos y recordatorios en un solo lugar. Simple, rápido y siempre contigo.' 
            : 'Manage your tasks, events, and reminders in one place. Simple, fast, and always with you.'}
        </p>
        
        <div className="hero__acciones">
          <a href="#agenda" className="hero__boton-secundario">
            {idioma === 'es' ? 'Ver mi agenda →' : 'View my agenda →'}
          </a>
          <a href="#configuracion" className="hero__boton-principal">
            {idioma === 'es' ? '⚙️ Configuración' : '⚙️ Settings'}
          </a>
        </div>
      </div>

      <div className="hero__ilustracion" aria-hidden="true">
        <div className="hero__cal">
          <div className="cal__header" style={{ backgroundColor: colorBanner.texto, color: colorBanner.fondo }}>
            {idioma === 'es' ? 'JUNIO 2026' : 'JUNE 2026'}
          </div>
          {(idioma === 'es' ? ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'] : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']).map(d => (
            <span key={d} className="cal__dia">{d}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;