import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Movie.module.scss'

const Movie = ({movie}) => {
  return (
    <div className={classes.movie}>
      <Link to={`/movies/${movie.id}`}><img width={200} height={300} src={movie.imageUrl} alt="Cover" /></Link>
      <div className={classes.movieDesc}>
        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        <p>{movie.category}</p>
        <div>
          <p>{movie.country}</p>
          <p>{movie.duration}</p>
        </div>
        <p>{movie.shortDesc}</p>
      </div>
    </div>
  );
}

export default Movie;
