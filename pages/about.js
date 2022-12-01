import { Fragment } from "react";
import Head from "next/head";
import AboutContent from "../components/About/AboutContent";

const AboutPage = () => {
  return (
    <Fragment>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Perry Morris - About</title>
      </Head>
      <AboutContent />
    </Fragment>
  );
};

export default AboutPage;
