import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, onDeleteExpenseList }) => {
  return (
    <div>
      {expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          {...item}
          onDeleteExpenseList={onDeleteExpenseList}
        />
      ))}
    </div>
  );
};

export default ExpenseList;
