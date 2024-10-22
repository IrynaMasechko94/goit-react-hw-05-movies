import TrendingList from 'components/TrendingList/TrendingList';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as API from '../../utils/api/apiMoviedb';

export default function SearchForm() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.target[0].value });
    return;
  };

  useEffect(() => {
    const movieTitle = searchParams.get('query');
    if (movieTitle) {
      API.searchMovies(movieTitle).then(ret => setMovies(ret));
    }
  }, [searchParams]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search..."></input>
        <button type="submit">Search</button>
      </form>
      <TrendingList movies={movies} />
    </div>
  );
}
