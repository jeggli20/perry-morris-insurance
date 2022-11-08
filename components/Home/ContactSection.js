import Form from "../UI/Form/Form";
import classes from "./ContactSection.module.css";

const ContactSection = () => {
  // const formSubmissionHandler = (isSubmitting) => {
  //   console.log(isSubmitting);
  //   console.log("submitting");
  //   if (isSubmitting) {
  //     setFormSubmitting(true);
  //   } else {
  //     setFormSubmitting(false);
  //   }
  // };

  // const submissionCompleteHandler = (complete) => {
  //   console.log(complete);
  //   console.log("complete");
  //   if (complete) {
  //     setSubmitComplete(true);
  //   } else {
  //     setSubmitComplete(false);
  //   }
  // };

  return (
    <section className={classes.contact} id="contact">
      <div className={classes.form}>
        <h2 data-aos="fade-up">
          To get started with your package plan, we need the following:
        </h2>
        <Form
        // onSubmitForm={formSubmissionHandler}
        // onSubmitComplete={submissionCompleteHandler}
        />
      </div>
    </section>
  );
};

export default ContactSection;
