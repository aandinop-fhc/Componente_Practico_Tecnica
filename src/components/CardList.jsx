import React, { useState } from 'react';
import Card from './Card';
import '../styles/App.css';

const DIAS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
const CATEGORIAS = ['Trabajo', 'Salud', 'Educación', 'Personal', 'Otro'];
const EMOJIS = ['📌', '💼', '🏋️', '📚', '🛒', '🩺', '🎯', '🎨', '💡', '🔧'];

function CardList({ dia, tareas, togglePendiente, agregarTarea, eliminarTarea, editarTarea, idioma }) {
  const [formularioAbierto, setFormularioAbierto] = useState(false);
  const [form, setForm] = useState({
    titulo: '',
    dia: 'Lunes',
    categoria: 'Personal',
    descripcion: '',
    emoji: '📌',
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.titulo.trim()) return;
    agregarTarea(form);
    setForm({ titulo: '', dia: 'Lunes', categoria: 'Personal', descripcion: '', emoji: '📌' });
    setFormularioAbierto(false);
  }

  const tareasPorDia = DIAS.reduce((acc, dia) => {
    const del_dia = tareas.filter(t => t.dia === dia);
    if (del_dia.length > 0) acc[dia] = del_dia;
    return acc;
  }, {});

  return (
    <section className="cardlist" id="agenda">
      <div className="cardlist__encabezado">
        <h2 className="cardlist__titulo">📋 {idioma === 'es' ? ' Tus tareas de la semana' : ' Your tasks for the week'}</h2>
        <p className="cardlist__subtitulo">
          {idioma === 'es' ? 'Organizadas por día — expande, marca pendientes o agrega las tuyas.' : "Organized by day — expand, mark pending, or add your own."}
        </p>
        <button
          className="cardlist__btn-agregar"
          onClick={() => setFormularioAbierto(!formularioAbierto)}
        >
          {idioma === 'es' ? (formularioAbierto ? '✕ Cancelar' : '+ Nueva tarea') : (formularioAbierto ? '✕ Cancel' : '+ New task')}
        </button>
      </div>

      {formularioAbierto && (
        <form className="cardlist__form" onSubmit={handleSubmit}>
          <h3 className="form__titulo">
            {idioma === 'es' ? 'Nueva tarea' : 'New task'}
          </h3>

          <div className="form__fila">
            <div className="form__grupo form__grupo--emoji">
              <label>
                {idioma === 'es' ? 'Emoji' : 'Emoji'}
              </label>
              <select name="emoji" value={form.emoji} onChange={handleChange}>
                {EMOJIS.map(e => (
                  <option key={e} value={e}>{e}</option>
                ))}
              </select>
            </div>
            <div className="form__grupo form__grupo--titulo">
              <label>
                {idioma === 'es' ? 'Título *' : 'Title *'}
              </label>
              <input
                type="text"
                name="titulo"
                value={form.titulo}
                onChange={handleChange}
                placeholder="Ej: Estudiar para el examen"
                required
              />
            </div>
          </div>

          <div className="form__fila">
            <div className="form__grupo">
              <label>
                {idioma === 'es' ? 'Día' : 'Day'}
              </label>
              <select name="dia" value={form.dia} onChange={handleChange}>
                {DIAS.map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
            <div className="form__grupo">
              <label>
                {idioma === 'es' ? 'Categoría' : 'Category'}
              </label>
              <select name="categoria" value={form.categoria} onChange={handleChange}>
                {CATEGORIAS.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form__grupo">
            <label>
              {idioma === 'es' ? 'Descripción (opcional)' : 'Description (optional)'}
            </label>
            <textarea
              name="descripcion"
              value={form.descripcion}
              onChange={handleChange}
              placeholder="Agrega detalles de la tarea..."
              rows={3}
            />
          </div>

          <button type="submit" className="form__btn-guardar">
            {idioma === 'es' ? 'Guardar tarea' : 'Save task'}
          </button>
        </form>
      )}

      {Object.entries(tareasPorDia).map(([dia, tareasDelDia]) => (
        <div key={dia} className="cardlist__dia">
          <h3 className="cardlist__dia-titulo">
            📅 {idioma === 'es' ? dia : (
                  dia?.toLowerCase() === 'lunes' ? 'Monday' :
                  dia?.toLowerCase() === 'martes' ? 'Tuesday' :
                  dia?.toLowerCase() === 'miércoles' ? 'Wednesday' :
                  dia?.toLowerCase() === 'jueves' ? 'Thursday' :
                  dia?.toLowerCase() === 'viernes' ? 'Friday' :
                  dia?.toLowerCase() === 'sábado' ? 'Saturday' : 'Sunday'
                )}
            <span className="cardlist__dia-conteo">
              {tareasDelDia.length} {idioma === 'es' ? 'tarea' : 'task'}{tareasDelDia.length !== 1 ? 's' : ''}
            </span>
          </h3>
          <div className="cardlist__grid">
            {tareasDelDia.map((tarea) => (
              <Card
                key={tarea.id}
                emoji={tarea.emoji}
                dia={tarea.dia}
                titulo={tarea.titulo}
                hora={tarea.hora}
                categoria={tarea.categoria}
                descripcion={tarea.descripcion}
                pendiente={tarea.pendiente}
                togglePendiente={() => togglePendiente(tarea.id)}
                eliminarTarea={() => eliminarTarea(tarea.id)}
                editarTarea={(datos) => editarTarea(tarea.id, datos)}
                idioma={idioma}
              />
            ))}
          </div>
        </div>
      ))}

      {tareas.length === 0 && (
        <p className="cardlist__vacio">
          {idioma === 'es' ? 'No tienes tareas aún. ¡Agrega una! 👆' : 'You have no tasks yet. Add one! 👆'}
        </p>
      )}
    </section>
  );
}

export default CardList;