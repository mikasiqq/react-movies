import React, { useEffect, useState } from "react";
import Date from "./Date/Date";
import Category from "./Category/Category";
import classes from "./Schedule.module.scss";
import Movie from "./Movie/Movie";
import { useSelector } from "react-redux";
import MovieSkeleton from "./Movie/MovieSkeleton";
import DateSkeleton from "./Date/DateSkeleton";

const Schedule = () => {
  const isLoading = useSelector((state) => state.movie.isLoading)
  const movies = useSelector((state) => state.movie.movies);
  const scheduleDates = useSelector((state) => state.movie.scheduleDates);
  const scheduleCategories = useSelector(
    (state) => state.movie.scheduleCategories
  );
  const currentDate = useSelector((state) => state.movie.currentDate);
  const curCategories = useSelector((state) => state.movie.curCategories);

  const [updatedMovies, setUpdatedMovies] = useState([]);

  useEffect(() => {
    const updateMoviesHandler = () => {
      const curDateMovies = currentDate.movies;
      setUpdatedMovies([]);

      movies.forEach((el) => {
        const categoriesId = el.categories.id;
        if (curDateMovies.hasOwnProperty(el.id) && curCategories[1] === "c4") {
          setUpdatedMovies((prev) => [...prev, el]);
        } else if (
          curDateMovies.hasOwnProperty(el.id) &&
          categoriesId.includes(curCategories[1])
        ) {
          setUpdatedMovies((prev) => [...prev, el]);
        }
      });

    };
    updateMoviesHandler();

  }, [currentDate, scheduleCategories]);

  return (
    <section className={classes.schedule}>
      <div className={classes.headContainer}>
        <h3>Расписание сеансов</h3>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
          </svg>
        </div>
      </div>
      <div className={classes.scheduleDates}>
        {(scheduleDates.length === 0 || isLoading)
          ? [...Array(7)].map((el, index) => <DateSkeleton key={index} />)
          : scheduleDates.map((scheduleDate) => (
              <Date
                key={scheduleDate.id}
                id={scheduleDate.id}
                active={scheduleDate.isActive}
                day={scheduleDate.day}
                date={scheduleDate.date}
              />
            ))}
      </div>
      <div className={classes.categories}>
        {scheduleCategories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
      <div className={classes.movies}>
        {(updatedMovies.length === 0 || isLoading)
          ? [...Array(4)].map((el, index) => <MovieSkeleton key={index} />)
          : updatedMovies.map((movie) => (
              <Movie key={movie.id} movie={movie} />
            ))}
      </div>
    </section>
  );
};

export default Schedule;
