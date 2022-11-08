import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

import profile from "../../img/profile.jpg";
import classes from "./InfoSection.module.css";

const InfoSection = () => {
  const [displayBio, setDisplayBio] = useState(false);

  const onClickHandler = () => {
    console.log("Start");
    setDisplayBio((prevState) => !prevState);
    console.log("End");
  };

  return (
    <section className={classes.container}>
      <div className={classes["content-profile"]} data-aos="fade-up">
        <Image
          src={profile}
          alt="Perry Morris"
          className={classes.profile}
          width={200}
        />
        <a onClick={onClickHandler}>
          Why Perry?
          <FontAwesomeIcon
            className={`icon ${classes["i-pointer"]} ${
              displayBio ? classes["display-bio"] : ""
            }`}
            icon={faSortDown}
          />
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
  );
};

export default InfoSection;
