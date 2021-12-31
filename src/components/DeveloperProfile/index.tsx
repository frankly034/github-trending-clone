import React from "react";
import styles from "./DeveloperProfile.module.css";

export interface IDeveloperProfile {
  author: string;
  username: string;
  url: string;
  avatar: string;
}
const DeveloperProfile: React.FC<IDeveloperProfile> = ({
  author,
  username,
  url,
  avatar,
}) => {
  return (
    <div className={styles.container}>
      <div className="me-3">
        <a href={url}>
          <img
            className={styles.avatar}
            src={avatar || "https://www.w3schools.com/w3images/avatar2.png"}
            alt={username}
          />
        </a>
      </div>
      <div>
        <a href={url} className={styles.author}><h2 className={styles.h2}>{author}</h2></a>
        <a href={url} className={styles.username}><p>{username}</p></a>
      </div>
    </div>
  );
};

export default DeveloperProfile;
