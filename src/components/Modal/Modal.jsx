import axios from "axios";
import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { postOrder } from "../../store/actions/modal-actions";
import { modalActions } from "../../store/slices/modal-slice";
import { movieActions } from "../../store/slices/movie-slice";
import { orderActions } from "../../store/slices/order-slice";
import classes from "./Modal.module.scss";
import ModalDescription from "./ModalDescription/ModalDescription";
import ModalOnClosing from "./ModalOnClosing/ModalOnClosing";
import Ticket from "./Ticket/Ticket";

const Modal = () => {
  const dispatch = useDispatch();

  const modalMovie = useSelector((state) => state.modal.modalMovie);
  const currentDate = useSelector((state) => state.movie.currentDate);
  const currentDateId = useSelector((state) => state.movie.currentDateId);
  const scheduleDates = useSelector((state) => state.movie.scheduleDates);
  const tickets = useSelector((state) => state.modal.modalTickets);
  const updatedTickets = useSelector((state) => state.modal.updatedTickets);
  const [isClosing, setIsClosing] = useState(false);

  const hideModal = () => {
    dispatch(modalActions.modalChangeHandler(null));
  };

  const replaceTickets = (id) => {
    dispatch(modalActions.selectedTicketsHandler({ id, tickets }));
  };

  const closingModal = () => {
    setIsClosing(!isClosing);
  };

  const submitOrder = (totalPrice) => {
    const date = new Date();
    const dateOrder = date.toLocaleDateString("ru-RU");
    const movieTitle = modalMovie.title;
    const movieImage = modalMovie.imageUrl;
    const movieTime = modalMovie.time;

    // dispatch(modalActions.orderedTicketsHandler(tickets))
    const orderedTicketsHandler = () => {
      const orderedTickets = tickets.map((el) => {
        if (el.isAvailable === false) {
          return {
            ...el,
            ordered: true,
          };
        }
        return el;
      });
      const movieId = modalMovie.id;
      dispatch(movieActions.replaceMovieTickets({ movieId, orderedTickets }));
    };
    orderedTicketsHandler();

    if (!updatedTickets.length) {
      hideModal();
      return;
    }

    dispatch(
      postOrder({
        dateOrder,
        updatedTickets,
        totalPrice,
        currentDate,
        movieTitle,
        movieImage,
        movieTime,
      })
    );
    dispatch(orderActions.putOrder());
    hideModal();
  };

  useEffect(() => {
    dispatch(
      modalActions.modalTicketsHandler({ scheduleDates, currentDateId })
    );
  }, [dispatch]);

  return (
    <div
      onClick={() => {
        if (!isClosing) closingModal();
      }}
      className={classes.backdrop}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={classes.modalContent}
      >
        {isClosing && (
          <ModalOnClosing hideModal={hideModal} closingModal={closingModal} />
        )}
        {!isClosing && (
          <>
            <div className={classes.tickets}>
              <div className={classes.availableTickets}>
                {tickets.map((ticket) => (
                  <Ticket
                    key={ticket.id}
                    ticket={ticket}
                    replaceTickets={replaceTickets}
                    fill={ticket.isAvailable === true ? "blue" : "grey"}
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
              <img
                width={50}
                height={50}
                src="/images/screen.png"
                alt="screen"
              />
            </div>
            <ModalDescription
              modalMovie={modalMovie}
              updatedTickets={updatedTickets}
              submitOrder={submitOrder}
              tickets={tickets}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
