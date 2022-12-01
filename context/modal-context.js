import { createContext, useState } from "react";

import family from "../img/family.jpg";
import individual from "../img/individual.jpg";
import smBus from "../img/small_business.jpg";
import retired from "../img/retired.jpg";
import property from "../img/property.jpg";
import profile from "../img/profile.jpg";

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
  image: "",
  alt: "",
});

export const ModalContextProvider = (props) => {
  const [isShown, setIsShown] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalDescription, setModalDescription] = useState("");
  const [modalImage, setModalImage] = useState("");
  const [imgAlt, setImgAlt] = useState("");

  const hideModalHandler = () => {
    setIsShown(false);
  };

  const showModalHandler = (event) => {
    const eventCurrentTarget = event.currentTarget.classList;

    if (eventCurrentTarget.contains("card_ind")) {
      setModalTitle("Individuals");
      setModalDescription(modalDescriptions[0]);
      setModalImage(individual);
      setImgAlt("Individual");
    } else if (eventCurrentTarget.contains("card_fam")) {
      setModalTitle("Families");
      setModalDescription(modalDescriptions[1]);
      setModalImage(family);
      setImgAlt("Family");
    } else if (eventCurrentTarget.contains("card_smb")) {
      setModalTitle("Small Businesses");
      setModalDescription(modalDescriptions[2]);
      setModalImage(smBus);
      setImgAlt("Small Business");
    } else if (eventCurrentTarget.contains("card_ret")) {
      setModalTitle("Retired");
      setModalDescription(modalDescriptions[3]);
      setModalImage(retired);
      setImgAlt("Retired");
    } else if (eventCurrentTarget.contains("card_propDmg")) {
      setModalTitle("Property and Damage");
      setModalDescription(modalDescriptions[4]);
      setModalImage(property);
      setImgAlt("Property");
    } else {
      setModalTitle("Why Perry?");
      setModalDescription(modalDescriptions[5]);
      setModalImage(profile);
      setImgAlt("Perry Morris");
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
        image: modalImage,
        alt: imgAlt,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
