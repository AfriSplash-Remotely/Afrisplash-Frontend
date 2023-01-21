import React, { Component } from "react";
import Image from "next/image";
import styles from "styles/Verify-email.module.scss";
import logo from "assets/logo.png";

class Logo extends Component {
  render() {
    return (
      <div className={styles.logo_main}>
        <Image src={logo} alt="logo.png" />
        <p className={styles.logo_text}>AfriSplashRemotely</p>
      </div>
    );
  }
}

export default Logo;
