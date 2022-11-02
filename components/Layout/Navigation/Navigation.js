import Link from "next/link";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <ul className={`${classes.nav} ${props.className}`}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <a href="#insurance">Insurance</a>
      </li>
      <li>
        <a href="#contact">Contact&nbsp;Us</a>
      </li>
    </ul>
  );
};

export default Navigation;
