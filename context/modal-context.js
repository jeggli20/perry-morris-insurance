import { createContext, useState } from "react";

const modalDescriptions = [
  "We make it simple to get individual plans to best suit your needs. Whether you're 26, getting insurance for the first time, or you have recently had a life changing event. We want to help.",
  "Family is important to us. We can help you with finding the perfect coverage for the whole family to help give you peace of mind.",
  "Make providing the best insurance as simple as possible. We cater to all businesses from 1 - 100 employees. We take care of your insurance so you can focus on your business.",
  "We want to help! Your retirement is your time. Let us make insurance as simple and worry free as possible",
  "Lorem ipsum",
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
    } else if (eventCurrentTarget.contains("card_propDmg")) {
      setModalTitle("Property and Damage");
      setModalDescription(modalDescriptions[4]);
    } else {
      setModalTitle("Why Perry?");
      setModalDescription(modalDescriptions[5]);
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
