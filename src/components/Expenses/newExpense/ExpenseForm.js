import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const [displayForm, setDisplayForm] = useState(false);

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

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);

    setDisplayForm(false);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const showFormHandler = () => {
    setDisplayForm(true);
  };

  const hideFormHandler = () => {
    setDisplayForm(false);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      {displayForm ? (
        <div>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <div>Title</div>
              <input
                placeholder="Enter an expense"
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
                // onChange={(event) =>
                //   inputChangeHandler("title", event.target.value)
                // }
              />
            </div>
            <div className="new-expense__control">
              <div>Amount</div>
              <input
                placeholder="Enter an amount"
                type="number"
                min="0.01"
                step="0.01"
                value={enteredAmount}
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
                value={enteredDate}
                onChange={dateChangeHandler}
                // onChange={(event) => inputChangeHandler("date", event.target.value)}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="button" onClick={hideFormHandler}>
              Cancel
            </button>
            <button type="submit">Add Expense</button>
          </div>
        </div>
      ) : (
        <button onClick={showFormHandler}>Add new expense</button>
      )}
    </form>
  );
};

export default ExpenseForm;
