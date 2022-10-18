import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { AppProps } from "next/app";
import MyLayout from "../components/Layout";
config.autoAddCss = false;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <MyLayout>
      <Component {...pageProps} />
    </MyLayout>
  );
};

export default MyApp;
