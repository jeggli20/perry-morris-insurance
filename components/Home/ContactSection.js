import { useContext } from "react";

import Form from "../UI/Form/Form";
import FormContext from "../../context/form-context";
import classes from "./ContactSection.module.css";

const ContactSection = () => {
  const formCtx = useContext(FormContext);

  const formContent = (
    <h2 data-aos="fade-up">
      To get started with your package plan, we need the following:
    </h2>
  );

  const submittingContent = (
    <h2>Please wait patiently while we submit your form</h2>
  );

  const completeContent = <h2>Your form has been sent!</h2>;

  const errorContent = <h2>Something Went Wrong!</h2>;

  return (
    <section className={classes.contact} id="contact">
      <div className={classes.form}>
        {!formCtx.isSubmitting &&
          !formCtx.isComplete &&
          !formCtx.isError &&
          formContent}
        {formCtx.isSubmitting &&
          !formCtx.isComplete &&
          !formCtx.isError &&
          submittingContent}
        {!formCtx.isSubmitting &&
          formCtx.isComplete &&
          !formCtx.isError &&
          completeContent}
        {formCtx.isError && errorContent}
        <Form />
      </div>
    </section>
  );
};

export default ContactSection;
