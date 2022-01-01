import { useState, useEffect, useContext } from "react";
import { ListGroup } from "react-bootstrap";
import githubTrends from "github-trends-api";

import Template from "../../components/Template";
import RepoItem from "../../components/RepoItem";
import { AppContext } from "../../providers/context";
import styles from "./Repositories.module.css";

interface IRepository {
  author: string;
  reponame: string;
  repourl: string;
  repodesc: string;
  language: string;
  stars: number;
  forks: number;
  laststars: number;
  builtby: {
    username: string;
    url: string;
    avatar: string;
  }[];
}

const Repositories = () => {
  const { state } = useContext(AppContext);
  const [repos, setRepos] = useState<IRepository[]>([]);
  useEffect(() => {
    const fetchRepositories = async () => {
      const data = await githubTrends({
        since: state?.dateRange?.value,
        language: state?.language?.value,
      });
      setRepos(data);
    };

    fetchRepositories();
  }, [state?.dateRange?.value, state?.language?.value]);

  return (
    <Template tab="repositories">
      <ListGroup variant="flush">
        {repos.length ? (
          repos.map((repo: IRepository) => {
            const {
              reponame: repoName,
              repourl: repoUrl,
              repodesc: repoDesc,
              laststars: lastStars,
              builtby: builtBy,
              ...rest
            } = repo;

            return (
              <ListGroup.Item className={styles.listItem} key={repoUrl}>
                <RepoItem
                  repo={{
                    repoName,
                    repoUrl,
                    repoDesc,
                    lastStars,
                    builtBy,
                    ...rest,
                  }}
                />
              </ListGroup.Item>
            );
          })
        ) : (
          <span className={styles.emptyState}>
            {`It looks like we don’t have any trending repositories for ${state?.language?.label}`}
          </span>
        )}
      </ListGroup>
    </Template>
  );
};

export default Repositories;
