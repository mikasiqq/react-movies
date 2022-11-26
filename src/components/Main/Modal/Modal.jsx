import React from "react";
import ReactPlayer from "react-player";

import classes from "./Modal.module.scss";

const Modal = ({hideModal, movieUrl}) => {

  const modalHandler = () => {
    hideModal()
  };

  return (
    <div onClick={modalHandler} className={classes.backdrop}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={classes.modalContent}
      >
        <ReactPlayer width={1200} height={600}  className={classes.player} url={movieUrl} />
      </div>
    </div>
  );
};

export default Modal;
