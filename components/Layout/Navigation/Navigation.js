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
        <Link href="/#insurance" scroll={false}>
          Insurance
        </Link>
      </li>
      <li>
        <Link href="/#contact" scroll={false}>
          Contact&nbsp;Us
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
