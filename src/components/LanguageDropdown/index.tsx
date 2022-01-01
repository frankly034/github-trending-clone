import React, { useState, useEffect, useContext } from "react";
import GitHubLanguagesClient from "github-languages-client";

import CustomDropdown from "../CustomDropdown";
import { AppContext } from "../../providers/context";
import {IOptions} from "../CustomDropdown";

const LanguageDropdown: React.FC = () => {
  const { dispatch, state } = useContext(AppContext);
  const [languages, setLanguages] = useState<IOptions[]>([]);
  useEffect(() => {
    const fetchLanguages = async () => {
      const allLanguages = await GitHubLanguagesClient.getAllLanguages();
      const languageOptions = allLanguages.map((language: any) => ({
        label: language?.name,
        value: language?.name,
      }));
      setLanguages([{label: "All", value: ""}, ...languageOptions]);
    };
    fetchLanguages();
  }, []);
  const handleClick = (value: { label: string; value: string }) => {
    if (dispatch) {
      dispatch({ type: "setLanguage", newState: value });
    }
  };
  
  return (
    <CustomDropdown
      options={languages}
      label="Language"
      value={state?.language?.label}
      handleClick={(value: { label: string; value: string }) => {
        handleClick(value);
      }}
    />
  );
};

export default LanguageDropdown;
