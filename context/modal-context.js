import { createContext, useState } from "react";

const modalDescriptions = [
  "Some sample text for individual coverage.",
  "Some sample text for family coverage.",
  "Some sample text for small business coverage.",
  "Some sample text for retired coverage.",
  "Some sample text for Why Perry.",
];

const ModalContext = createContext({
  isShown: false,
  hideModal: () => {},
  showModal: () => {},
  description: "",
  title: "",
});

export const ModalContextProvider = (props) => {
  const [isShown, setIsShown] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalDescription, setModalDescription] = useState("");

  const hideModalHandler = () => {
    setIsShown(false);
  };

  const showModalHandler = (event) => {
    const eventCurrentTarget = event.currentTarget.classList;

    if (eventCurrentTarget.contains("card_ind")) {
      setModalTitle("Individuals");
      setModalDescription(modalDescriptions[0]);
    } else if (eventCurrentTarget.contains("card_fam")) {
      setModalTitle("Families");
      setModalDescription(modalDescriptions[1]);
    } else if (eventCurrentTarget.contains("card_smb")) {
      setModalTitle("Small Businesses");
      setModalDescription(modalDescriptions[2]);
    } else if (eventCurrentTarget.contains("card_ret")) {
      setModalTitle("Retired");
      setModalDescription(modalDescriptions[3]);
    } else {
      setModalTitle("Why Perry?");
      setModalDescription(modalDescriptions[4]);
    }

    setIsShown(true);
  };

  return (
    <ModalContext.Provider
      value={{
        isShown,
        hideModal: hideModalHandler,
        showModal: showModalHandler,
        description: modalDescription,
        title: modalTitle,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
