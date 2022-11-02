import { useContext } from "react";

import ModalContext from "../../context/modal-context";
import Header from "./Navigation/Header";
import Footer from "./Navigation/Footer";
import Modal from "../UI/Modal";
import classes from "./Layout.module.css";

const Layout = (props) => {
  const modalCtx = useContext(ModalContext);

  return (
    <div className={classes["main-container"]}>
      {modalCtx.isShown && (
        <Modal
          onCloseModal={modalCtx.hideModal}
          title={modalCtx.title}
          description={modalCtx.description}
        />
      )}
      <Header />
      <main className={classes.content}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
