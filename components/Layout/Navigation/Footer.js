import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import Navigation from "./Navigation";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Navigation />
      <div className={classes.info}>
        <p>
          Copyright ©<br />
        </p>
        <div className={classes.contact}>
          <div className={classes.primary}>
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
            <div className={classes.phones}>
              <a className={classes.phone} href="tel:+13608998760">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="icon"
                  aria-hidden="true"
                />
                &nbsp; (360) 899-8760
              </a>
              <a className={classes.phone} href="tel:+18016474693">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="icon"
                  aria-hidden="true"
                />
                &nbsp; (801) 647-4693
              </a>
            </div>
          </div>
          <div className={classes.social}>
            <a
              className={classes["social-icon"]}
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="icon"
                aria-hidden="true"
              />
            </a>
            <a
              className={classes["social-icon"]}
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="icon"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
