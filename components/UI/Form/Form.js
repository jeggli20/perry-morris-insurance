import { Fragment, useContext, useState } from "react";

import Button from "../Button";
import useInput from "../../../hooks/useInput";
import FormContext from "../../../context/form-context";
import classes from "./Form.module.css";

let msgError;

const stateOptions = [
  "AK",
  "AL",
  "AR",
  "AZ",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "IA",
  "ID",
  "IL",
  "IN",
  "KS",
  "KY",
  "LA",
  "MA",
  "MD",
  "ME",
  "MI",
  "MN",
  "MO",
  "MS",
  "MT",
  "NC",
  "ND",
  "NE",
  "NH",
  "NJ",
  "NM",
  "NV",
  "NY",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VA",
  "VT",
  "WA",
  "WI",
  "WV",
  "WY",
];

const policyOptions = [
  "Individual",
  "Family",
  "Retired",
  "Small Business",
  "Property and Damage",
];

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

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Form = () => {
  const formCtx = useContext(FormContext);

  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isString);

  const {
    value: enteredMiddleName,
    valueChangeHandler: middleNameChangeHandler,
    valueBlurHandler: middleNameBlurHandler,
    reset: resetMiddleName,
  } = useInput(isString);

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isString);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(validEmail);

  const {
    value: enteredAddressStreet1,
    isValid: enteredAddressStreet1IsValid,
    hasError: addressStreet1HasError,
    valueChangeHandler: addressStreet1ChangeHandler,
    valueBlurHandler: addressStreet1BlurHandler,
    reset: resetAddressStreet1,
  } = useInput(isNotEmpty);

  const {
    value: enteredAddressStreet2,
    valueChangeHandler: addressStreet2ChangeHandler,
    valueBlurHandler: addressStreet2BlurHandler,
    reset: resetAddressStreet2,
  } = useInput(isNotEmpty);

  const {
    value: enteredAddressCity,
    isValid: enteredAddressCityIsValid,
    hasError: addressCityHasError,
    valueChangeHandler: addressCityChangeHandler,
    valueBlurHandler: addressCityBlurHandler,
    reset: resetAddressCity,
  } = useInput(isString);

  const {
    value: enteredAddressState,
    isValid: enteredAddressStateIsValid,
    hasError: addressStateHasError,
    valueChangeHandler: addressStateChangeHandler,
    reset: resetAddressState,
  } = useInput(() => {
    return true;
  });

  const {
    value: enteredAddressPostal,
    isValid: enteredAddressPostalIsValid,
    hasError: addressPostalHasError,
    valueChangeHandler: addressPostalChangeHandler,
    valueBlurHandler: addressPostalBlurHandler,
    reset: resetAddressPostal,
  } = useInput(validPostal);

  const {
    value: enteredDOBMonth,
    isValid: enteredDOBMonthIsValid,
    hasError: dobMonthHasError,
    valueChangeHandler: dobMonthChangeHandler,
    valueBlurHandler: dobMonthBlurHandler,
    reset: resetDOBMonth,
  } = useInput(isNotEmpty);

  const {
    value: enteredDOBDay,
    isValid: enteredDOBDayIsValid,
    hasError: dobDayHasError,
    valueChangeHandler: dobDayChangeHandler,
    valueBlurHandler: dobDayBlurHandler,
    reset: resetDOBDay,
  } = useInput(isNotEmpty);

  const {
    value: enteredDOBYear,
    isValid: enteredDOBYearIsValid,
    hasError: dobYearHasError,
    valueChangeHandler: dobYearChangeHandler,
    valueBlurHandler: dobYearBlurHandler,
    reset: resetDOBYear,
  } = useInput(isNotEmpty);

  const {
    value: enteredProvider,
    isValid: enteredProviderIsValid,
    hasError: providerHasError,
    valueChangeHandler: providerChangeHandler,
    valueBlurHandler: providerBlurHandler,
    reset: resetProvider,
  } = useInput(isString);

  const {
    value: enteredPolicy,
    isValid: enteredPolicyIsValid,
    hasError: policyHasError,
    valueChangeHandler: policyChangeHandler,
    reset: resetPolicy,
  } = useInput(() => {
    return true;
  });

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    valueBlurHandler: messageBlurHandler,
    reset: resetMessage,
  } = useInput(msgLength);

  let formIsValid = false;

  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid &&
    enteredDOBMonthIsValid &&
    enteredDOBDayIsValid &&
    enteredDOBYearIsValid &&
    enteredAddressStreet1IsValid &&
    enteredAddressCityIsValid &&
    enteredAddressStateIsValid &&
    enteredAddressPostalIsValid &&
    enteredProviderIsValid &&
    enteredPolicyIsValid &&
    enteredMessageIsValid
  ) {
    formIsValid = true;
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    formCtx.submittingHandler();

    try {
      fetch("/api/form-submission", {
        method: "POST",
        body: JSON.stringify({
          name: `${enteredFirstName} ${
            isNotEmpty(enteredMiddleName) ? enteredMiddleName : ""
          } ${enteredLastName}`,
          email: enteredEmail,
          address: `${enteredAddressStreet1} ${
            isNotEmpty(enteredAddressStreet2) ? enteredAddressStreet2 : ""
          } ${enteredAddressCity}, ${
            enteredAddressState === "" ? "AK" : enteredAddressState
          }, ${enteredAddressPostal}`,
          provider: enteredProvider,
          message: enteredMessage,
          dob: `${enteredDOBMonth}/${enteredDOBDay}/${enteredDOBYear}`,
          policy: enteredPolicy === "" ? "Individual" : enteredPolicy,
        }),
      }).then(() => {
        formCtx.completionHandler();

        resetFirstName();
        resetMiddleName();
        resetLastName();
        resetEmail();
        resetDOBMonth();
        resetDOBDay();
        resetDOBYear();
        resetAddressStreet1();
        resetAddressStreet2();
        resetAddressCity();
        resetAddressState();
        resetAddressPostal();
        resetProvider();
        resetPolicy();
        resetMessage();
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const formContent = (
    <form
      className={classes.form}
      data-aos="fade-up"
      onSubmit={onSubmitHandler}
    >
      <div className={classes["form-group"]}>
        <h3 className={classes["form-header"]}>Name</h3>
        <div className={classes["form-row"]}>
          <div className={classes["form-item"]}>
            <input
              id="name-first"
              type="text"
              name="name-first"
              placeholder="John"
              value={capitalize(enteredFirstName)}
              onChange={firstNameChangeHandler}
              onBlur={firstNameBlurHandler}
              className={`${firstNameHasError ? classes.invalid : ""}`}
            />
            <label htmlFor="name-first">First Name</label>
          </div>
          <div className={classes["form-item"]}>
            {" "}
            <input
              id="name-middle"
              type="text"
              name="name-middle"
              placeholder="(optional)"
              value={capitalize(enteredMiddleName)}
              onChange={middleNameChangeHandler}
              onBlur={middleNameBlurHandler}
            />
            <label htmlFor="name-middle">Middle Initial</label>
          </div>
          <div className={classes["form-item"]}>
            <input
              id="name-last"
              type="text"
              name="name-last"
              placeholder="Smith"
              value={capitalize(enteredLastName)}
              onChange={lastNameChangeHandler}
              onBlur={lastNameBlurHandler}
              className={`${lastNameHasError ? classes.invalid : ""}`}
            />
            <label htmlFor="name-last">Last Name</label>
          </div>
        </div>
        {(firstNameHasError || lastNameHasError) && (
          <p className={classes.errorMessage}>Please enter a valid name</p>
        )}
      </div>
      <div className={classes["form-row"]}>
        <div className={classes["form-group"]}>
          <h3 className={classes["form-header"]}>Email</h3>
          <div className={classes["form-item"]}>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              className={`${emailHasError ? classes.invalid : ""}`}
            />
            <label htmlFor="email">Email Address</label>
            {emailHasError && (
              <p className={classes.errorMessage}>Please enter a valid email</p>
            )}
          </div>
        </div>
        <div className={classes["form-group"]}>
          <h3 className={classes["form-header"]}>Date of Birth</h3>
          <div className={classes["form-row"]}>
            <div className={classes["form-item"]}>
              <input
                id="dob-month"
                type="number"
                min="1"
                max="12"
                name="dob-month"
                placeholder="1"
                value={enteredDOBMonth}
                onChange={dobMonthChangeHandler}
                onBlur={dobMonthBlurHandler}
                className={`${dobMonthHasError ? classes.invalid : ""}`}
              />
              <label htmlFor="dob-month">Month</label>
            </div>
            <span>/</span>
            <div className={classes["form-item"]}>
              <input
                id="dob-day"
                type="number"
                min="1"
                max="31"
                name="dob-day"
                placeholder="1"
                value={enteredDOBDay}
                onChange={dobDayChangeHandler}
                onBlur={dobDayBlurHandler}
                className={`${dobDayHasError ? classes.invalid : ""}`}
              />
              <label htmlFor="dob-day">Day</label>
            </div>
            <span>/</span>
            <div className={classes["form-item"]}>
              <input
                id="dob-year"
                type="number"
                min="1900"
                max="2020"
                name="dob-year"
                placeholder="2010"
                value={enteredDOBYear}
                onChange={dobYearChangeHandler}
                onBlur={dobYearBlurHandler}
                className={`${dobYearHasError ? classes.invalid : ""}`}
              />
              <label htmlFor="dob-year">Year</label>
            </div>
          </div>
          {(dobMonthHasError || dobDayHasError || dobYearHasError) && (
            <p className={classes.errorMessage}>Please enter a valid date</p>
          )}
        </div>
      </div>
      <div className={classes["form-group"]}>
        <h3 className={classes["form-header"]}>Address</h3>
        <div className={classes["form-row"]}>
          <div
            className={`${classes["form-item"]} ${classes["form-item-stretch"]}`}
          >
            <input
              id="address-street1"
              type="text"
              name="address-street1"
              placeholder="123 W 123 S"
              value={enteredAddressStreet1}
              onChange={addressStreet1ChangeHandler}
              onBlur={addressStreet1BlurHandler}
              className={`${addressStreet1HasError ? classes.invalid : ""}`}
            />
            <label htmlFor="address-street1">Street Address</label>
            {addressStreet1HasError && (
              <p className={classes.errorMessage}>
                Please enter a valid street address
              </p>
            )}
          </div>
        </div>
        <div className={classes["form-row"]}>
          <div
            className={`${classes["form-item"]} ${classes["form-item-stretch"]}`}
          >
            <input
              id="address-street2"
              type="text"
              name="address-street2"
              placeholder="(optional)"
              value={enteredAddressStreet2}
              onChange={addressStreet2ChangeHandler}
              onBlur={addressStreet2BlurHandler}
            />
            <label htmlFor="address-street2">Street Address Line 2</label>
          </div>
        </div>
        <div className={classes["form-row"]}>
          <div className={classes["form-item"]}>
            <input
              id="address-city"
              type="text"
              name="address-city"
              placeholder="Logan"
              value={capitalize(enteredAddressCity)}
              onChange={addressCityChangeHandler}
              onBlur={addressCityBlurHandler}
              className={`${addressCityHasError ? classes.invalid : ""}`}
            />
            <label htmlFor="address-city">City</label>
          </div>
          <div className={classes["form-item"]}>
            <select
              value={enteredAddressState}
              onChange={addressStateChangeHandler}
            >
              {stateOptions.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
            <label htmlFor="address-state">State</label>
          </div>
          <div className={classes["form-item"]}>
            <input
              id="address-postal"
              type="text"
              maxLength="5"
              name="address-postal"
              placeholder="84321"
              value={enteredAddressPostal}
              onChange={addressPostalChangeHandler}
              onBlur={addressPostalBlurHandler}
              className={`${addressPostalHasError ? classes.invalid : ""}`}
            />
            <label htmlFor="address-postal">Postal Code</label>
          </div>
        </div>
        {(addressCityHasError && (
          <p className={classes.errorMessage}>Please enter a valid city</p>
        )) ||
          (addressStateHasError && (
            <p className={classes.errorMessage}>Please enter a valid state</p>
          )) ||
          (addressPostalHasError && (
            <p className={classes.errorMessage}>
              Please enter a valid postal code
            </p>
          ))}
      </div>
      <div className={classes["form-row"]}>
        <div className={classes["form-group"]}>
          <h3 className={classes["form-header"]}>Provider</h3>
          <div className={classes["form-item"]}>
            <input
              id="provider"
              type="text"
              name="provider"
              placeholder="Insurance provider"
              value={enteredProvider}
              onChange={providerChangeHandler}
              onBlur={providerBlurHandler}
              className={`${providerHasError ? classes.invalid : ""}`}
            />
            <label htmlFor="provider">Current Provider</label>
          </div>
          {providerHasError && (
            <p className={classes.errorMessage}>
              Please enter a valid provider
            </p>
          )}
        </div>
        <div className={classes["form-group"]}>
          <h3 className={classes["form-header"]}>Policy of Interest</h3>
          <div className={classes["form-item"]}>
            <select value={enteredPolicy} onChange={policyChangeHandler}>
              {policyOptions.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
            <label htmlFor="policy">Which of our policies interests you?</label>
          </div>
          {policyHasError && (
            <p className={classes.errorMessage}>Please enter a valid policy</p>
          )}
        </div>
      </div>
      <div className={classes["form-group"]}>
        <h3 className={classes["form-header"]}>Message</h3>
        <div className={classes["form-row"]}>
          <div
            className={`${classes["form-item"]} ${classes["form-item-stretch"]}`}
          >
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              value={enteredMessage}
              onChange={messageChangeHandler}
              onBlur={messageBlurHandler}
              className={`${messageHasError ? classes.invalid : ""}`}
            ></textarea>
            <div className={classes["form-row"]}>
              <label htmlFor="message">
                Please enter in a brief message (At least 10 characters)
              </label>
              <div className={classes.counter}>
                {enteredMessage.trim().length}/250
              </div>
            </div>

            {messageHasError && (
              <p className={classes.errorMessage}>{msgError}</p>
            )}
          </div>
        </div>
      </div>
      <Button type="submit" className={classes.subBtn} disabled={!formIsValid}>
        Send Message
      </Button>
    </form>
  );

  const sendingContent = (
    <div className={classes.loader}>
      <div className={`${classes.circle} ${classes["ball-1"]}`}></div>
      <div className={`${classes.circle} ${classes["ball-2"]}`}></div>
      <div className={`${classes.circle} ${classes["ball-3"]}`}></div>
    </div>
  );

  const sentContent = (
    <Button type="button" onClick={formCtx.resetForm}>
      Submit Another Form?
    </Button>
  );

  return (
    <Fragment>
      {!formCtx.isSubmitting && !formCtx.isComplete && formContent}
      {formCtx.isSubmitting && !formCtx.isComplete && sendingContent}
      {!formCtx.isSubmitting && formCtx.isComplete && sentContent}
    </Fragment>
  );
};

export default Form;
