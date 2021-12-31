import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCode } from "@fortawesome/free-regular-svg-icons";
import styles from "./RepoTitle.module.css";

interface IRepoTitle {
  author: string;
  repoName: string;
  repoUrl: string;
  isContent?: boolean;
}
const RepoTitle: React.FC<IRepoTitle> = ({ author, repoName, repoUrl, isContent }) => {
  return (
    <div>
      <h2>
        <a href={repoUrl} className={isContent ? styles.linkSm : styles.link}>
          <FontAwesomeIcon icon={faFileCode} className="me-2 text-secondary"/>
          <span className="ms-1">{author}</span> /
          <span className="ms-1 fw-bold">{repoName}</span>
        </a>
      </h2>
    </div>
  );
};

export default RepoTitle;
