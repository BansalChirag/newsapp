import React, { useEffect } from 'react'
import { useUser } from '../authentication/useUser'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import Spinner from '../ui/Spinner';

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProtectedRoute = ({children}) => {
    const{isLoading,isAuthenticated} = useUser()
    const navigate = useNavigate();
    

    useEffect(function(){
        if(!isAuthenticated){
            navigate('/login')
        }
    },[isAuthenticated,navigate])

    if(isLoading){
        return (
            <FullPage>
              <Spinner />
            </FullPage>
          );
    }

    if(isAuthenticated){
        return children;
    }
    
}

export default ProtectedRoute