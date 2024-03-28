import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
import Logo from './Logo'

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  display: grid;
  padding: 3.2rem 2.4rem;
  /* height: 100vh; */
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1/-1;
`


const Sidebar = () => {


  return (
    <StyledSidebar>
      <Logo/>
      <Navbar/>
    </StyledSidebar>
  )
}

export default Sidebar