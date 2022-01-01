import React, { useContext, useEffect } from "react";
import { Card } from "react-bootstrap";

import Header from "../Header";
import Nav from "../Nav";
import DateRange from "../DateRange";
import { AppContext } from "../../providers/context";
import styles from "./Template.module.css";
import LanguageDropdown from "../LanguageDropdown";

export interface ITemplate {
  tab: "repositories" | "developers";
}

const Template: React.FC<ITemplate> = ({ tab, children }) => {
  const { state, dispatch } = useContext(AppContext);
  
  useEffect(() => {
    const prefixes = {
      repositories: "See what the GitHub community is most excited about",
      developers: "These are the developers building the hot tools",
    };
    if (dispatch) {
      dispatch({
        type: "setSubTitlePrefix",
        newState: prefixes[tab],
      });
    }
  }, [dispatch, tab]);
  return (
    <div>
      <Header
        title="Trending"
        subTitle={`${
          state?.subTitlePrefix
        } ${state?.dateRange?.label?.toLowerCase()}`}
      />
      <div className={styles.container}>
        <Card className={styles.card}>
          <Card.Header className={styles.header}>
            <div className="d-flex justify-content-between">
              <Nav tab={tab} />
              <div className="d-flex">
                <LanguageDropdown />
                <DateRange value={state?.dateRange?.value} />
              </div>
            </div>
          </Card.Header>
          {children}
        </Card>
      </div>
    </div>
  );
};

export default Template;
