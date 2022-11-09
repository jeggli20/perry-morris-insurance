import Image from "next/image";

import Button from "../UI/Button";
import lighthouse from "../../img/lighthouse.png";
import classes from "./IntroSection.module.css";

const IntroSection = () => {
  const buttonRedirectHandler = (event) => {
    document.location.href = `#${event.target.dataset.tag}`;
  };

  return (
    <section className={classes.container}>
      <Image src={lighthouse} alt="Lighthouse" fill priority />
      <div className={classes["section-content"]}>
        <p>Our number one priority is you!</p>
        <h2>
          <span className={classes.emphasis}>Insurance</span> to make you feel
          safe&nbsp;and secure
        </h2>
        <Button onClick={buttonRedirectHandler} tag="insurance">
          Insurance Policies
        </Button>
        <Button onClick={buttonRedirectHandler} tag="contact">
          Get In Contact
        </Button>
      </div>
    </section>
  );
};

export default IntroSection;
