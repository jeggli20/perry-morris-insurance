import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import logo from "../../../img/logo.PNG";

import Navigation from "./Navigation";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.navbar}>
      <Link className={classes.logo} href="/">
        <Image
          id="logo"
          className={classes.logo}
          src={logo}
          alt="Perry Morris Logo"
          layout="fill"
          priority
        />
      </Link>
      <Navigation />
      <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noreferrer"
        id="youtube"
      >
        <FontAwesomeIcon
          icon={faYoutube}
          className={`icon ${classes.youtube}`}
          aria-hidden="true"
        />
      </a>
    </header>
  );
};

export default Header;
