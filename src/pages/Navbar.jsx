import React from 'react';
import { NavLink} from 'react-router-dom';
import { FaHome, FaArchive, FaBusinessTime } from "react-icons/fa";
import { MdHealthAndSafety, MdOutlineSportsBaseball, MdScience } from "react-icons/md";
import { SiDcentertainment } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
import { IoBookmarkSharp } from "react-icons/io5";
import { SlLogin } from "react-icons/sl";
import styled from 'styled-components';
import CustomNavLink from './CustomNavLink';
import useUser from '../authentication/useUser';

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    gap: 1.2rem;
    align-items: center;
    color: var(--color-grey-600);;
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all .3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited{
    color: var(--color-grey-800);
    background-color: var(--color-grey-200);
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

export const navItems = [
  { to: "/dashboard", icon: <FaHome />, text: "Home" },
  { to: "general", icon: <FaArchive />, text: "General", category: "general" },
  { to: "business", icon: <FaBusinessTime />, text: "Business", category: "business" },
  { to: "technology", icon: <GrTechnology />, text: "Technology", category: "technology" },
  { to: "entertainment", icon: <SiDcentertainment />, text: "Entertainment", category: "entertainment" },
  { to: "sports", icon: <MdOutlineSportsBaseball />, text: "Sports", category: "sports" },
  { to: "science", icon: <MdScience />, text: "Science", category: "science" },
  { to: "health", icon: <MdHealthAndSafety />, text: "Health", category: "health" },
  { to: "/saved-articles", icon: <IoBookmarkSharp />, text: "Saved Articles" },
  
];

const Navbar = () => {
  const {user} = useUser()

  return (
    <nav>
    <NavList>
      {navItems.map((item, index) => (
        <li key={index}>
          {item.to.startsWith('/') ? (
            <StyledNavLink to={item.to}>
              {item.icon}
              <span>{item.text}</span>
            </StyledNavLink>
          ) : (
            <CustomNavLink to={item.to} text={item.text} icon={item.icon} category={item.category} />
          )}
        </li>
      ))}
        {
          !user && (
            <li>
              <StyledNavLink to="/sign-in">
                <SlLogin />
                <span>Login</span>
              </StyledNavLink>
            </li>
          )
        }
    </NavList>
  </nav>
);
};

export default Navbar;
