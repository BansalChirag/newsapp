import React from 'react'
import styled from 'styled-components'


const StyledLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .8rem;
`

const Img = styled.img`
  height: 9.6rem;
  width: auto;
  border-radius: 50%;
`

const Logo = () => {
  return (
    <StyledLogo>
      <Img src="/logo.jpg" alt="Logo" />
      <p style={{fontSize:"2.4rem"}}>
            NewsWave
        </p>
    </StyledLogo>
  )
}

export default Logo
