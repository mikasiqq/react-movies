import React, { useEffect, useState } from 'react';
import classes from './Card.module.scss'

const Card = ({order}) => {
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    const tickets = order.updatedTickets
    tickets.forEach((el) => {
      setTickets(prev => [...prev, el])
    })
  }, [])

  console.log(tickets)

  return (
    <div className={classes.card}>
      <p>Дата заказа: {order.dateOrder}</p>
      <div className={classes.cardDesc}>
        <img width={266} height={400} src={order.movieImage} alt="Movie photo" />
        <p>{order.movieTitle}</p>
        <p>{order.movieDate}</p>
        {order.updatedTickets.map(el => (
          <p>{el.description}</p>
        ))}
        <p>Стоимость билетов: {order.totalPrice} ₽</p>
      </div>
    </div>
  );
}

export default Card;
