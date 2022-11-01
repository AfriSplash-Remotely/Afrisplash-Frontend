import React, { Component } from "react";
import Link from "next/link";
import styles from "styles/Verify-email.module.scss";

class VerifyEmail extends Component {
  render() {
    return (
      <>
        {" "}
        <div className={styles.top_text}>
          {" "}
          <p>Verify Your Email !</p>{" "}
        </div>{" "}
        <div className={styles.bottom_text}>
          {" "}
          <p>
            {" "}
            You&apos;ve entered &quot;email&quot; as the email address for your
            account. Please verify this email address by clicking the button
            below.{" "}
          </p>{" "}
        </div>{" "}
        <div className={styles.verifyBtnHolder}>
          {" "}
          <button className={styles.verifyBtn}>
            {" "}
            <p>
              <Link href={"/auth/email-verified"}>Verify Email</Link>
            </p>{" "}
          </button>{" "}
        </div>{" "}
        <div className={styles.text_bottom}>
          {" "}
          <p> Or copy and paste this link into your browser </p>{" "}
        </div>{" "}
        <div className={styles.link_bottom}>
          <a href="https://www.afrisplash.com/verifyemail/ibrahim/gmail">
            {" "}
            https: //www.afrisplash.com/verifyemail/ibrahim/gmail
          </a>{" "}
        </div>
      </>
    );
  }
}

export default VerifyEmail;
