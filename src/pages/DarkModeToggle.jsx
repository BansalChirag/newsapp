import React from 'react'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';
import ButtonIcon from '../ui/ButtonIcon';
import { useDarkMode } from '../context/DarkModeContextApi';

const DarkModeToggle = () => {

    const {isDarkMode,toggleDarkMode} = useDarkMode();
  return (
    <div>
        <ButtonIcon onClick={toggleDarkMode}>
        {
            isDarkMode ? <HiOutlineSun/> : <HiOutlineMoon/>
        }
        </ButtonIcon>
    </div>
  )
}

export default DarkModeToggle