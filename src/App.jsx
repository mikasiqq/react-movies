import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';
import SchedulePage from './pages/SchedulePage';
import UserPage from './pages/UserPage';
import { getMoviesData, getMoviesDatesData } from './store/actions/movie-actions';
import { getOrders } from './store/actions/order-actions';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMoviesData())
    dispatch(getMoviesDatesData())
    dispatch(getOrders())
  }, [dispatch])

  return (
    <div className="wrapper">
      <Routes>
        <Route path='/' element={<SchedulePage />} />
        <Route path='/orders' element={<UserPage />} />
      </Routes>
    </div>
  )
}

export default App
