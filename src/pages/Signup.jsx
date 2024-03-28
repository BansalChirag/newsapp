import React from "react";
import SignupForm from "./SignupForm";
import Heading from "../ui/Heading";
import styled from "styled-components";
import Button from "../ui/Button";
import FormRow from "../ui/FormRow";
import { useNavigate } from "react-router-dom";
import Wrapper from "../ui/Wrapper";


const Signup = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Heading as="h1">Create a new account</Heading>
      <SignupForm />
      <FormRow>
        <Button
          onClick={() => navigate("/dashboard")}
          variation="secondary"
          size="large"
        >
          Dashboard
        </Button>
        <Button size="medium" onClick={() => navigate("/sign-in")}>Already a user</Button>
      </FormRow>
    </Wrapper>
  );
};

export default Signup;
