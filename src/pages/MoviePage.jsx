import React from 'react';
import { useParams } from 'react-router';
import MovieDetailed from '../components/MovieDetailed/MovieDetailed';

const MoviePage = () => {
  const params = useParams()
  const { movieId } = params
  return (
    <MovieDetailed movieId={movieId} />
  );
}

export default MoviePage;
