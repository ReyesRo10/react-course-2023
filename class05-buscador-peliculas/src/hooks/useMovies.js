import withResults from '../mocks/with-results.json';
import withoutResults from '../mocks/no-results.json';
import { useState } from 'react';

export function useMovies({ search }) {
  const [responseMovies, setResponseMovies] = useState([]);
  const movies = responseMovies.Search;
  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));

  const getMovies = () => {
    if (search) {
      //setResponseMovies(withResults);
      fetch(`https://www.omdbapi.com/?s=${search}&apikey=23350a72`)
        .then((res) => res.json())
        .then((data) => setResponseMovies(data));
    } else {
      setResponseMovies(withoutResults);
    }
  };
  return { movies: mappedMovies, getMovies };
}
