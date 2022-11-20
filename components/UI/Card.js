import { useContext } from "react";
import Image from "next/image";

import ModalContext from "../../context/modal-context";
import classes from "./Card.module.css";

const Card = (props) => {
  const modalCtx = useContext(ModalContext);

  return (
    <div
      className={`${classes.card} ${props.className}`}
      onClick={modalCtx.showModal}
    >
      <Image
        className={classes.card_img}
        src={props.src}
        alt={props.alt}
        layout="fill"
      />
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

export default Card;
