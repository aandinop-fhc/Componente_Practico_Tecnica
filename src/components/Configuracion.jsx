import React from 'react';
import '../styles/App.css';

function Configuracion({ temaOscuro, setTemaOscuro, idioma, setIdioma, colores, indiceBanner, setIndiceBanner }) {
  return (
    <section id="configuracion" className="config">
      <h2 className="config__titulo">⚙️ {idioma === 'es' ? 'Configuración' : 'Settings'}</h2>

      {/* Tema */}
      <div className="config__bloque">
        <h3 className="config__subtitulo">{idioma === 'es' ? '🌙 Tema' : '🌙 Theme'}</h3>
        <div className="config__opciones">
          <button
            className={`config__btn ${!temaOscuro ? 'config__btn--activo' : ''}`}
            onClick={() => setTemaOscuro(false)}
          >
            ☀️ {idioma === 'es' ? 'Claro' : 'Light'}
          </button>
          <button
            className={`config__btn ${temaOscuro ? 'config__btn--activo' : ''}`}
            onClick={() => setTemaOscuro(true)}
          >
            🌙 {idioma === 'es' ? 'Oscuro' : 'Dark'}
          </button>
        </div>
      </div>

      {/* Idioma */}
      <div className="config__bloque">
        <h3 className="config__subtitulo">{idioma === 'es' ? '🌐 Idioma' : '🌐 Language'}</h3>
        <div className="config__opciones">
          <button
            className={`config__btn ${idioma === 'es' ? 'config__btn--activo' : ''}`}
            onClick={() => setIdioma('es')}
          >
            🇪🇸 Español
          </button>
          <button
            className={`config__btn ${idioma === 'en' ? 'config__btn--activo' : ''}`}
            onClick={() => setIdioma('en')}
          >
            🇺🇸 English
          </button>
        </div>
      </div>

      {/* Color del banner */}
      <div className="config__bloque">
        <h3 className="config__subtitulo">{idioma === 'es' ? '🎨 Color del banner' : '🎨 Banner color'}</h3>
        <div className="config__colores">
          {colores.map((color, i) => (
            <button
              key={i}
              className={`config__color ${i === indiceBanner ? 'config__color--activo' : ''}`}
              style={{ backgroundColor: color.fondo, border: `3px solid ${color.texto}` }}
              onClick={() => setIndiceBanner(i)}
              title={color.nombre}
            >
              {i === indiceBanner && <span className="config__color-check">✓</span>}
            </button>
          ))}
        </div>
        <p className="config__color-nombre">{colores[indiceBanner].id.toLowerCase() === 'noche' ? (idioma === 'es' ? 'Noche' : 'Night') : colores[indiceBanner].id.toLowerCase() === 'bosque' ? (idioma === 'es' ? 'Bosque' : 'Forest') : colores[indiceBanner].id.toLowerCase() === 'cosmos' ? (idioma === 'es' ? 'Cosmos' : 'Cosmos') : colores[indiceBanner].id.toLowerCase() === 'atardecer' ? (idioma === 'es' ? 'Atardecer' : 'Sunset') : colores[indiceBanner].id.toLowerCase() === 'oceano' ? (idioma === 'es' ? 'Oceano' : 'Ocean') : colores[indiceBanner].id}
        </p>
      </div>
    </section>
  );
}

export default Configuracion;