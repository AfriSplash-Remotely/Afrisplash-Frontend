import React, { Component } from "react";
import styles from "styles/Verify-email.module.scss";

class EmailVerified extends Component {
  render() {
    return (
      <>
        {" "}
        <div className={styles.top_text}>
          {" "}
          <p>Verify Your Email !</p>{" "}
        </div>{" "}
        <div className={styles.bottom_text2}>
          {" "}
          <p>
            {" "}
            You have successfully verified your email address, you can now
            proceed to login to your profile.{" "}
          </p>{" "}
        </div>{" "}
        <div className={styles.verifyBtnHolder}>
          {" "}
          <button className={styles.verifyBtn}>
            {" "}
            <p>Go To Login</p>{" "}
          </button>{" "}
        </div>{" "}
      </>
    );
  }
}

export default EmailVerified;
