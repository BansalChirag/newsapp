import React from "react";
import styled from "styled-components";
import Heading from "../ui/Heading";
import Input from "../ui/Input";
import { useForm } from "react-hook-form";
import FormRowVertical from "../ui/FormRowVertical";
import toast from "react-hot-toast";
import Button from "../ui/Button";
import Form from "../ui/Form";
import useUpdateUser from "../authentication/useUpdateUser";
import FormRow from "../ui/FormRow";

const Wrapper = styled.main`
 min-height: 100vh;
 display: grid;
 grid-template-columns: 48rem;
 align-content: center;
 justify-content: center;
 gap: 3.2rem;
 background-color: var(--color-grey-50);

 @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 5rem;
 }

 @media (max-width: 350px) {
    grid-template-columns: 1fr;
    padding: 3rem;
 }
`;

const ResetPassword = () => {
 const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues
 } = useForm();
 const { updateUser, isUpdating } = useUpdateUser();

 const onSubmit = ({ password }) => {
    updateUser(
      { password },
      {
        onSuccess: () => {
          reset();
          toast.success("Your Password has been updated Successfully.");
        }
      }
    );
 };

 return (
    <Wrapper>
      <Heading as="h4">Reset your Password</Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRowVertical label="Password" error={errors.password?.message}>
          <Input
            type="password"
            id="password"
            autoComplete="off"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password needs to be minimum of 6 characters",
              },
            })}
            placeholder="••••••"
            disabled={isUpdating}
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
            disabled={isUpdating}
          />
        </FormRowVertical>
        <></>
        <FormRow>
          <Button
            size="medium"
            variation="secondary"
            type="reset"
            disabled={isUpdating}
          >
            Cancel
          </Button>
          <Button size="medium" type="submit" disabled={isUpdating}>
            Reset Password
          </Button>
        </FormRow>
        <></>
      </Form>
    </Wrapper>
 );
};

export default ResetPassword;
