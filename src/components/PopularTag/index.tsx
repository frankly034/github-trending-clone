import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import styles from "./PopularTag.module.css";

const PopularTag: React.FC = () => {
  return (
    <div className={styles.fs}>
      <FontAwesomeIcon icon={faThumbsUp} className={styles.icon} />
      <span className={styles.text}>POPULAR REPO</span>
    </div>
  );
};

export default PopularTag;
