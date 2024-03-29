import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/Profile.css'
import Button from "../ui/Button";
import useLogout from "../authentication/useLogout";
import useUser from "../authentication/useUser";
import styled from "styled-components";

const Avatar = styled.img`
  display: block;

  width: 4rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);


`;



const ProfileDropdown = () => {
 const [isOpen, setIsOpen] = useState(false);
 const dropdownRef = useRef(null); // Step 2: Create a ref for the dropdown container

 const navigate = useNavigate();

 useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // Step 3: Add event listener

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Step 4: Clean up
    };
 }, []);

 const closeDropdown = () => {
    setIsOpen(false);
 };

 const {logout} = useLogout();
 const {user} = useUser();

 let fullName = "";
 let avatar = "default-user.jpg";

if(user){
  const {user_metadata} = user;
  if(user_metadata){
    fullName = user_metadata.fullName || fullName;
      avatar = user_metadata.avatar || avatar;
  }
}

// const fullName = "Chirag Bansal"


 const generateShortName = (fullName) => {
    const arr = fullName.split(' ');
    const shortName = (arr.length > 1 ? arr[0]?.charAt(0) + arr[1]?.charAt(0) : arr[0]?.charAt(0)) || '';
    return shortName.toUpperCase();
 }

 

 return (
    <div className="profile-dropdown" ref={dropdownRef}> 
      {
        fullName ? 
        <Avatar src={avatar|| "default-user.jpg"} alt="" onClick={() => setIsOpen(!isOpen)} />
        :
        <Button size="small" onClick={()=>navigate('/sign-in')}>Login</Button>

      }
      
      {isOpen && (
        <div className="dropdown-menu">
          <Link to="/account" onClick={closeDropdown} style={{fontSize:"1.8rem"}}>Profile</Link>
          <Button size="small" onClick={() => { logout(); closeDropdown(); }}>Logout</Button>
        </div>
      )}
    </div>
 );
};

export default ProfileDropdown;
