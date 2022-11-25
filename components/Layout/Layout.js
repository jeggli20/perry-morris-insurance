import { useContext, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import ModalContext from "../../context/modal-context";
import Header from "./Navigation/Header";
import Footer from "./Navigation/Footer";
import Modal from "../UI/Modal";
import classes from "./Layout.module.css";
import Navigation from "./Navigation/Navigation";

const Layout = (props) => {
  const modalCtx = useContext(ModalContext);

  const [navDisplay, setNavDisplay] = useState(false);

  const barEventHandler = () => {
    setNavDisplay((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className={classes["main-container"]}>
      {modalCtx.isShown && (
        <Modal
          onCloseModal={modalCtx.hideModal}
          title={modalCtx.title}
          description={modalCtx.description}
        />
      )}
      <a>
        <FontAwesomeIcon
          icon={navDisplay ? faXmark : faBars}
          className={`icon ${classes.bar}`}
          aria-hidden="true"
          onClick={barEventHandler}
        />
      </a>
      <Navigation
        className={`${classes["side-nav"]} ${
          navDisplay ? classes["show-nav"] : classes["hide-nav"]
        }`}
      />
      <Header />
      <main className={classes.content}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
