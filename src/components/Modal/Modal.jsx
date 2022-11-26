import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { postOrder } from "../../store/actions/modal-actions";
import { modalActions } from "../../store/slices/modal-slice";
import { movieActions } from "../../store/slices/movie-slice";
import classes from "./Modal.module.scss";
import Ticket from "./Ticket/Ticket";
import TicketDescription from "./Ticket/TicketDescription";

const Modal = () => {
  const dispatch = useDispatch();

  const modalMovie = useSelector((state) => state.modal.modalMovie);
  const scheduleDates = useSelector((state) => state.movie.scheduleDates);
  const currentDate = useSelector((state) => state.movie.currentDate);

  const currentDateId = useSelector((state) => state.movie.currentDateId);
  const tickets = useSelector((state) => state.modal.modalTickets);
  const updatedTickets = useSelector((state) => state.modal.updatedTickets);

  const hideModal = () => {
    const movieId = modalMovie.id
    dispatch(movieActions.replaceMovieTickets({movieId, tickets}))
    dispatch(modalActions.modalChangeHandler(null));
  };

  const replaceTickets = (id) => {
    dispatch(modalActions.selectedModalTicketsHandler({ id, tickets }));
  };

  useEffect(() => {
    dispatch(
      modalActions.modalTicketsHandler({ scheduleDates, currentDateId })
    );
  }, [dispatch]);
  
  let totalPrice
  updatedTickets.length > 0 ? totalPrice = tickets.reduce(
    (sum, obj) => (obj.isAvailable === false ? sum + obj.price : sum),
    0
  ) : ''

  const submitOrder = () => {
    const date = new Date();
    const dateOrder = date.toLocaleDateString("ru-RU");
    const movieTitle = modalMovie.title
    const movieImage = modalMovie.imageUrl
    dispatch(
      postOrder(
        dateOrder,
        updatedTickets,
        totalPrice,
        currentDate,
        movieTitle,
        movieImage
      )
    );
    hideModal();
  };

  return (
    <div onClick={hideModal} className={classes.backdrop}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={classes.modalContent}
      >
        <div className={classes.tickets}>
          <div className={classes.availableTickets}>
            {tickets.map((ticket) => (
              <Ticket
                key={ticket.id}
                ticket={ticket}
                replaceTickets={replaceTickets}
                fill={ticket.isAvailable == true ? "blue" : "grey"}
              />
            ))}
          </div>
          <div className={classes.ticketsInfo}>
            <div>
              <Ticket key="available" fill="blue" /> — свободно
            </div>
            <div>
              <Ticket key="notAvailable" fill="grey" /> — занято
            </div>
          </div>
          <img width={50} height={50} src="/images/screen.png" alt="screen" />
        </div>
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
          <button onClick={submitOrder}>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
