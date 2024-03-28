import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';



const StyledNavLink = styled(Link)`
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




const CustomNavLink = ({ to, icon, text, category }) => {
  const { search } = useLocation();
  const isActive = search.includes(`category=${category}`);
  return (
    <StyledNavLink to={`/news?category=${category}`} className={isActive ? 'active' : ''}>
      {icon}
      <span>{text}</span>
    </StyledNavLink>
  );
};

export default CustomNavLink;