import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useUser from '../authentication/useUser';

const Avatar = styled.img`
  /* display: block; */
  width: 4rem;
  aspect-ratio: 1;
  border-radius: 50%;
  /* object-fit: cover; */
  /* object-position: center; */

  /* outline: 2px solid var(--color-grey-100); */

`

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  /* color: var(--color-grey-600); */

`


const UserAvatar = () => {

  const navigate = useNavigate();

  let fullName = "";
  let avatar = "default-user.jpg";

  const {user} = useUser();

  if(user){
    const {user_metadata} = user;
    if(user_metadata){
      fullName = user_metadata.fullName || fullName;
      avatar = user_metadata.avatar || avatar
    }
  }
  
  return (
    <StyledUserAvatar onClick={()=>navigate('/account')} >
      <Avatar src={avatar || "default-user.jpg"} alt={`Profile photo of user`} />
      <span>{fullName}</span>
    </StyledUserAvatar>
  )
}

export default UserAvatar