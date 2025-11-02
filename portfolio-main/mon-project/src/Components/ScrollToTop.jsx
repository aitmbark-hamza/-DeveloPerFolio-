import React, { useState, useEffect } from "react";
import styles from "./styles/ScrollToTop.module.css";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) { // ملي كتطلع الصفحة أكثر من 300px
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`${styles.scrollToTop} ${visible ? styles.show : ""}`}
      onClick={scrollToTop}
    >
      ⬆
    </div>
  );
};

export default ScrollToTop;
