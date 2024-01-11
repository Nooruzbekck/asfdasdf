import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Expenses from "./components/expenses/Expenses";
import { NewExpense } from "./components/expenses/new-expense/NewExpense";
import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login";
const EXPENSES = [
  {
    id: "e1",
    title: "Food",
    amount: 94.12,
    date: new Date(2023, 7, 14),
  },
  {
    id: "e2",
    title: "Playstation 5",
    amount: 799.49,
    date: new Date(2022, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 3, 28),
  },
  {
    id: "e4",
    title: "asdf Insurance",
    amount: 1660.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e5",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2020, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(EXPENSES);
  const [isLogin, setIsLogin] = useState(false);

  const onAddExpense = (newExpense) => {
    setExpenses((prev) => [newExpense, ...prev]);
  };
  const onDeleteExpenseList = (newId) => {
    const filteredExpense = expenses.filter((item) => item.id !== newId);
    setExpenses(filteredExpense);
  };

  const LoginHandler = () => {
    setIsLogin(true);
    localStorage.setItem("auth", true);
  };

  const logout = () => {
    setIsLogin(false);
    localStorage.setItem("auth", false);
  };

  useEffect(() => {
    const isAuth = localStorage.getItem("auth");
    const localIsAuth = JSON.parse(isAuth);
    setIsLogin(localIsAuth);
  }, [isLogin]);

  return (
    <>
      <Header isLogin={isLogin} onLogout={logout} />
      <Wrapper>
        {isLogin ? (
          <>
            <NewExpense onAddExpense={onAddExpense} />
            <Expenses
              expenses={expenses}
              onDeleteExpenseList={onDeleteExpenseList}
            />
          </>
        ) : (
          <Login onLogin={LoginHandler} />
        )}
      </Wrapper>
    </>
  );
};
export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh -100px);
`;
