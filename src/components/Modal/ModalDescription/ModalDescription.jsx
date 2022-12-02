import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { modalActions } from '../../../store/slices/modal-slice';
import TicketDescription from '../Ticket/TicketDescription';
import classes from './ModalDescription.module.scss'
const ModalDescription = ({modalMovie, updatedTickets, submitOrder, tickets}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(modalActions.updatedTicketsHandler())
  }, [dispatch])

  const totalPrice = tickets.reduce(
    (sum, obj) => ((obj.isAvailable === false && obj.ordered !== true) ? sum + obj.price : sum),
    0
  )

  const orderTickets = () => {
    submitOrder(totalPrice)
  }

  return (
    <div className={classes.movieDescription}>
    <div className={classes.wrapper}>
      <div className={classes.movieTime}>
        <span>Сегодня</span>
        <span>{modalMovie.time}</span>
      </div>
      <p>г. Москва</p>
      <div className={classes.movieCategories}>
        <p>{modalMovie.categories.title} · 2D</p>
      </div>
    </div>
    <img
      width={200}
      height={300}
      src={modalMovie.imageUrl}
      alt="ModalMovie"
    />
    <div className={classes.selectedTickets}>
      <h3>Билеты</h3>
      <div className={classes.ticketsDescription}>
        {updatedTickets.map((ticket) => (
          <TicketDescription key={ticket.id} ticket={ticket} />
        ))}
    </div>
    </div>
    {totalPrice && (
      <span className={classes.totalPrice}>Итого: {totalPrice} ₽</span>
    )}
    <button onClick={orderTickets}>Оформить заказ</button>
  </div>
  );
}

export default ModalDescription;
