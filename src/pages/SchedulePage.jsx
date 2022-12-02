import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Modal from "../components/Modal/Modal";
import Schedule from "../components/Schedule/Schedule";

const SchedulePage = () => {
  const showModal = useSelector((state) => state.modal.showModal);

  return (
    <Fragment>
      <Schedule showModal />
      {showModal && <Modal />}
    </Fragment>
  );
};

export default SchedulePage;
