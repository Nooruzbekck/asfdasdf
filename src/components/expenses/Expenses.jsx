import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import Chart from "../Chart/Chart";

const Expenses = ({ expenses, onDeleteExpenseList }) => {
  const [selectedFilter, setSelectedFilter] = useState("2021");

  const filteredExpenses = expenses.filter((item) => {
    const year = item.date.getFullYear().toString();
    return year === selectedFilter;
  });

  const handleSelected = (event) => {
    setSelectedFilter(event.target.value);
  };

  return (
    <Card>
      <ExpenseFilter value={selectedFilter} onChange={handleSelected} />
      <Chart expenses={filteredExpenses} />
      <ExpenseList
        expenses={filteredExpenses}
        onDeleteExpenseList={onDeleteExpenseList}
      />
    </Card>
  );
};

export default Expenses;
