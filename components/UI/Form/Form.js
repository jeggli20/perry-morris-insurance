import { Fragment, useContext } from "react";

import Button from "../Button";
import useInput from "../../../hooks/useInput";
import FormContext from "../../../context/form-context";
import classes from "./Form.module.css";

const isNotEmpty = (value) => value.trim() !== "";
const isTenChars = (value) => value.trim().length >= 10;
const validEmail = (value) => value.includes("@");
const fixDate = (date) => {
	const year = date.getUTCFullYear();
	const month = date.getUTCMonth() + 1;
	const day = date.getUTCDate();

	return `${month}/${day}/${year}`;
};

const Form = () => {
	const formCtx = useContext(FormContext);

	const {
		value: enteredName,
		isValid: enteredNameIsValid,
		hasError: nameHasError,
		valueChangeHandler: nameChangeHandler,
		valueBlurHandler: nameBlurHandler,
		reset: resetName,
	} = useInput(isNotEmpty);

	const {
		value: enteredEmail,
		isValid: enteredEmailIsValid,
		hasError: emailHasError,
		valueChangeHandler: emailChangeHandler,
		valueBlurHandler: emailBlurHandler,
		reset: resetEmail,
	} = useInput(validEmail);

	const {
		value: enteredDOB,
		isValid: enteredDOBIsValid,
		hasError: dobHasError,
		valueChangeHandler: dobChangeHandler,
		valueBlurHandler: dobBlurHandler,
		reset: resetDOB,
	} = useInput(isNotEmpty);

	const {
		value: enteredAddress,
		isValid: enteredAddressIsValid,
		hasError: addressHasError,
		valueChangeHandler: addressChangeHandler,
		valueBlurHandler: addressBlurHandler,
		reset: resetAddress,
	} = useInput(isNotEmpty);

	const {
		value: enteredProvider,
		isValid: enteredProviderIsValid,
		hasError: providerHasError,
		valueChangeHandler: providerChangeHandler,
		valueBlurHandler: providerBlurHandler,
		reset: resetProvider,
	} = useInput(isNotEmpty);

	const {
		value: enteredMessage,
		isValid: enteredMessageIsValid,
		hasError: messageHasError,
		valueChangeHandler: messageChangeHandler,
		valueBlurHandler: messageBlurHandler,
		reset: resetMessage,
	} = useInput(isTenChars);

	let formIsValid = false;

	if (
		enteredNameIsValid &&
		enteredEmailIsValid &&
		enteredDOBIsValid &&
		enteredAddressIsValid &&
		enteredProviderIsValid &&
		enteredMessageIsValid
	) {
		formIsValid = true;
	}

	// const newFormHandler = () => {

	// }

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
					name: enteredName,
					email: enteredEmail,
					provider: enteredProvider,
					message: enteredMessage,
					address: enteredAddress,
					dob: enteredDOB,
				}),
			}).then(() => {
				formCtx.completionHandler();

				resetName();
				resetEmail();
				resetDOB();
				resetAddress();
				resetProvider();
				resetMessage();

				// if (newForm) {
				//   formCtx.resetForm();
				// }
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
			<label htmlFor="name">Name</label>
			<input
				id="name"
				type="text"
				name="name"
				placeholder="Name"
				value={enteredName}
				onChange={nameChangeHandler}
				onBlur={nameBlurHandler}
				className={`${nameHasError ? classes.invalid : ""}`}
			/>
			{nameHasError && (
				<p className={classes.errorMessage}>Please enter a name</p>
			)}
			<label htmlFor="email">Email Address</label>
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
			{emailHasError && (
				<p className={classes.errorMessage}>Please enter a valid email</p>
			)}
			<label htmlFor="dob">Date of Birth</label>
			<input
				id="dob"
				type="date"
				name="dob"
				value={enteredDOB}
				onChange={dobChangeHandler}
				onBlur={dobBlurHandler}
				className={`${dobHasError ? classes.invalid : ""}`}
			/>
			{dobHasError && (
				<p className={classes.errorMessage}>Please enter a valid date</p>
			)}
			<label htmlFor="address">Physical Address</label>
			<input
				id="address"
				type="text"
				name="address"
				placeholder="Current address"
				value={enteredAddress}
				onChange={addressChangeHandler}
				onBlur={addressBlurHandler}
				className={`${addressHasError ? classes.invalid : ""}`}
			/>
			{addressHasError && (
				<p className={classes.errorMessage}>Please enter a valid address</p>
			)}
			<label htmlFor="provider">Who is your current provider?</label>
			<input
				id="provider"
				type="text"
				name="provider"
				placeholder="Current provider"
				value={enteredProvider}
				onChange={providerChangeHandler}
				onBlur={providerBlurHandler}
				className={`${providerHasError ? classes.invalid : ""}`}
			/>
			{providerHasError && (
				<p className={classes.errorMessage}>
					Please enter a valid provider
				</p>
			)}
			<label htmlFor="message">How can we help you?</label>
			<textarea
				id="message"
				name="message"
				placeholder="Message"
				value={enteredMessage}
				onChange={messageChangeHandler}
				onBlur={messageBlurHandler}
				className={`${messageHasError ? classes.invalid : ""}`}
			></textarea>
			{messageHasError && (
				<p className={classes.errorMessage}>
					Your message should be at least 10 characters long
				</p>
			)}
			<Button
				type="submit"
				className={classes.subBtn}
				disabled={!formIsValid}
			>
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
