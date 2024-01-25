import React, { useState } from "react";
import Input from "../ui/Input";
import { useLogin } from "./useLogin";
import Form from "../ui/Form";
import FormRowVertical from "../ui/FormRowVertical";
import Button from "../ui/Button";
import SpinnerMini from "../ui/SpinnerMini";
import { RiEyeFill } from "react-icons/ri";
import { RiEyeCloseFill } from "react-icons/ri";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }
  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
      
      
        <Input
          type={showPassword ? "text" : "password"}
          id="password"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
        
        
      </FormRowVertical>
      {
        password && 
        <span
        onClick={togglePasswordVisibility}
        style={{
          position: "absolute",
          top: "50%",
          left:"60%",
          transform: "translate(-50%,-30%)",
          cursor: "pointer",
        }}
      >
        {showPassword ? <RiEyeCloseFill /> : <RiEyeFill />}
      </span>
      }
      <FormRowVertical>
        <Button size="large" disabled={isLoading}
        >{!isLoading ? "Log in" : <SpinnerMini />}</Button>
      </FormRowVertical>
      <br />
    </Form>
  );
};

export default LoginForm;
