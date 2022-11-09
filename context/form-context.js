import { createContext, useState } from "react";

const FormContext = createContext({
  isSubmitting: false,
  isComplete: false,
  newForm: false,
  submittingHandler: () => {},
  completionHandler: () => {},
  resetForm: () => {},
});

export const FormContextProvider = (props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  let newForm;

  const submittingHandler = () => {
    newForm = false;
    setIsSubmitting(true);
    setIsComplete(false);
  };

  const completionHandler = () => {
    setIsSubmitting(false);
    setIsComplete(true);
  };

  const resetForm = () => {
    setIsSubmitting(false);
    setIsComplete(false);
    newForm = true;
  };

  return (
    <FormContext.Provider
      value={{
        isSubmitting,
        isComplete,
        newForm,
        submittingHandler,
        completionHandler,
        resetForm,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContext;
