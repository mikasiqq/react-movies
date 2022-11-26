import React from 'react';
import { useDispatch } from 'react-redux';
import { movieActions } from '../../../store/slices/movie-slice';
import classes from './Category.module.scss'

const Categories = ({category}) => {
  const dispatch = useDispatch()

  const changeCategory = () => {
    dispatch(movieActions.categoryHandler({categoryId: category.id, type: category.type}))
  }
  const isActive = category.isActive === true ? `${classes.category} ${classes.active}` : `${classes.category}`
  
  return (
    <button onClick={changeCategory} className={isActive}>
      <span>{category.title}</span>
    </button>
  );
}

export default Categories;
