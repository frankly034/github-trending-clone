import { useState, useEffect, useContext } from "react";
import { ListGroup } from "react-bootstrap";
import githubTrends from "github-trends-api";

import { AppContext } from "../../providers/context";
import Template from "../../components/Template";
import styles from "./Developers.module.css";
import DeveloperItem from "../../components/DeveloperItem";

interface IDeveloper {
  author: string;
  username: string;
  avatar: string;
  url: string;
  reponame: string;
  repourl: string;
  description: string;
}

const Developers = () => {
  const { state } = useContext(AppContext);
  const [developers, setDevelopers] = useState<IDeveloper[]>([]);
  useEffect(() => {
    const fetchRepositories = async () => {
      const data = await githubTrends({
        section: "developers",
        language: "javascript",
        since: state?.dateRange?.value,
      });
      setDevelopers(data);
    };

    fetchRepositories();
  }, [state?.dateRange?.value]);

  return (
    <Template tab={"developers"}>
      <ListGroup variant="flush">
        {developers.map((developer: IDeveloper, serialNumber: number) => {
          const { reponame: repoName, repourl: repoUrl, ...rest } = developer;
          return (
            <ListGroup.Item className={styles.listItem} key={repoUrl}>
              <DeveloperItem
                repoName={repoName}
                repoUrl={repoUrl}
                serialNumber={serialNumber + 1}
                {...rest}
              />
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Template>
  );
};

export default Developers;
