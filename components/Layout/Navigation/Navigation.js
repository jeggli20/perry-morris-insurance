import Link from "next/link";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const mouseHandler = function (e) {
    if (e.target.classList.contains("nav-link")) {
      const link = e.target;
      const siblings = link.closest("ul").querySelectorAll(".nav-link");

      siblings.forEach((el) => {
        if (el !== link) {
          el.style.opacity = this;
        }
      });
    }
  };

  return (
    <ul className={`${props.className || classes.nav}`}>
      <li>
        <Link
          className="nav-link"
          href="/"
          onMouseEnter={mouseHandler.bind(0.5)}
          onMouseLeave={mouseHandler.bind(1)}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className="nav-link"
          href="/about"
          onMouseEnter={mouseHandler.bind(0.5)}
          onMouseLeave={mouseHandler.bind(1)}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          className="nav-link"
          href="/#insurance"
          scroll={false}
          onMouseEnter={mouseHandler.bind(0.5)}
          onMouseLeave={mouseHandler.bind(1)}
        >
          Insurance
        </Link>
      </li>
      <li>
        <Link
          className="nav-link"
          href="/#contact"
          scroll={false}
          onMouseEnter={mouseHandler.bind(0.5)}
          onMouseLeave={mouseHandler.bind(1)}
        >
          Contact&nbsp;Us
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
