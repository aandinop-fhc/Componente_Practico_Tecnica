import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardList from './components/CardList';
import Configuracion from './components/Configuracion';
import Footer from './components/Footer';
import './styles/App.css';

const COLORES_BANNER = [
  { fondo: '#03153d', texto: '#e2e8f0', id: 'Noche' },
  { fondo: '#064e3b', texto: '#d1fae5', id: 'Bosque' },
  { fondo: '#1e1b4b', texto: '#e0e7ff', id: 'Cosmos' },
  { fondo: '#7c2d12', texto: '#ffedd5', id: 'Atardecer' },
  { fondo: '#0c4a6e', texto: '#e0f2fe', id: 'Océano' },
];

function App() {
  const [tareas, setTareas] = useState([
    { id: 1, emoji: '💼', titulo: 'Entregar trabajo', dia: 'Lunes', categoria: 'Trabajo', descripcion: 'Subir el informe al campus virtual.', pendiente: false },
    { id: 2, emoji: '📚', titulo: 'Estudiar para el examen', dia: 'Martes', categoria: 'Educación', descripcion: 'Repasar capítulos 3 y 4.', pendiente: false },
    { id: 3, emoji: '🏋️', titulo: 'Ir al gimnasio', dia: 'Miércoles', categoria: 'Salud', descripcion: 'Rutina de piernas y cardio.', pendiente: false },
    { id: 4, emoji: '🎯', titulo: 'Reunión de equipo', dia: 'Jueves', categoria: 'Trabajo', descripcion: 'Revisar avances del proyecto.', pendiente: false },
    { id: 5, emoji: '📌', titulo: 'Repasar apuntes', dia: 'Viernes', categoria: 'Educación', descripcion: 'Organizar notas de la semana.', pendiente: false },
    { id: 6, emoji: '🛒', titulo: 'Hacer las compras', dia: 'Sábado', categoria: 'Personal', descripcion: 'Lista: frutas, verduras y snacks.', pendiente: false },
    { id: 7, emoji: '💡', titulo: 'Planificar la semana', dia: 'Domingo', categoria: 'Personal', descripcion: 'Organizar tareas y metas para la próxima semana.', pendiente: false },
  ]);

  const [temaOscuro, setTemaOscuro] = useState(false);
  const [idioma, setIdioma] = useState('es');
  const [indiceBanner, setIndiceBanner] = useState(0);

  useEffect(() => {
    if (temaOscuro) {
    document.body.classList.add('tema-oscuro');
  } else {
    document.body.classList.remove('tema-oscuro');
  }
}, [temaOscuro]);

  const pendientes = tareas.filter(t => t.pendiente).length;

  function agregarTarea(datosTarea) {
    setTareas([...tareas, { ...datosTarea, id: Date.now(), pendiente: false }]);
  }
  function togglePendiente(id) {
    setTareas(tareas.map(t => t.id === id ? { ...t, pendiente: !t.pendiente } : t));
  }
  function eliminarTarea(id) {
    setTareas(tareas.filter(t => t.id !== id));
  }
  function editarTarea(id, datosActualizados) {
    setTareas(tareas.map(t => t.id === id ? { ...t, ...datosActualizados } : t));
  }

  return (
    <div className="App">
      <Navbar pendientes={pendientes} idioma={idioma} />
      <Hero colorBanner={COLORES_BANNER[indiceBanner]} idioma={idioma} />
      <CardList
        tareas={tareas}
        togglePendiente={togglePendiente}
        agregarTarea={agregarTarea}
        eliminarTarea={eliminarTarea}
        editarTarea={editarTarea}
        idioma={idioma}
      />
      <Configuracion
        temaOscuro={temaOscuro}
        setTemaOscuro={setTemaOscuro}
        idioma={idioma}
        setIdioma={setIdioma}
        colores={COLORES_BANNER}
        indiceBanner={indiceBanner}
        setIndiceBanner={setIndiceBanner}
      />
      <Footer idioma={idioma} />
    </div>
  );
}

export default App;