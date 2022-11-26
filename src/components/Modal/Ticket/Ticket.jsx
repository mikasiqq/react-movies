import React from 'react';
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
