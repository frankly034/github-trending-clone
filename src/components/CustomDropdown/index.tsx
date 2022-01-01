import React from "react";
import { Dropdown } from "react-bootstrap";

import styles from "./CustomDropdown.module.css";

export interface IOptions {
  label: string;
  value: string;
}

interface ICustomDropdown {
  label: string;
  value: string;
  options: IOptions[];
  handleClick: Function;
}

const CustomDropdown: React.FC<ICustomDropdown> = ({
  label,
  value,
  options,
  handleClick,
}) => {
  return (
    <Dropdown className="ms-2">
      <Dropdown.Toggle className={styles.btnDark} id="dropdown-basic" size="sm">
        {label}: <span className="fw-bold">{value}</span>
      </Dropdown.Toggle>

      <Dropdown.Menu className={styles.menu}>
        {options.map(({ label, value }) => (
          <Dropdown.Item
            key={value}
            className={styles.dropdownItem}
            onClick={() => handleClick({label, value})}
          >
            {label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CustomDropdown;
