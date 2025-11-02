import React from "react";
import styles from "./styles/spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className={styles.name}>&lt;Ait Mbark Hamza/&gt;</p>
    </div>
  );
};

export default Spinner;
