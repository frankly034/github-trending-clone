import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCode } from "@fortawesome/free-regular-svg-icons";
import styles from "./RepoContentTitle.module.css";

interface IRepoContentTitle {
  repoName: string;
  repoUrl: string;
}
const RepoContentTitle: React.FC<IRepoContentTitle> = ({ repoName, repoUrl }) => {
  return (
    <div>
      <h2 className={styles.h2}>
        <a href={repoUrl} className={styles.link}>
          <FontAwesomeIcon icon={faFileCode} className="me-2 text-secondary"/>
          <span className="ms-1">{repoName}</span>
        </a>
      </h2>
    </div>
  );
};

export default RepoContentTitle;
