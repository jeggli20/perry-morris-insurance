import { ModalContextProvider } from "../context/modal-context";
import Layout from "../components/Layout/Layout";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <ModalContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ModalContextProvider>
  );
}

export default MyApp;
