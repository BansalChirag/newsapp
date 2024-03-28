import React from "react";
import styled from "styled-components";
import Logout from "./Logout";
import ThemeToggle from "./ThemeToggle";
import UserAvatar from "./UserAvatar";
import ButtonIcon from "../ui/ButtonIcon";
import useUser from "../authentication/useUser";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.9rem;
  align-items: center;
`;

const HeaderMenu = () => {
  const { user } = useUser();
  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon>
          <UserAvatar />
        </ButtonIcon>
      </li>
      <li>
        <ThemeToggle />
      </li>
      {
        user ? 
        <li>
          <Logout />
        </li>
       : ""
      }
    </StyledHeaderMenu>
  );
};

export default HeaderMenu;
