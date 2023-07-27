import './App.css';
import { useMovies } from './hooks/useMovies.js';
import { Movies } from './components/Movies.jsx';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const { movies: mappedMovies } = useMovies();
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ query });
  };

  const handleChange = (event) => {
    const newQuery = event.target.value;
    if (newQuery.startsWith(' ')) return;
    setQuery(event.target.value);

    if (newQuery === '') {
      setError('No se puede buscar una pelicula vacia');
      return;
    }
    if (newQuery.match(/\d+$/)) {
      setError('No se puede buscar una pelicula con un numero');
      return;
    }
    if (newQuery.length < 3) {
      setError('La busqueda debe tener al menos 3 caracteres');
      return;
    }
    setError(null);
  };

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={query}
            name='query'
            type='text'
            placeholder='Avenges,Star Wars, The Matrix'
          />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  );
}

export default App;
