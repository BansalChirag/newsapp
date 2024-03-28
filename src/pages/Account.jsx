import React from "react";
import UpdateUserDataForm from "./UpdateUserDataForm";
import Heading from "../ui/Heading";
import UpdatePasswordForm from "./UpdatePasswordForm";
import Row from "../ui/Row";

const Account = () => {
  return (
    <>
      <Heading as="h1">Update your account</Heading>
      <Row>
        <Heading as="h3">Update User Data</Heading>
        <UpdateUserDataForm />
      </Row>
      <Row>
        <Heading as="h3">Update Password</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
};

export default Account;
