import React from 'react';
import { useSelector } from 'react-redux';
import Movie from './Movie/Movie';
import classes from './UpcomingMovies.module.scss'

const UpcomingMovies = () => {
  const movies = useSelector(state => state.movie.movies).filter(el => el.hasOwnProperty('upcoming'))

  return (
    <section className={classes.upcomingMovies}>
      <h3>Скоро в кино</h3>
      <div className={classes.movieCards}>
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}

export default UpcomingMovies;
