import React from 'react';
import { useDispatch } from 'react-redux';
import { modalActions } from '../../../store/modal-slice';
import classes from './Ticket.module.scss'

const Ticket = ({fill, ticket, replaceTickets}) => {

  const selectTicket = () => {
    replaceTickets(ticket.id)
  }

  return (
    <div onClick={selectTicket} className={fill === 'blue' ? classes.ticket : classes.ticketNotAvailable} />
  );
}

export default Ticket;
