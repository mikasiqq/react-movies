import axios from "axios";
import { movieActions } from "../slices/movie-slice";

export const getMoviesData = () => {
  return async (dispatch) => {
    const getData = async () => {
      const response = await axios.get(
        "https://636fbf10bb9cf402c81eb9b5.mockapi.io/movies"
      );
      const data = await response.data;
      return data;
    };

    try {
      const moviesData = await getData();
      dispatch(movieActions.replaceMovies(moviesData));
    } catch (err) {
      alert("Ошибка при получении информации о фильмах :(");
      console.error(err);
    }
  };
};

export const getMoviesDatesData = () => {
  return async (dispatch) => {
    const getData = async () => {
      const response = await axios.get(
        "https://636fbf10bb9cf402c81eb9b5.mockapi.io/dates"
      );
      const data = await response.data;
      return data;
    };
    try {
      const moviesDatesData = await getData();
      dispatch(movieActions.replaceDates(moviesDatesData));
      dispatch(movieActions.changeActiveDate("d1"));
    } catch (err) {
      alert("Ошибка при получении информации о расписании :(");
      console.error(err);
    }
  };
};
