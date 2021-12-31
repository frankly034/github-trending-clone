import React from "react";
import styles from "./Header.module.css";

interface IHeader {
  title: string;
  subTitle: string;
}
const Header: React.FC<IHeader> = ({ title, subTitle }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>{title}</h1>
      <p>{subTitle}</p>
    </header>
  );
};

export default Header;
