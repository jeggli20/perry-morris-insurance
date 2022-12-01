import { Fragment } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const Modal = (props) => {
  return (
    <Fragment>
      <Backdrop onClose={props.onCloseModal} />
      <ModalOverlay>
        <div className={classes.header}>
          <h3>{props.title}</h3>
          <FontAwesomeIcon
            icon={faXmark}
            className={`icon ${classes["header-icon"]}`}
            onClick={props.onCloseModal}
          />
        </div>
        <div className={classes.content}>
          <div className={classes["image-container"]}>
            <Image
              src={props.image}
              alt={props.alt}
              layout="fill"
              className={classes.image}
            />
          </div>
          <div className={classes.description}>
            <p>{props.description}</p>
          </div>
        </div>
      </ModalOverlay>
    </Fragment>
  );
};

export default Modal;
