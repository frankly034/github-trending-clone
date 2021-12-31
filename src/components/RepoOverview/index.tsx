import React from "react";

import styles from "./RepoOverview.module.css";
import PopularTag from "../PopularTag";
import RepoTitle from "../RepoTitle";

interface IRepoOverview {
  author: string;
  repoName: string;
  repoUrl: string;
  description: string;
}
const RepoOverview: React.FC<IRepoOverview> = (props) => {
  const { author, repoName, repoUrl, description } = props;

  return (
    <div className={styles.container}>
      <PopularTag />
      <RepoTitle author={author} repoName={repoName} repoUrl={repoUrl} isContent />
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default RepoOverview;
