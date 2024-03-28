import React from "react";
import { Link, NavLink } from "react-router-dom";
import useLogin from "../authentication/useLogin";
import { useForm } from "react-hook-form";
import SpinnerMini from "../ui/SpinnerMini";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import FormRow from "../ui/FormRow";
import FormRowVertical from "../ui/FormRowVertical";

const LoginForm = () => {
  const { login, isLogin } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    login(
      { email, password },
      {
        onSettled: ()=>reset()
      }
    );
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical label="Email Address" error={errors.email?.message}>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
          autoComplete="off"
          disabled={isLogin}
          placeholder="you@example.com"
        />
      </FormRowVertical>
      <></>
      <FormRowVertical label="Password" error={errors.password?.message}>
        <Input
          id="password"
          type="password"
          {...register("password", { required: "Password is required" })}
          autoComplete="off"
          disabled={isLogin}
          placeholder="••••••"
        />
      </FormRowVertical>
      <></>
      <FormRowVertical>
        <Button size="medium" type="submit" disabled={isLogin}>
          {!isLogin ? "Sign in" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
      <FormRowVertical>
        <NavLink to="/forgot-password" style={{ textAlign: "right" }}>
          Forgot Password?
        </NavLink>
      </FormRowVertical>
    </Form>
  );
};

export default LoginForm;
