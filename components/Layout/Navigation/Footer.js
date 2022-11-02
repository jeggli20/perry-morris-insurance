import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";

import Navigation from "./Navigation";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.info}>
        <p>
          Copyright ©<br />
        </p>
        <div className={classes.contact}>
          <a
            className={classes.email}
            href="mailto:perry@perrymorrisinsurance.com"
          >
            <FontAwesomeIcon
              icon={faEnvelopeOpen}
              className="icon"
              aria-hidden="true"
            />
            &nbsp; perry@perrymorrisinsurance.com
          </a>
          <a className={classes.phone} href="tel:+13608998760">
            <FontAwesomeIcon
              icon={faPhone}
              className="icon"
              aria-hidden="true"
            />
            &nbsp; (360) 899-8760
          </a>
        </div>
      </div>
      <Navigation className={classes.footNav} />
    </footer>
  );
};

export default Footer;
