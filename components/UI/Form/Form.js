import { useState, useRef } from "react";

import Button from "../Button";
import classes from "./Form.module.css";

const isEmpty = (value) => value.trim() === "";
const isTenChars = (value) => value.trim().length >= 10;
const validEmail = (value) => value.includes("@");

const Form = () => {
  //! Placeholder validity! This validity should be updated!!
  const [formInputValid, setFormInputValid] = useState({
    name: true,
    email: true,
    provider: true,
    message: true,
    address: true,
    dob: true,
  });
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [isComplete, setIsComplete] = useState(false);
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const providerInputRef = useRef();
  const messageInputRef = useRef();
  const addressInputRef = useRef();
  const dobInputRef = useRef();

  const fixDate = (date) => {
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();

    return `${month}/${day}/${year}`;
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredProvider = providerInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDOB = fixDate(new Date(dobInputRef.current.value));

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredProviderIsValid = !isEmpty(enteredProvider);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    //! This needs to updated specifically
    const enteredDOBisValid = !isEmpty(enteredDOB);
    const enteredMessageIsValid = isTenChars(enteredMessage);
    const enteredEmailIsValid = validEmail(enteredEmail);

    setFormInputValid({
      name: enteredNameIsValid,
      email: enteredEmailIsValid,
      provider: enteredProviderIsValid,
      message: enteredMessageIsValid,
      address: enteredAddressIsValid,
      dob: enteredDOBisValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredEmailIsValid &&
      enteredProviderIsValid &&
      enteredMessageIsValid &&
      enteredAddressIsValid &&
      enteredDOBisValid;

    if (!formIsValid) {
      return;
    }

    await fetch("/api/form-submission", {
      method: "POST",
      body: JSON.stringify({
        name: enteredName,
        email: enteredEmail,
        provider: enteredProvider,
        message: enteredMessage,
        address: enteredAddress,
        dob: enteredDOB,
      }),
    });
  };

  return (
    <form
      className={classes.form}
      data-aos="fade-up"
      onSubmit={onSubmitHandler}
    >
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Name"
        ref={nameInputRef}
        className={`${!formInputValid.name ? classes.invalid : ""}`}
      />
      {!formInputValid.name && (
        <p className={classes.errorMessage}>Please enter a name</p>
      )}
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        ref={emailInputRef}
        className={`${!formInputValid.email ? classes.invalid : ""}`}
      />
      {!formInputValid.email && (
        <p className={classes.errorMessage}>Please enter a valid email</p>
      )}
      <label htmlFor="dob">Date of Birth</label>
      <input
        id="dob"
        type="date"
        name="dob"
        ref={dobInputRef}
        className={`${!formInputValid.dob ? classes.invalid : ""}`}
      />
      {!formInputValid.dob && (
        <p className={classes.errorMessage}>Please enter a valid date</p>
      )}
      <label htmlFor="address">Physical Address</label>
      <input
        id="address"
        type="text"
        name="address"
        placeholder="Current address"
        ref={addressInputRef}
        className={`${!formInputValid.address ? classes.invalid : ""}`}
      />
      {!formInputValid.address && (
        <p className={classes.errorMessage}>Please enter a valid address</p>
      )}
      <label htmlFor="provider">Who is your current provider?</label>
      <input
        id="provider"
        type="text"
        name="provider"
        placeholder="Current provider"
        ref={providerInputRef}
        className={`${!formInputValid.provider ? classes.invalid : ""}`}
      />
      {!formInputValid.provider && (
        <p className={classes.errorMessage}>Please enter a valid provider</p>
      )}
      <label htmlFor="message">How can we help you?</label>
      <textarea
        id="message"
        name="message"
        placeholder="Message"
        ref={messageInputRef}
        className={`${!formInputValid.message ? classes.invalid : ""}`}
      ></textarea>
      {!formInputValid.message && (
        <p className={classes.errorMessage}>
          Your message should be at least 10 characters long
        </p>
      )}
      <Button type="submit">Send Message</Button>
    </form>
  );
};

export default Form;
