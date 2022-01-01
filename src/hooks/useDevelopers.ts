import { useState, useEffect, useContext } from "react";
import githubTrends from "github-trends-api";

import { AppContext } from "../providers/context";
import { IDeveloper } from "../pages/Developers";

const useDevelopers = () => {
  const { state } = useContext(AppContext);
  const [developers, setDevelopers] = useState<IDeveloper[]>([]);
  useEffect(() => {
    const fetchRepositories = async () => {
      const data = await githubTrends({
        section: "developers",
        language: state?.language?.value || "javascript",
        since: state?.dateRange?.value,
      });
      setDevelopers(data);
    };

    fetchRepositories();
  }, [state?.dateRange?.value, state?.language?.value]);
  return { state, developers}
}

export default useDevelopers;
