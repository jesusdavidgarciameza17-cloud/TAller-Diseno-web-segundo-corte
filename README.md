# Catálogo de Películas — Sala Oscura

Aplicación web hecha con React y Vite: un catálogo interactivo de películas (sin backend) donde se puede buscar, filtrar, ver detalles, guardar favoritas y calificar de 1 a 5 estrellas.

## Cómo ejecutarlo

 bash
npm install
npm run dev


Luego abre la dirección que muestra la terminal (normalmente http://localhost:5173).

## Funcionalidades

- Catálogo con imagen, título, género, año, calificación y descripción.
- Buscador por título en tiempo real.
- Filtros por género, año, calificación mínima y solo favoritas (se combinan con el buscador).
- Detalle de la película (se cierra con el botón ✕, haciendo clic afuera o con Esc).
- Favoritos: agregar, quitar y ver el listado (se guardan solo los IDs).
- Calificación personal de 1 a 5 estrellas.
- Mensaje cuando no hay resultados.

## Estructura

src/
├── App.jsx                 
├── main.jsx
├── index.css
├── data/movies.js          
├── utils/filterMovies.js  
└── components/
    ├── Header.jsx
    ├── SearchBar.jsx
    ├── Filters.jsx
    ├── MovieList.jsx
    ├── MovieCard.jsx
    ├── MovieDetail.jsx
    ├── StarRating.jsx
    └── Favorites.jsx
    └── "todas las imagenes que añadi que no pienso escribir 1 por 1"



## Autores

- Jesus David Garcia Meza :3
