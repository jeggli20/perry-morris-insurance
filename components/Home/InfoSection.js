import { Fragment, useContext } from "react";
import Image from "next/image";

import ModalContext from "../../context/modal-context";
import profile from "../../img/profile.jpg";
import classes from "./InfoSection.module.css";

const InfoSection = () => {
  const modalCtx = useContext(ModalContext);

  return (
    <Fragment>
      <section className={classes.container}>
        <div className={classes.profile} data-aos="fade-up">
          <a onClick={modalCtx.showModal}>
            <Image
              src={profile}
              alt="Perry Morris"
              className={classes["profile-img"]}
              width={200}
              height={200}
            />
            <span>Why Perry?</span>
          </a>
        </div>
        <div className={classes.content} data-aos="fade-up">
          <h3>Locations</h3>
          <br />
          <h5>Areas Served</h5>
          <p>AZ, UT, ID, WA</p>
          <h5>Located In</h5>
          <p>Logan, UT</p>
        </div>
        <div className={classes.content} data-aos="fade-up">
          <h3>Working hours</h3>
          <br />
          <h5>Monday - Friday</h5>
          <p>7:00 AM - 10:00 PM</p>
          <h5>Sunday</h5>
          <p>Closed</p>
          <br />
        </div>
      </section>
    </Fragment>
  );
};

export default InfoSection;
