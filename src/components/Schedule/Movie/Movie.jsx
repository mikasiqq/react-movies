import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../../store/slices/modal-slice";
import classes from "./Movie.module.scss";

const Movie = ({ movie }) => {
  const dispatch = useDispatch();

  const showMovieModal = () => {
    dispatch(modalActions.modalChangeHandler(movie));
  };

  const ageRating = `${
    movie.categories.title === "18+" ? classes.eighteen : ""
  } ${movie.categories.title === "16+" ? classes.sixteen : ""} ${
    movie.categories.title === "12+" ? classes.twelve : ""
  }`;

  return (
    <div className={classes.movie}>
      <a className={classes.movieLink} href="/">
        <img width={200} height={300} src={movie.imageUrl} alt="Первый фильм" />
        <div className={`${classes.movieAge} ${ageRating}`}>
          {movie.categories.title}
        </div>
      </a>
      <div className={classes.movieDescription}>
        <a className={classes.movieTitle}>{movie.title}</a>
        <p className={classes.movieGenres}>{movie.category}</p>
        <div className={classes.movieCountry}>
          <p>{movie.country}</p>
          <p>{movie.duration}</p>
        </div>
        <span>{movie.format}</span>
        <button onClick={showMovieModal}>{movie.time}</button>
      </div>
    </div>
  );
};

export default Movie;
