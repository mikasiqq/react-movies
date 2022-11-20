import React from 'react';
import { useDispatch } from 'react-redux';
import { movieActions } from '../../../store/movie-slice';
import classes from './Date.module.scss'

const Date = ({id, day, date, active}) => {
  const dispatch = useDispatch()

  const changeIsActive = () => {
    dispatch(movieActions.changeActiveDate(id))
  }

  return (
    <div onClick={changeIsActive} className={`${classes.date} ${active ? classes.active : ''}`}>
      <p>{day}</p>
      <span>{date}</span>
    </div>
  );
}

export default Date;
