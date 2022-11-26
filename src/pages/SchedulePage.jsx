import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Modal from "../components/Modal/Modal";
import Schedule from "../components/Schedule/Schedule";

const SchedulePage = () => {
  const showModal = useSelector(state => state.modal.showModal)
  return (
    <Fragment>
      <Header />
      <Main />
      <Schedule showModal />
      {showModal && <Modal />}
    </Fragment>
  );
};

export default SchedulePage;
