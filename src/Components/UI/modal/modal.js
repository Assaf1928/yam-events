import React from "react";
import classes from "./modal.module.css";
import Backdrop from "../backdrop/backdrop";
const Modal = ({ handleClose, show, children }) => {
  //        <Modal  show={this.state.show} handleClose={this.hideModal}>

  let showHideClassName = show
    ? classes.modal + " " + classes.display__block
    : classes.modal + " " + classes.display__none;
  return (
    <div>
      <Backdrop show={show} clicked={handleClose} />
      <div className={showHideClassName}>
        <div className={classes.modal__main}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
