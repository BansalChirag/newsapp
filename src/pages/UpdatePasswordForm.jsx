import React, { useEffect, useState } from "react";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useForm } from "react-hook-form";
import FormRowVertical from "../ui/FormRowVertical";
import FormRow from "../ui/FormRow";
import toast from "react-hot-toast";
import useUpdateUser from "../authentication/useUpdateUser";
import SpinnerMini from "../ui/SpinnerMini";

const UpdatePasswordForm = () => {
  const {
    register,
    getValues,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { updateUser, isUpdating } = useUpdateUser();

  const onSubmit = ({password}) => {
    updateUser({ password }, { onSuccess: reset });
    toast.success("Your Password has been updated Successfully.");
  };

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 780);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 780);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {isSmallScreen ? (
        <>
          <FormRowVertical
            label="New Password"
            error={errors?.password?.message}
          >
            <Input
              type="password"
              id="New Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password needs to be minimum of 6 characters",
                },
              })}
              disabled={isUpdating}
              placeholder="••••••"
            />
          </FormRowVertical>
          <></>
          <FormRowVertical
            label="Confirm Password"
            error={errors?.passwordConfirm?.message}
          >
            <Input
              type="password"
              id="Confirm Password"
              {...register("passwordConfirm", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password needs to be minimum of 6 characters",
                },
                validate: (value) =>
                  getValues().password === value || "Passwords do not match",
              })}
              disabled={isUpdating}
              placeholder="••••••"
            />
          </FormRowVertical>
        </>
      ) : (
        <>
          <FormRow label="New Password " error={errors?.password?.message}>
            <Input
              type="password"
              id="New Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password needs to be minimum of 6 characters",
                },
              })}
              disabled={isUpdating}
              placeholder="••••••"
            />
          </FormRow>
          <></>
          <FormRow
            label="Confirm Password"
            error={errors?.passwordConfirm?.message}
          >
            <Input
              type="password"
              id="Confirm Password"
              {...register("passwordConfirm", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password needs to be minimum of 6 characters",
                },
                validate: (value) =>
                  getValues().password === value || "Passwords do not match",
              })}
              disabled={isUpdating}
              placeholder="••••••"
            />
          </FormRow>
        </>
      )}

      <div
        style={{
          display: "flex",
          gap: "2.4rem",
          marginTop: "3rem",
          justifyContent: "center",
        }}
      >
        <Button onClick={reset} variation="secondary">
          Cancel
        </Button>
        <Button disabled={isUpdating} type="submit" size="small">{!isUpdating ? "Update Password" : <SpinnerMini />}</Button>
      </div>
      <></>
    </Form>
  );
};

export default UpdatePasswordForm;
