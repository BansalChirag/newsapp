import React, { useState } from "react";
import Input from "../ui/Input";
import { useUser } from "./useUser";
import Form from "../ui/Form";
import FormRow from "../ui/FormRow";
import Button from "../ui/Button";
import FileInput from "../ui/FileInput";
import useUpdateUser from "./useUpdateUser";

const UpdateUserDataForm = () => {
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  const { updateUser, isUpdating } = useUpdateUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;
    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      }
    );
  }

  function handleCancel() {
    setFullName(currentFullName);
    setAvatar(null);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input value={email} disabled />
      </FormRow>
      <FormRow label="Full Name">
        <Input
          type="text"
          autoComplete="off"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label="Profile Photo">
        <FileInput
          id="avatar"
          accept="image/*"
          autoComplete="off"
          onChange={(e) => setAvatar(e.target.files[0])}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow>
        <Button
          type="reset"
          variation="secondary"
          onClick={handleCancel}
          disabled={isUpdating}
        >
          Cancel
        </Button>
        <Button disabled={isUpdating}>Update Account</Button>
      </FormRow>
    </Form>
  );
};

export default UpdateUserDataForm;
