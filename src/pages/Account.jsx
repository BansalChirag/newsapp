import React from "react";
import UpdatePasswordForm from "../authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../authentication/UpdateUserDataForm";
import Row from "../ui/Row";
import Heading from "../ui/Heading";

const Account = () => {
  return (
    <>
      <Heading as="h1">Update Your account</Heading>
      <Row>
        <Heading as="h3">Update user data</Heading>
        <UpdateUserDataForm />
      </Row>
      <Row>
        <Heading as="h3">Update password</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
};

export default Account;
