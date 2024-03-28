import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import ThemeToggle from "./ThemeToggle";
import ProfileDropdown from "./ProfileDropdown";
import "../styles/mobileNav.css";
import { useNavigate } from "react-router-dom";
import { SlLogin } from "react-icons/sl";
import CustomNavLink from "./CustomNavLink";
import { NavList, StyledNavLink, navItems } from "./Navbar";
import styled from "styled-components";
import useUser from "../authentication/useUser";


const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.5rem 1rem 1.5rem 1rem;
  border-bottom: .1rem solid var(--color-grey-100);
  display: flex;
  gap: 2.4rem;
  justify-content:space-between;
  align-items: center;
`

const MobileNav = () => {
  const {user} = useUser()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);
  const navigate = useNavigate();

  return (
    <StyledHeader className="mobile-nav" style={{ fontSize: "2rem" }}>
      <div className="brand-name" onClick={() => navigate("/")}>
        NewsWave
      </div>
      <div className="right-side">
        <ProfileDropdown />
        <ThemeToggle />
        <CiMenuFries onClick={toggleMenu} />
        <div className={`menu ${isMenuOpen ? "open" : ""}`}>
          <button onClick={toggleMenu} style={{ zIndex: 10 }}>
            X
          </button>
          {isMenuOpen && (
            <NavList
              style={{
                backgroundColor: 'var(--color-grey-0)',
                width: "65rem",
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {navItems.map((item, index) => (
                <li key={index} onClick={toggleMenu}>
                  {item.to.startsWith("/") ? (
                    <StyledNavLink to={item.to}>
                      {item.icon}
                      <span>{item.text}</span>
                    </StyledNavLink>
                  ) : (
                    <CustomNavLink
                      to={item.to}
                      text={item.text}
                      icon={item.icon}
                      category={item.category}
                    />
                  )}
                </li>
              ))}
              {
                !user && (
                  <li onClick={toggleMenu} >
                    <StyledNavLink to="/login">
                      <SlLogin />
                      <span>Login</span>
                    </StyledNavLink>
                  </li>
                )
              }
            </NavList>
          )}
        </div>
      </div>
    </StyledHeader>
  );
};

export default MobileNav;
