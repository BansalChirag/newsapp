import React from "react";
import { useForm } from "react-hook-form";
import Input from "../ui/Input";
import Form from "../ui/Form";
import Button from "../ui/Button";
import FormRow from "../ui/FormRow";
import useUpdateUser from "./useUpdateUser";

const UpdatePasswordForm = () => {
  const { register, getValues, reset, formState, handleSubmit } = useForm();

  const { errors } = formState;
  

  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset });
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="New Password (min 8 chars)"
      error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          autoComplete="off"
          disabled={isUpdating}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs to be minimum of 8 characters",
            },
          })}
        />
      </FormRow>
      <FormRow label="Confirm Password"
      error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          autoComplete="off"
          id="passwordConfirm"
          disabled={isUpdating}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              getValues().password === value || "Passwords do not match",
          })}
        />
      </FormRow>
      <FormRow>
        <Button onClick={reset} type="reset" variation="secondary">
          Cancel
        </Button>
        <Button disabled={isUpdating}>Update Password</Button>
      </FormRow>
    </Form>
  );
};

export default UpdatePasswordForm;
