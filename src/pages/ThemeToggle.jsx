import React from 'react'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';
import { getTheme } from '../context/ThemeContext';
import Button from '../ui/Button';
import ButtonIcon from '../ui/ButtonIcon';


const ThemeToggle = () => {

  const {theme,toggleTheme} = getTheme()

  return (
    <div>
        <ButtonIcon onClick={toggleTheme} >
        {
            theme==="dark" 
            ? 
            <HiOutlineSun/>
            :
            <HiOutlineMoon/>
        }
        </ButtonIcon>
    
    </div>
  )
}

export default ThemeToggle