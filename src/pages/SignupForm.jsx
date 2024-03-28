import React from "react";
import useSignup from "../authentication/useSignup";
import { useForm } from "react-hook-form";
import SpinnerMini from "../ui/SpinnerMini";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import FormRowVertical from "../ui/FormRowVertical";
import FormRow from "../ui/FormRow";
import { Link } from "react-router-dom";
import { signup } from "../authentication/apiAuth";

const SignupForm = () => {
  const { signup, isSignup } = useSignup();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  const onSubmit = ({ fullName, email, password }) => {
    signup(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical label="Full Name" error={errors.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          autoComplete="off"
          disabled={isSignup}
          {...register("fullName", { required: "Full Name is required" })}
          placeholder="John Doe"
        />
      </FormRowVertical>
      <></>
      <FormRowVertical label="Email" error={errors.email?.message}>
        <Input
          type="email"
          id="email"
          autoComplete="off"
          disabled={isSignup}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
          placeholder="you@example.com"
        />
      </FormRowVertical>
      <></>
      <FormRowVertical label="Password" error={errors.password?.message}>
        <Input
          type="password"
          id="password"
          disabled={isSignup}
          autoComplete="off"
          {...register("password", { required: "Password is required " },{
            minLength: {
              value: 6,
              message: "Password needs to be minimum of 6 characters",
            },
          })}
          placeholder="••••••"
        />
      </FormRowVertical>
      <></>
      <FormRowVertical
        label="Confirm Password"
        error={errors.passwordConfirm?.message}
      >
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isSignup}
          autoComplete="off"
          {...register("passwordConfirm", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password needs to be minimum of 6 characters",
            },
            validate: (value) =>
              value === getValues().password || "Passwords do not match.",
          })}
          placeholder="••••••"
        />
      </FormRowVertical>
      <></>
      <FormRow>
        <Button
          size="medium"
          disabled={isSignup}
          variation="secondary"
          type="reset"
        >
          Cancel
        </Button>
        <Button size="medium" disabled={isSignup}>
          {!isSignup ? "Create Account" : <SpinnerMini />}
        </Button>
      </FormRow>
      <></>
    </Form>
  );
};

export default SignupForm;
