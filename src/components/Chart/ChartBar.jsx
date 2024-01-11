import React from "react";
import styled from "styled-components";
export const ChartBar = ({ label, currentPrice, maximumPrice }) => {
  const fillHeight = (100 * currentPrice) / maximumPrice;
  return (
    <StyledGhardBar>
      <ChardBarInner>
        <ChardBarFill height={fillHeight}></ChardBarFill>
      </ChardBarInner>
      <ChartBarLabel>{label}</ChartBarLabel>
    </StyledGhardBar>
  );
};

export default ChartBar;
const StyledGhardBar = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const ChardBarInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  border: 1px solid #363636;
  background-color: #a892ee;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: flex-end;
`;
const ChardBarFill = styled.div`
  width: 100%;
  //border-radius: 0 0 12px 12px;
  transition: all 0.3 s ease-out;
  background-color: #4826b9;
  height: ${({ height }) => height}%;
`;
const ChartBarLabel = styled.p`
  font-weight: bold;
  font-size: 0.6rem;
`;

// Fragment
// Portal
