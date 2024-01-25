import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../ui/Input";
import Form from "../ui/Form";
import FormRow from "../ui/FormRow";
import Button from "../ui/Button";
import FormRowVertical from "../ui/FormRowVertical";
import { useSignup } from "./useSignup";
import { RiEyeFill } from "react-icons/ri";
import { RiEyeCloseFill } from "react-icons/ri";



const SignupForm = () => {
  const { register, formState, reset, handleSubmit,getValues } = useForm();

  const { errors } = formState;

  const { signup, isLoading } = useSignup();

  const onSubmit = ({ fullName, email, password }) => {
    signup(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
  };

  const [showPassword1, setShowPassword1] = useState(false)
  const [showPassword2, setShowPassword2] = useState(false)

  const togglePasswordVisibility1 = () => {
    setShowPassword1((prevShowPassword) => !prevShowPassword);
  };
  
  const togglePasswordVisibility2 = () => {
    setShowPassword2((prevShowPassword) => !prevShowPassword);
  };

  
  return (
    
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical label="Full Name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          autoComplete="off"
          disabled={isLoading}
          {...register("fullName", { required: "This field is required" })}
        />
      </FormRowVertical>
      <FormRowVertical label="Email Address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          autoComplete="off"
          disabled={isLoading}
          {...register("email", { required: "This field is required" ,
          
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Please provide a valid email address",
          },
        })}
          
        />
      </FormRowVertical>
      <FormRowVertical label="Password (min 8 characters)" error={errors?.password?.message}>
        <Input
          type={showPassword1 ? "text" : "password"}
          id="password"
          autoComplete="off"
          disabled={isLoading}
          {...register("password", { required: "This field is required",minLength:{
            value:8,
            message: "Password needs to be a minimum of 8 characters",
          } })}
        />
        </FormRowVertical>
        <span onClick={togglePasswordVisibility1} style={{
          position: "absolute",
          top: "52%",
          left:"60%",
          transform: "translate(-50%,-30%)",
          cursor: "pointer",
        }}>
        {showPassword1 ? <RiEyeCloseFill /> : <RiEyeFill />}
      </span>
      <FormRowVertical label="Repeat Password" error={errors?.passwordConfirm?.message}>
        <Input
          type={showPassword2 ? "text" : "password"}
          autoComplete="off"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value)=>
            value===getValues().password || "Passwords do not match"
          })}
        />
        </FormRowVertical>
        
        <span onClick={togglePasswordVisibility2} style={{
          position: "absolute",
          top: "62.8%",
          left:"60%",
          transform: "translate(-50%,-10%)",
          cursor: "pointer",
        }}>
          {showPassword2 ? <RiEyeCloseFill /> : <RiEyeFill />}
        </span>
      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          disabled={isLoading}
          onClick={reset}
          size="large"
        >
          Cancel
        </Button>
        <Button size="large" disabled={isLoading}>Sign up</Button>
      </FormRow>
    </Form>
  );
};

export default SignupForm;
