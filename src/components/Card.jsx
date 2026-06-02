import React, { useState } from 'react';
import '../styles/App.css';

const DIAS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
const CATEGORIAS = ['Trabajo', 'Salud', 'Educación', 'Personal', 'Otro'];
const EMOJIS = ['📌', '💼', '🏋️', '📚', '🛒', '🩺', '🎯', '🎨', '💡', '🔧'];

function Card({ emoji, titulo, hora, categoria, descripcion, pendiente, togglePendiente, eliminarTarea, editarTarea, idioma, dia }) {
  const [mostrarDetalles, setMostrarDetalles] = useState(false);
  const [editando, setEditando] = useState(false);
  const [form, setForm] = useState({ emoji, titulo, categoria, descripcion: descripcion || '' });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function guardarEdicion() {
    if (!form.titulo.trim()) return;
    editarTarea(form);
    setEditando(false);
  }

  if (editando) {
    return (
      <article className="card card--editando">
        <h4 className="card__edit-titulo">✏️ { idioma === 'es' ? 'Editar Tarea' : 'Task Edit'}</h4>

        <div className="card__edit-fila">
          <div className="card__edit-grupo card__edit-grupo--emoji">
            <label> {idioma === 'es' ? 'Emoji' : 'Emoji'}</label>
            <select name="emoji" value={form.emoji} onChange={handleChange}>
              {EMOJIS.map(e => <option key={e} value={e}>{e}</option>)}
            </select>
          </div>
          <div className="card__edit-grupo card__edit-grupo--titulo">
            <label>Titulo</label>
            <input
              type="text"
              name="titulo"
              value={form.titulo}
              onChange={handleChange}
              placeholder={idioma === 'es' ? "Titulo de la tarea" : "Task title"}
            />
          </div>
        </div>

        <div className="card__edit-grupo">
          <label> {idioma === 'es' ? 'Categoria' : 'Category'}</label>
          <select name="categoria" value={form.categoria} onChange={handleChange}>
            {CATEGORIAS.map(c => (
              <option key={c} value={c}>
                {idioma === 'es' ? c : (
                c === 'Trabajo' ? 'Work' :
               c === 'Salud' ? 'Health' :
               c === 'Educación' ? 'Education' :
               c === 'Personal' ? 'Personal' :
               c === 'Otro' ? 'Other' : c
               )}
              </option>
           ))}
          </select>
        </div>

        <div className="card__edit-grupo">
          <label>Descripcion</label>
          <textarea
            name="descripcion"
            value={form.descripcion}
            onChange={handleChange}
            rows={3}
            placeholder={idioma === 'es' ? "Detalles de la tarea..." : "Task details..."}
          />
        </div>

        <div className="card__acciones">
          <button className="card__btn card__btn--detalle" onClick={() => setEditando(false)}>
            ✕ { idioma === 'es' ? 'Cancelar' : 'Cancel'}
          </button>
          <button className="card__btn card__btn--pendiente" onClick={guardarEdicion}>
            💾 { idioma === 'es' ? 'Guardar' : 'Up'}
          </button>
        </div>
      </article>
    );
  }

  return (
    <article className={`card ${pendiente ? 'card--marcada' : ''}`}>
      <div className="card__cabecera">
        <span className="card__emoji">{emoji}</span>
        <div className="card__info">
          <h3 className="card__titulo">{titulo}</h3>
          {hora && <p className="card__hora"> {hora}</p>}
        </div>
        <span className="card__categoria">
          {idioma === 'es' ? categoria : (
            categoria === 'Trabajo' ? 'Work' :
            categoria === 'Salud' ? 'Health' :
            categoria === 'Educación' ? 'Education' :
            categoria === 'Personal' ? 'Personal' : 'Other'
       )}
        </span>
      </div>
        <span className="card__dia">
          {idioma === 'es' ? dia : (
             dia?.toLowerCase() === 'lunes' ? 'Monday' :
             dia?.toLowerCase() === 'martes' ? 'Tuesday' :
             dia?.toLowerCase() === 'miércoles' ? 'Wednesday' :
             dia?.toLowerCase() === 'jueves' ? 'Thursday' :
             dia?.toLowerCase() === 'viernes' ? 'Friday' :
             dia?.toLowerCase() === 'sábado' ? 'Saturday' :
             dia?.toLowerCase() === 'domingo' ? 'Sunday' : dia
           )}
         </span>
        
      {mostrarDetalles && descripcion && (
        <div className="card__detalles">
          <p>{descripcion}</p>
        </div>
      )}

      <div className="card__acciones">
        <button className="card__btn card__btn--detalle" onClick={() => setMostrarDetalles(!mostrarDetalles)}>
          {mostrarDetalles ? '▲ Ocultar' : '▼ Ver detalles'}
        </button>
        <button
          className={`card__btn card__btn--pendiente ${pendiente ? 'card__btn--ya-marcada' : ''}`}
          onClick={togglePendiente}
        >
          {pendiente ? '✅ Desmarcar' : '+ Pendiente'}
        </button>
      </div>

      <div className="card__acciones card__acciones--secundarias">
        <button className="card__btn card__btn--editar" onClick={() => setEditando(true)}>
          ✏️ {idioma === 'es' ? 'Editar' : 'Edit'}
        </button>
        <button className="card__btn card__btn--eliminar" onClick={eliminarTarea}>
          🗑️ {idioma === 'es' ? 'Eliminar' : 'Delete'}
        </button>
      </div>
    </article>
  );
}

export default Card;