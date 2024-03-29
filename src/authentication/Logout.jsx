import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../ui/ButtonIcon";

import React from "react";
import useLogout from "./useLogout";

const Logout = () => {
  const { logout, isLoading } = useLogout();
  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      <HiArrowRightOnRectangle />
    </ButtonIcon>
  );
};

export default Logout;
