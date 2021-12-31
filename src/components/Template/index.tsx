import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, ButtonGroup, Button } from "react-bootstrap";

import Header from "../Header";
import styles from "./Template.module.css";
import { ROUTE_HOME, ROUTE_DEVELOPERS } from "../../constants";

interface ITemplate {
  tab: string;
}

const Template: React.FC<ITemplate> = ({ tab, children }) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const buttons = [
    {
      label: "Repositories",
      value: "repositories",
      path: ROUTE_HOME,
    },
    {
      label: "Developer",
      value: "developer",
      path: ROUTE_DEVELOPERS,
    },
  ];

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
              {buttons.map(({ label, value, path }) => (
                <Button
                  key={value}
                  variant={tab === value ? "primary" : "secondary"}
                  size="sm"
                  className={styles.button}
                  onClick={() => handleNavigation(path)}
                >
                  {label}
                </Button>
              ))}
            </ButtonGroup>
          </Card.Header>
          {children}
        </Card>
      </div>
    </div>
  );
};

export default Template;
