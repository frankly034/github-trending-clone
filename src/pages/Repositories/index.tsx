import { ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import Template from "../../components/Template";
import RepoItem from "../../components/RepoItem";
import styles from "./Repositories.module.css";
import useRepositories from "../../hooks/useRepositories";

export interface IRepository {
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
  const { repos, loading, state } = useRepositories();
  return (
    <Template tab="repositories">
      <ListGroup variant="flush">
        {loading ? (
          <span className={styles.emptyState}>
            <FontAwesomeIcon icon={faSpinner} spin />
          </span>
        ) : repos.length ? (
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
