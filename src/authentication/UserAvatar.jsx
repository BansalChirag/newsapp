import React from 'react'
import { useUser } from './useUser'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Avatar = styled.img`
display: block;
width: 4rem;
width: 3.6rem;
aspect-ratio: 1;
object-fit: cover;
object-position: center;
border-radius: 50%;
outline: 2px solid var(--color-grey-100);
`;

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

const UserAvatar = () => {
    const{user} = useUser()
    // console.log(user)

    let fullName = "";
  let avatar = "default-user.jpg";

    if(user){
      const {user_metadata} = user;
      if(user_metadata){
        fullName = user_metadata.fullName || fullName;
        avatar = user_metadata.avatar || avatar;
      }
    }
 


    const navigate = useNavigate();
    
    const generateShortName = (fullName)=>{
      const arr = fullName.split(' ');
      const shortName = (arr.length > 1 ? arr[0]?.charAt(0) + arr[1]?.charAt(0) : arr[0]?.charAt(0)) || '';
      return shortName.toUpperCase();
    }
  return (
    <StyledUserAvatar onClick={()=>navigate('/account')}>
    <Avatar
    src={avatar|| "default-user.jpg"}
    alt={`Avatar of ${fullName}`}
  />
        <span>
        {fullName}
        </span>
          
    </StyledUserAvatar>
  )
}

export default UserAvatar

// image ? <img src={image} alt="" />
//            : generateShortName(fullName)}</span>    