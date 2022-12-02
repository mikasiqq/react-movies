import React from "react";
import classes from './ModalOnClosing.module.scss'

const ModalOnClosing = ({hideModal, closingModal}) => {
  const closeModal = () => {
    hideModal()
  }
  return (
    <div className={classes.modalClosing}>
      <img width={128} height={128} src="/images/tickets.png" alt="Tickets" />
      <p>Вы точно хотите закрыть приложение покупки билетов?</p>
      <button onClick={closeModal}>Мне нужно идти</button>
      <button onClick={() => closingModal()}>Остаться</button>
    </div>
  );
};

export default ModalOnClosing;
