import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <div>Title</div>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <div>Amount</div>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <div>Date</div>
          <input type="date" min="2020-01-01" max="2023-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
