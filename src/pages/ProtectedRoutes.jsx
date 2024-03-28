import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useUser from '../authentication/useUser';
import Spinner from '../ui/Spinner';

const ProtectedRoutes = ({children}) => {
    const {isLoading,isAuthenticated} = useUser();
    const location = useLocation()

    const navigate = useNavigate();
    

    useEffect(()=>{
      if(!isAuthenticated && !isLoading) navigate('/sign-in')
      else if ((isAuthenticated && (location.pathname === '/sign-in' || location.pathname === '/sign-up' || location.pathname === '/forgot-password'))){
        navigate('*')
      }
    },[isAuthenticated,isLoading,navigate,location])

    if (isLoading) return <Spinner/>

    if(isAuthenticated) return children
}

export default ProtectedRoutes
