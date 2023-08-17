import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredTitle(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value,
    //   };
    // });
  };

  const amountChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredAmount(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value
    // });

    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredAmount: event.target.value,
    //   };
    // });
  };

  const dateChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });

    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredDate: event.target.value,
    //   };
    // });
  };

  //   const inputChangeHandler = (identifier, value) => {
  //     if (identifier === "title") setEnteredTitle(value);
  //     if (identifier === "amount") setEnteredAmount(value);
  //     if (identifier === "date") setEnteredDate(value);
  //   };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <div>Title</div>
          <input
            type="text"
            onChange={titleChangeHandler}
            // onChange={(event) =>
            //   inputChangeHandler("title", event.target.value)
            // }
          />
        </div>
        <div className="new-expense__control">
          <div>Amount</div>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            // onChange={(event) =>
            //   inputChangeHandler("amount", event.target.value)
            // }
          />
        </div>
        <div className="new-expense__control">
          <div>Date</div>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            // onChange={(event) => inputChangeHandler("date", event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
