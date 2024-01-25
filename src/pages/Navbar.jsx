import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaBusinessTime, FaHome } from "react-icons/fa";
import { MdHealthAndSafety, MdOutlineSportsBaseball, MdScience} from "react-icons/md";
import { SiDcentertainment } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
import { BiCategory } from "react-icons/bi";
import { IoBookmarkSharp } from "react-icons/io5";
import { useUser } from "../authentication/useUser";
import { SlLogin } from "react-icons/sl";
import { FaArchive } from "react-icons/fa";



const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

const Navbar = () => {
  const {user} = useUser()
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <FaHome/>
            <span>Home</span>
          </StyledNavLink>
        </li>
        {/*<li>
          <StyledNavLink to="/">
            <BiCategory/>
            <span>Categories</span>
          </StyledNavLink>
  </li>*/}
        <li>
          <StyledNavLink to="/general">
          <FaArchive/>
          <span>General</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/business">
          <FaBusinessTime/>
          <span>Business</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/technology">
          <GrTechnology/>
          <span>Technology</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/entertainment">
          <SiDcentertainment/>
          <span>Entertainment</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/sports">
          <MdOutlineSportsBaseball/>
          <span>
          Sports
          </span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/science">
          <MdScience/>
          <span>Science</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/health">
          <MdHealthAndSafety/>
          <span>Health</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/saved-articles">
          <IoBookmarkSharp/>
          <span>Saved</span>
          </StyledNavLink>
        </li>
        {
          !user && 
          <li>
            <StyledNavLink to="/login">
            <SlLogin/>
            <span>Login</span>
            </StyledNavLink>
          </li>
        }
      </NavList>
    </nav>
  );
};

export default Navbar;
