import Head from "next/head";
import EmailVerified from "components/EmailVerified/EmailVerified";
import Logo from "components/Logo/Logo";
import VectorBox from "components/VectorBox/VectorBox";
import styles from "styles/Verify-email.module.scss";

function App() {
  return (
    <>
      {" "}
      <Head>
        {" "}
        <title>Afrisplash</title>{" "}
        <meta name="description" content="Email verified page" />{" "}
      </Head>{" "}
      <body className={styles.body}>
        {" "}
        <div className={styles.logoHeader}>
          {" "}
          <Logo />{" "}
        </div>{" "}
        <div className={styles.borderBox}>
          {" "}
          <VectorBox /> <EmailVerified />{" "}
        </div>{" "}
      </body>{" "}
    </>
  );
}

export default App;
