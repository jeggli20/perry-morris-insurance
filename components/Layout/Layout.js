import { useContext, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import ModalContext from "../../context/modal-context";
import Header from "./Header";
import Footer from "./Footer";
import Modal from "../UI/Modal";
import Navigation from "./Navigation";
import classes from "./Layout.module.css";

const Layout = (props) => {
  const modalCtx = useContext(ModalContext);

  const [navDisplay, setNavDisplay] = useState(false);
  const [btnClick, setBtnClick] = useState(false);

  let navClass;

  const barEventHandler = () => {
    setBtnClick(true);
    setNavDisplay((prevState) => {
      return !prevState;
    });
  };

  if (navDisplay && btnClick) {
    navClass = "show-nav";
  } else if (!navDisplay && btnClick) {
    navClass = "hide-nav";
  } else {
    navClass = "";
  }

  return (
    <div className={classes["main-container"]}>
      {modalCtx.isShown && (
        <Modal
          onCloseModal={modalCtx.hideModal}
          title={modalCtx.title}
          description={modalCtx.description}
          image={modalCtx.image}
          alt={modalCtx.alt}
        />
      )}
      <FontAwesomeIcon
        icon={navDisplay ? faXmark : faBars}
        className={`icon ${classes.bar}`}
        aria-hidden="true"
        onClick={barEventHandler}
      />
      <Navigation
        className={`${classes["side-nav"]} ${classes[`${navClass}`]}`}
      />
      <Header />
      <main className={classes.content}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
