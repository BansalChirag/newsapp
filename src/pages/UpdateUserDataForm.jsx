import React, { useEffect, useState } from "react";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import FileInput from "../ui/FileInput";
import FormRow from "../ui/FormRow";
import FormRowVertical from "../ui/FormRowVertical";
import toast from "react-hot-toast";
import useUpdateUser from "../authentication/useUpdateUser";
import useUser from "../authentication/useUser";


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


  const handleUpdateData = (e) => {
    e.preventDefault();

    if (!fullName) return;

    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          toast.success("User account successfully updated");
          setAvatar(null);
          e.target.reset();
        },
      }
    );
  };

  function handleCancel() {
    setFullName(currentFullName);
    setAvatar(null);
  }

  

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
    <Form onSubmit={handleUpdateData}>
      {isSmallScreen ? (
        <div>
          <FormRowVertical label="Email Address">
            <Input value={email} disabled id="Email Address" />
          </FormRowVertical>
          <FormRowVertical label="Full Name">
            <Input
              type="text"
              autoComplete="off"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              id="fullName"
              disabled={isUpdating}
            />
          </FormRowVertical>
          <FormRowVertical label="Profile Photo">
            <FileInput
              id="avatar"
              accept="image/*"
              onChange={(e) => setAvatar(e.target.files[0])}
              disabled={isUpdating}
            />
          </FormRowVertical>
        </div>
      ) : (
        <div>
          <FormRow label="Email Address">
            <Input value={email} disabled id="Email Address" />
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
              type="file"
              name="avatar"
              id="Profile Photo"
              accept="image/*"
              onChange={(e) => setAvatar(e.target.files[0])}
              disabled={isUpdating}
            />
          </FormRow>
        </div>
      )}
      <></>
      <div
        style={{
          display: "flex",
          gap: "2.4rem",
          marginTop: "3rem",
          justifyContent: "center",
        }}
      >
        <Button
          type="reset"
          variation="secondary"
          onClick={handleCancel}
          disabled={isUpdating}
        >
          Cancel
        </Button>
        <Button disabled={isUpdating}>Update Account</Button>
      </div>
    </Form>
  );
};

export default UpdateUserDataForm;
