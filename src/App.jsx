import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Modal from './components/Modal/Modal';
import Schedule from './components/Schedule/Schedule';
import { getMoviesData, getMoviesDatesData } from './store/movie-actions';

function App() {
  const dispatch = useDispatch()
  const showModal = useSelector(state => state.modal.showModal)

  useEffect(() => {
    dispatch(getMoviesData())
    dispatch(getMoviesDatesData())
  }, [dispatch])

  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Schedule showModal />
      {showModal && <Modal />}
    </div>
  )
}

export default App
