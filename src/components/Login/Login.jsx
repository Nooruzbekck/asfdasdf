import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Button from "../UI/button/Button";
import { Input } from "../UI/input/Input";

export const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);

  const emailChangeHandler = (event) => {
    const emailValue = event.target.value;

    setEmail(emailValue);
    setIsFormValid(emailValue.includes("@") && password.length > 5);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);

    const passwordValue = event.target.value;
    setIsFormValid(passwordValue.length > 7 && email.includes("@"));
  };

  return (
    <StyledForm onSubmit={(e) => e.preventDefault()}>
      <Input
        type="email"
        value={email}
        onChange={emailChangeHandler}
        placeholder="введите электронную почту"
      />
      <Input
        type="password"
        value={password}
        onChange={passwordChangeHandler}
        placeholder="введите пароль"
      />
      <Button type="submit" onClick={onLogin} disabled={!isFormValid}>
        Войти
      </Button>
    </StyledForm>
  );
};

const StyledForm = styled("form")`
  width: 500px;
  height: 300px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  gap: 10px;
  position: absolute;
  top: 30%;
  button {
    width: 340px;
  }
`;
