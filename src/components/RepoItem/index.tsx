import React from "react";

import styles from "./RepoItem.module.css";
import BuiltBy from "../BuiltBy";
import RepoTitle from "../RepoTitle";
import StarRating from '../StarRating';
import ForkCount from '../ForkCount';

interface IRepoItem {
  repo: {
    author: string;
    repoName: string;
    repoUrl: string;
    repoDesc: string;
    language: string;
    stars: number;
    forks: number;
    lastStars: number;
    builtBy: { username: string; url: string; avatar: string }[];
  };
}
const RepoItem: React.FC<IRepoItem> = (props) => {
  const {
    author,
    repoName,
    repoUrl,
    repoDesc,
    language,
    stars,
    forks,
    lastStars,
    builtBy,
  } = props.repo;

  return (
    <div className={styles.container}>
      <div className="row">
        <RepoTitle author={author} repoName={repoName} repoUrl={repoUrl} />
      </div>

      <div className="row">
        <p className={`col-9 ${styles.description}`}>{repoDesc}</p>
      </div>

      <div className={styles.stats}>
        <div className={styles.statsGroup}>
          {
            language && <span className={styles.statsCount}>{language}</span>
          }
          <span className={styles.statsCount}><StarRating rating={`${stars}`} /></span>
          <span className={styles.statsCount}><ForkCount counts={`${forks}`} /></span>
          <span className={styles.statsCount}><BuiltBy builtBy={builtBy} /></span>
        </div>
        <div>
          <StarRating rating={`${lastStars} stars today`} />
        </div>
      </div>

    </div>
  );
};

export default RepoItem;
