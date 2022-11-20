import React from 'react';
import classes from './TicketDescription.module.scss'

const TicketDescription = ({ticket}) => {
  return (
    <div className={classes.ticketDescription}>
      <p>{ticket.description}</p>
      <p>{ticket.price}₽</p>
    </div>
  );
}

export default TicketDescription;
