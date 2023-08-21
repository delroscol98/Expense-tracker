import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const saveFilterYear = (event) => {
    // console.log(event.target.value);
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={saveFilterYear}>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
