import responseMovies from './mocks/with-results.json';
import withoutResults from './mocks/no-results.json';
import './App.css';
import { Movies } from './components/Movies.jsx';

function App() {
  const movies = responseMovies.Search;
  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));
  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form'>
          <input type='text' placeholder='Avenges,Star Wars, The Matrix' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  );
}

export default App;
