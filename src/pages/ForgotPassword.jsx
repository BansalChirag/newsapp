import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import FormRow from "../ui/FormRow";
import FormRowVertical from "../ui/FormRowVertical";
import { useForm } from "react-hook-form";
import Heading from "../ui/Heading";
import useFrogtPassword from "../authentication/useForgotPassword";
import Logo from "./Logo";
import Wrapper from "../ui/Wrapper";


const ForgotPassword = () => {  

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const {resetPassword,isLoading} = useFrogtPassword();

  const onSubmit = ({ email }) => {
    resetPassword({email},{
      onSettled:()=>reset()
    })  
  };
  return (
    <Wrapper>
      <Logo/>
      <Heading as="h1">Reset Your Password</Heading>
      <p>Type in your email and we'll send you a link to reset your password</p>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRowVertical label="Email" error={errors?.email?.message}>
          <Input
            type="text"
            name=""
            id="Email"
            {...register("email", {
              required: "Email Adress is required.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email address",
              },
            })}
            autoComplete="off"
            placeholder="you@example.com"
            disabled={isLoading}
          />
        </FormRowVertical>
        <></>

        <FormRowVertical>
          <Button disabled={isLoading}>Send reset Email</Button>
        </FormRowVertical>
        <div style={{textAlign:"center",marginTop:"10px",fontSize:"1.6rem"}}>
          <span >Already have an account? </span>
          <Link to="/sign-in" style={{textDecoration:"underline"}}>Sign in</Link>
        </div>
        <></>
      </Form>
    </Wrapper>
  );
};

export default ForgotPassword;
