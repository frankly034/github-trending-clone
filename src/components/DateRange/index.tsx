import React, { useContext } from "react";

import CustomDropdown from "../CustomDropdown";
import { AppContext } from "../../providers/context";

interface IDateRange {
  value: string;
}

const DateRange: React.FC<IDateRange> = () => {
  const { dispatch, state } = useContext(AppContext);
  const handleClick = (value: { label: string; value: string }) => {
    if (dispatch) {
      dispatch({ type: "setDateRange", newState: value });
    }
  };
  const options = [
    {
      label: "Today",
      value: "daily",
    },
    {
      label: "This week",
      value: "weekly",
    },
    {
      label: "This month",
      value: "monthly",
    },
  ];
  return (
    <CustomDropdown
      options={options}
      label="Date range"
      value={state?.dateRange?.label}
      handleClick={(value: { label: string; value: string }) => {
        handleClick(value);
      }}
    />
  );
};

export default DateRange;
