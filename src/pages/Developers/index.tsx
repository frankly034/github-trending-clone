import { ListGroup } from "react-bootstrap";

import Template from "../../components/Template";
import styles from "./Developers.module.css";
import DeveloperItem from "../../components/DeveloperItem";
import useDevelopers from "../../hooks/useDevelopers";

export interface IDeveloper {
  author: string;
  username: string;
  avatar: string;
  url: string;
  reponame: string;
  repourl: string;
  description: string;
}

const Developers = () => {
  const { state, developers } = useDevelopers();

  return (
    <Template tab={"developers"}>
      <ListGroup variant="flush">
        {developers.length
        ? developers.map((developer: IDeveloper, serialNumber: number) => {
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
        })
        : <span className={styles.emptyState}>
        {`It looks like we don’t have any trending developers for ${state?.language?.label}`}
      </span>
      }
      </ListGroup>
    </Template>
  );
};

export default Developers;
