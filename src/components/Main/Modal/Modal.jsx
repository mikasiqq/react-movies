import React from "react";
import ReactPlayer from "react-player/youtube";

import classes from "./Modal.module.scss";

const Modal = ({ hideModal, movieUrl }) => {
  const modalHandler = () => {
    hideModal();
  };

  return (
    <div onClick={modalHandler} className={classes.backdrop}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={classes.modalContent}
      >
        <ReactPlayer
          width="1000px"
          height="600px"
          config={{
            youtube: {
              playerVars: { autoplay: true, controls: 1 },
            },
          }}
          className={classes.player}
          url={movieUrl}
        />
      </div>
    </div>
  );
};

export default Modal;
