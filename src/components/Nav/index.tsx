import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonGroup, Button } from "react-bootstrap";

import { ROUTE_HOME, ROUTE_DEVELOPERS } from "../../constants";
import { ITemplate } from "../Template";
import styles from './Nav.module.css';

const Nav: React.FC<ITemplate> = ({ tab }) => {
  const navigate = useNavigate();
  const handleNavigation = (path: string) => {
    navigate(path);
  };
  // See what the GitHub community is most excited about this month.
  // These are the developers building the hot tools today.
  const buttons = [
    {
      label: "Repositories",
      value: "repositories",
      path: ROUTE_HOME,
    },
    {
      label: "Developers",
      value: "developers",
      path: ROUTE_DEVELOPERS,
    },
  ];
  return (
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
  );
};

export default Nav;
