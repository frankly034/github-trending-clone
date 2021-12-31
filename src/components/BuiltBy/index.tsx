import React from "react";
import styles from "./BuiltBy.module.css";

interface IBuiltBy {
  builtBy: { username: string; url: string; avatar: string }[];
}
const BuiltBy: React.FC<IBuiltBy> = ({ builtBy }) => {
  return (
    <div className={styles.fs}>
      <span className="ms-1 me-1">Built by</span>
      {builtBy.map(({ avatar, username, url }) => (
        <img
          key={url}
          className={styles.avatar}
          src={avatar || "https://www.w3schools.com/w3images/avatar2.png"}
          alt={username}
        />
      ))}
    </div>
  );
};

export default BuiltBy;
