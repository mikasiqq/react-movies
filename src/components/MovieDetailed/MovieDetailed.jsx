import React from "react";
import { useSelector } from "react-redux";
import classes from "./MovieDetailed.module.scss";
const MovieDetailed = ({ movieId }) => {
  const movie = useSelector((state) => state.movie.movies).filter(
    (el) => el.id === movieId
  )[0];
  console.log(movie);
  return (
    movie && (
      <section className={classes.movieDetailed}>
        <div>
          <img width={300} height={425} src={movie.imageUrl} alt="Cover" />
          <div className={classes.movieDescription}>
            <h3>{movie.title}</h3>
            <div className={classes.movieItem}>
              <span>Возрастной рейтинг:</span>
              <p>{movie.categories.title}</p>
            </div>
            <div className={classes.movieItem}>
              <span>Продолжительность:</span>
              <p>{movie.duration}</p>
            </div>
            <div className={classes.movieItem}>
              <span>Страна:</span>
              <p>{movie.country}</p>
            </div>
            <div className={classes.movieItem}>
              <span>Жанры:</span>
              <p>{movie.category}</p>
            </div>
            <div className={classes.movieItem}>
              <span>Режиссер:</span>
              <p>{movie.director}</p>
            </div>
            <div className={classes.movieItem}>
              <span>В главных ролях:</span>
              <p>{movie.actors}</p>
            </div>
          </div>
        </div>
        <h3>Описание</h3>
        <p>{movie.description}</p>
        <h3>Кадры</h3>
        <div className={classes.movieGallery}>
          {[...Array(4)].map((el, index) => (
            <img src={`/images/movies/${movieId}/${index + 1}.jpeg`} />
          ))}
        </div>
      </section>
    )
  );
};

export default MovieDetailed;
