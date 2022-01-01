import React from "react";

import styles from "./DeveloperItem.module.css";
import DeveloperProfile from "../DeveloperProfile";
import RepoOverview from "../RepoOverview";
import { Button } from "react-bootstrap";

interface IDeveloperItem {
  author: string;
  username: string;
  avatar: string;
  url: string;
  repoName: string;
  repoUrl: string;
  description: string;
  serialNumber: number;
}

const DeveloperItem: React.FC<IDeveloperItem> = (props) => {
  const {
    author,
    username,
    avatar,
    url,
    repoName,
    repoUrl,
    description,
    serialNumber,
  } = props;
  return (
    <div className={`row ${styles.container}`}>
      <div className="col-md-5">
        <div className="d-flex">
          <span className={styles.serialNumber}>{serialNumber}</span>
          <DeveloperProfile
            author={author}
            username={username}
            url={url}
            avatar={avatar}
          />
        </div>
      </div>
      <div className="col-md-4 me-auto">
        <RepoOverview repoName={repoName} repoUrl={repoUrl} description={description} />
      </div>
      <div className="col-md-auto">
        <Button className={styles.button} variant={"secondary"} size="sm">Follow</Button>
      </div>
    </div>
  );
};

export default DeveloperItem;
