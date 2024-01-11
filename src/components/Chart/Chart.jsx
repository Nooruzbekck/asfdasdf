import React from "react";
import "./Chart.css";
import { ChartBar } from "./ChartBar";
import styled from "styled-components";
const Chart = ({ expenses }) => {
  const maximumPrice = 2000;
  const month = [
    { label: "Январь", currentPrice: 200 },

    {
      label: "Февраль",
      currentPrice: 0,
    },
    {
      label: "Март",
      currentPrice: 0,
    },
    {
      label: "Апрель",
      currentPrice: 0,
    },
    {
      label: "Май",
      currentPrice: 0,
    },
    {
      label: "Июнь",
      currentPrice: 0,
    },
    {
      label: "Июль",
      currentPrice: 0,
    },
    {
      label: "Август",
      currentPrice: 0,
    },
    {
      label: "Сентябрь",
      currentPrice: 0,
    },
    {
      label: "Октябрь",
      currentPrice: 0,
    },
    {
      label: "Ноябрь",
      currentPrice: 0,
    },
    {
      label: "Декабрь",
      currentPrice: 0,
    },
  ];

  expenses.forEach((item) => {
    const filteredPrice = item.date.getMonth();
    month[filteredPrice].currentPrice = item.amount;
  });

  return (
    <StyledChart>
      {month.map((item) => (
        <ChartBar
          key={item.label}
          label={item.label}
          currentPrice={item.currentPrice}
          maximumPrice={maximumPrice}
        />
      ))}
    </StyledChart>
  );
};
export default Chart;

const StyledChart = styled.div`
  width: 100%;
  padding: 1rem;
  background: #f8dfff;
  border-radius: 5px;
  height: 151px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
`;
