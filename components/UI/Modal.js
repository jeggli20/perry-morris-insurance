import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      <Backdrop onClose={props.onCloseModal} />
      <ModalOverlay className={classes.container}>
        <div className={classes.header}>
          <h3>{props.title}</h3>
          <FontAwesomeIcon
            icon={faXmark}
            className={`icon ${classes["header-icon"]}`}
            onClick={props.onCloseModal}
          />
        </div>
        <p>{props.description}</p>
      </ModalOverlay>
    </Fragment>
  );
};

export default Modal;
