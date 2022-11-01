import React, { Component } from "react";
import Image from "next/image";
import styles from "styles/Verify-email.module.scss";
import Mailbox from "assets/authentication/Mailbox.png";

class VectorBox extends Component {
  render() {
    return (
      <div className={styles.vector}>
        <Image className={styles.vectorImg} src={Mailbox} alt="Mailbox.png" />
      </div>
    );
  }
}

export default VectorBox;
