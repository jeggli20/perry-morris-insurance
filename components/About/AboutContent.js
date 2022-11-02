import Image from "next/image";

import profile from "../../img/profile.jpg";
import classes from "./AboutContent.module.css";

const AboutContent = () => {
  return (
    <div className={classes.container}>
      <div className={classes.biography}>
        <h4 data-aos="fade-up">Hello, My Name is Perry Morris</h4>
        <p data-aos="fade-up">
          I was born in California but later moved to Washington state. While
          going through school participated in band, choir, Future Farmers of
          America, Future Business Leaders of America, then soon after
          graduation from High School served my full-time church mission, served
          in Italy for two years. Served in the United States Air Force as a jet
          engine mechanic. Came back and earned my FAA A&P License. Started my
          insurance carrier in 1990 to the present.
          <br />
          <br />
          They motivate clients by collaborating to set goals, providing
          meaningful feedback, and by being a reliable source for
          accountability. Thank you.
        </p>
      </div>
      <div className={classes.profile} data-aos="fade-up">
        <Image
          className={classes["profile-img"]}
          src={profile}
          alt="Perry Morris"
          width={300}
          height={300}
        />
        <h2>Perry Morris</h2>
        <p>Licensed Insurance Agent</p>
      </div>
    </div>
  );
};

export default AboutContent;
