import { createContext } from "react";

const ValidationContext = createContext({
  isNotEmpty: (value) => {
    return boolean;
  },
  isString: (value) => {
    return boolean;
  },
  msgLength: (value) => {
    return boolean;
  },
  validPostal: (value) => {
    return boolean;
  },
  validEmail: (value) => {
    return boolean;
  },
});

export const ValidationContextProvider = (props) => {
  const isNotEmpty = (value) => value.trim() !== "";
  const isString = (value) => {
    if (!isNotEmpty(value)) {
      return false;
    }

    const letters = /^[a-zA-Z]+$/;
    return letters.test(value);
  };
  const msgLength = (value) => {
    if (value.trim().length < 10) {
      msgError = "Your message should be at least 10 character's";
      return false;
    } else if (value.trim().length > 250) {
      msgError = "Your message should be less than 250 characters";
      return false;
    } else {
      return true;
    }
  };

  const validPostal = (value) => {
    if (value.trim().length < 5) {
      return false;
    }

    const letters = /^[0-9]+$/;
    return letters.test(value);
  };

  const validEmail = (value) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(value);
  };

  return (
    <ValidationContext.Provider
      value={{ isNotEmpty, isString, msgLength, validPostal, validEmail }}
    >
      {props.children}
    </ValidationContext.Provider>
  );
};

export default ValidationContext;
