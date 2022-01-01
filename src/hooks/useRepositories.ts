import { useState, useContext, useEffect } from "react";
import { AppContext } from "../providers/context";
import githubTrends from "github-trends-api";

import { IRepository } from "../pages/Repositories";

const useRepositories = () => {
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
  return { state, repos }
};

export default useRepositories;
