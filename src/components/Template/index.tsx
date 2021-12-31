import React from "react";
import { Card, ButtonGroup, Button } from "react-bootstrap";

import Header from "../Header";
import styles from "./Template.module.css";

const index: React.FC = (props) => {
  return (
    <div>
      <Header
        title="Trending"
        subTitle="See what the GitHub community is most excited about today."
      />
      <div className={styles.container}>
        <Card className={styles.card}>
          <Card.Header className={styles.header}>
            <ButtonGroup>
              <Button variant="primary" size="sm" className={styles.button}>
                Repositories
              </Button>
              <Button variant="secondary" size="sm" className={styles.button}>
                Developer
              </Button>
            </ButtonGroup>
          </Card.Header>
          <Card.Body className={styles.body}>
            <Card.Body>{props.children}</Card.Body>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default index;
