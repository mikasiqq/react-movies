import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router";
import SchedulePage from "./pages/SchedulePage";
import UserPage from "./pages/UserPage";
import Header from './components/Header/Header'
import Main from './components/Main/Main'

import {
  getMoviesData,
  getMoviesDatesData,
} from "./store/actions/movie-actions";
import UpcomingPage from "./pages/UpcomingPage";
import MoviePage from "./pages/MoviePage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesData());
    dispatch(getMoviesDatesData());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Routes>
        <Route path="/" element={<Navigate replace to="/movies" />} />
        <Route path="/movies" element={<SchedulePage />} />
        <Route path="/orders" element={<UserPage />} />
        <Route path="/movies/:movieId" element={<MoviePage />} />
        <Route path="/upcoming" element={<UpcomingPage />} />
      </Routes>
    </div>
  );
}

export default App;
