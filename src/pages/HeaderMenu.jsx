import React from 'react'
import styled from 'styled-components';
import ButtonIcon from '../ui/ButtonIcon';
import DarkModeToggle from './DarkModeToggle';
import UserAvatar from '../authentication/UserAvatar';
import Logout from '../authentication/Logout';
import { useUser } from '../authentication/useUser';


const StyledHeaderMenu = styled.ul`
    display: flex;
    gap: .9rem;
    align-items: center;
`

const HeaderMenu = () => {
    const{user} = useUser()

  return (
    <StyledHeaderMenu>
        <li>
            <ButtonIcon>
                <UserAvatar/>
            </ButtonIcon>
        </li>
        <li><DarkModeToggle/></li>
        {user ? 
            <li>
                <Logout/>
            </li>
            : ""
        }
    </StyledHeaderMenu>
  )
}

export default HeaderMenu
