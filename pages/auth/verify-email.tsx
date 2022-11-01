import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Head from "next/head";
import Logo from "components/Logo/Logo";
import VectorBox from "components/VectorBox/VectorBox";
import VerifyEmail from "components/VerifyEmail/VerifyEmail";
import styles from "styles/Verify-email.module.scss";

function App() {
  return (
    <>
      {" "}
      <Head>
        {" "}
        <title>Afrisplash</title>{" "}
        <meta name="description" content="Verify email page" />{" "}
      </Head>{" "}
      <body className={styles.body}>
        {" "}
        <div className={styles.logoHeader}>
          {" "}
          <Logo />{" "}
        </div>{" "}
        <div className={styles.borderBox}>
          {" "}
          <div className={styles.backBtn}>
            {" "}
            <ArrowLeftIcon className={styles.arrowIcon} />{" "}
          </div>{" "}
          <VectorBox /> <VerifyEmail />{" "}
        </div>{" "}
      </body>{" "}
    </>
  );
}

export default App;
