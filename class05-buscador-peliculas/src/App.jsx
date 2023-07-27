import './App.css';
import { useMovies } from './hooks/useMovies.js';
import { Movies } from './components/Movies.jsx';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

function useSearch() {
  const [search, updateSearch] = useState('');
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === '';
      return;
    }
    if (search === '') {
      setError('No se puede buscar una pelicula vacia');
      return;
    }
    if (search.match(/\d+$/)) {
      setError('No se puede buscar una pelicula con un numero');
      return;
    }
    if (search.length < 3) {
      setError('La busqueda debe tener al menos 3 caracteres');
      return;
    }
    setError(null);
  }, [search]);
  return { search, updateSearch, error };
}

function App() {
  const { search, updateSearch, error } = useSearch();
  const { movies: mappedMovies, getMovies } = useMovies({ search });

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies();
  };

  const handleChange = (event) => {
    updateSearch(event.target.value);
  };

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={search}
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
