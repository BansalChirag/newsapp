import React from "react";
import LoginForm from "./LoginForm";
import Heading from "../ui/Heading";
import styled from "styled-components";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import FormRow from "../ui/FormRow";
import Logo from "./Logo";
import Wrapper from "../ui/Wrapper";





const Login = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Logo/>
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm />
      <FormRow>
        <Button
          onClick={() => navigate("/dashboard")}
          variation="secondary"
          size="large"
        >
          Dashboard
        </Button>
        <Button onClick={() => navigate("/sign-up")}>
          Create a new Account
        </Button>
      </FormRow>
    </Wrapper>
  );
};

export default Login;
