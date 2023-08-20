import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={`${styles.footer} mt-24`}>
        &copy; 大丸白衣 All rights reserved.
      </footer>
    </>
  );
};
export default Footer;
