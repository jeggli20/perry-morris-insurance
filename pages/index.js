import Head from "next/head";
import Script from "next/script";

import IntroSection from "../components/Home/IntroSection";
import InsuranceSection from "../components/Home/InsuranceSection";
import InfoSection from "../components/Home/InfoSection";
import ContactSection from "../components/Home/ContactSection";
import { FormContextProvider } from "../context/form-context";

const HomePage = (props) => {
  return (
    <FormContextProvider>
      <Script
        src="https://unpkg.com/aos@next/dist/aos.js"
        onLoad={() => {
          AOS.init({ offset: 200, duration: 1000 });
        }}
      />
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Perry Morris</title>
      </Head>
      <IntroSection />
      <InsuranceSection onShowModal={props.onShowModal} />
      <InfoSection />
      <ContactSection />
    </FormContextProvider>
  );
};

export default HomePage;
