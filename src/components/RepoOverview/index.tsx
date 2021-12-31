import React from "react";

import styles from "./RepoOverview.module.css";
import PopularTag from "../PopularTag";
import RepoContentTitle from "../RepoContentTitle";

interface IRepoOverview {
  repoName: string;
  repoUrl: string;
  description: string;
}
const RepoOverview: React.FC<IRepoOverview> = (props) => {
  const { repoName, repoUrl, description } = props;

  return (
    <div className={styles.container}>
      <PopularTag />
      <RepoContentTitle repoName={repoName} repoUrl={repoUrl} />
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default RepoOverview;
