# Componente_Practico_Tecnica
S7-COMPONENTE PRÁCTICO_1 --- Desarrollo de una landing page
# Agenda Virtual — Proyecto Académico React

> Landing Page dinámica construida con React 18, CSS3 y JavaScript ES6+

---

## Cómo correr el proyecto

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU_USUARIO/agenda-virtual.git

# 2. Entrar a la carpeta
cd agenda-virtual

# 3. Instalar dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm start
```

El proyecto abre automáticamente en **http://localhost:3000**

---

## Estructura del proyecto

```
agenda-virtual/
├── public/
│   └── index.html          ← HTML base (solo el <div id="root">)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      ← Barra de navegación con contador
│   │   ├── Hero.jsx        ← Sección principal con cambio de color
│   │   ├── Card.jsx        ← Tarjeta individual de tarea
│   │   ├── CardList.jsx    ← Lista de todas las tarjetas
│   │   └── Footer.jsx      ← Pie de página
│   ├── styles/
│   │   ├── index.css       ← Variables globales y reset
│   │   ├── App.css
│   │   ├── Navbar.css
│   │   ├── Hero.css
│   │   ├── Card.css
│   │   ├── CardList.css
│   │   └── Footer.css
│   ├── App.jsx             ← Componente raíz
│   └── index.js            ← Punto de entrada
└── package.json
```

---

## Las 3 interacciones dinámicas

| # | Componente | ¿Qué hace? |
|---|------------|-----------|
| 1 | `Hero.jsx` | Botón que cambia el color de fondo entre 5 temas |
| 2 | `Card.jsx` | Botón que muestra/oculta los detalles de cada tarea |
| 3 | `Card.jsx` + `App.jsx` | Botón "Marcar pendiente" que incrementa el contador del Navbar |

---

## Explicación técnica para el video

### ¿Qué es React?
React es una **biblioteca de JavaScript** creada por Meta (Facebook) en 2013.
Su propósito principal es facilitar la construcción de interfaces de usuario
dividiendo la pantalla en **componentes reutilizables**.
En lugar de manipular el DOM directamente (como con `document.getElementById`),
React actualiza solo las partes de la pantalla que cambiaron, gracias al
**Virtual DOM**.

---

### ¿Qué es JSX?
JSX (JavaScript XML) es una **extensión de sintaxis** que nos permite escribir
código que parece HTML dentro de un archivo JavaScript.

```jsx
// Esto es JSX — mezcla de JS y HTML
function Saludo() {
  const nombre = "Estudiante";
  return <h1>Hola, {nombre}!</h1>;  // { } permite insertar JS dentro del HTML
}
```

Sin JSX tendríamos que escribir:
```javascript
React.createElement('h1', null, `Hola, ${nombre}!`)
```

JSX es solo azúcar sintáctica: el navegador no lo entiende directamente.
Babel lo transforma a JavaScript puro antes de ejecutarse.

---

### ¿Cómo funciona un componente?
Un componente React es simplemente **una función que devuelve JSX**.

```jsx
// Componente funcional — el tipo más moderno
function MiComponente({ titulo }) {    // "titulo" es una prop
  return <div className="caja">{titulo}</div>;
}

// Se usa como si fuera una etiqueta HTML personalizada
<MiComponente titulo="Mi primera tarea" />
```

Reglas básicas:
- El nombre **siempre empieza en mayúscula** (`Navbar`, no `navbar`)
- Devuelve **un solo elemento raíz** (puede ser un `<div>` o un fragmento `<>`)
- Recibe datos del exterior a través de **props**

---

### ¿Cómo interviene JavaScript dentro de React?
Dentro de JSX, cualquier expresión JavaScript va entre **llaves `{}`**:

```jsx
const hora = new Date().getHours();
const saludo = hora < 12 ? "Buenos días" : "Buenas tardes";

return <p>{saludo}</p>;                    // variable
return <p>{2 + 2}</p>;                     // operación
return <ul>{tareas.map(t => <li>{t}</li>)}</ul>;  // .map() para listas
```

Además, el hook `useState` es JavaScript puro que React usa para **recordar**
valores entre renderizados:

```jsx
const [color, setColor] = useState("azul");  // [valorActual, funcParaCambiarlo]
setColor("rojo");  // → React vuelve a renderizar el componente
```

---

### ¿Cómo funcionan los eventos?
En React los eventos se escriben en **camelCase** y reciben una función (no un string):

| HTML tradicional | React |
|-----------------|-------|
| `onclick="miFuncion()"` | `onClick={miFuncion}` |
| `onchange="..."` | `onChange={...}` |
| `onmouseover="..."` | `onMouseOver={...}` |

Ejemplo real del proyecto:
```jsx
function Hero() {
  const [indice, setIndice] = useState(0);

  function cambiarColor() {
    setIndice(indice + 1);  // actualiza el estado → React redibuja
  }

  return <button onClick={cambiarColor}>Cambiar color</button>;
}
```

---

### Diferencia entre HTML tradicional y React

| Aspecto | HTML + JS tradicional | React |
|---------|----------------------|-------|
| Estructura | Archivos `.html` separados | Componentes `.jsx` reutilizables |
| Actualizar la UI | `document.getElementById().innerHTML = ...` | `setEstado(nuevoValor)` → React actualiza solo |
| Reutilización | Copiar y pegar código | Importar y usar el componente |
| Datos | Variables globales o el DOM | Props y estado local (useState) |
| Eventos | `onclick=""` en el HTML | `onClick={función}` en JSX |

---

## 🔧 Tecnologías utilizadas
- **React 18** — biblioteca principal
- **JSX** — sintaxis de componentes
- **useState** — manejo de estado local
- **CSS3** — estilos con variables y animaciones
- **JavaScript ES6+** — arrow functions, destructuring, .map()
