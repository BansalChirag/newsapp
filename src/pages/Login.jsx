import React from 'react'
import LoginForm from '../authentication/LoginForm'
import styled from 'styled-components'
import Heading from '../ui/Heading'
import { NavLink, useNavigate } from 'react-router-dom'
import Button from '../ui/Button'
import FormRow from '../ui/FormRow'


const LoginLayout = styled.main`
    min-height: 100vh;
    display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`

const Login = () => {
  const navigate = useNavigate();

  // console.log(user)

  return (
    <LoginLayout>
      <Heading as="h1" style={{textAlign:"center"}} >Log in to your account</Heading>
      <LoginForm />
      <FormRow>
      <Button
          onClick={() => navigate("/dashboard")}
          variation="secondary"
          size="large"
        >
          Go to Homepage
        </Button>
        <Button onClick={() => navigate("/new-user")}>Create a new Account</Button>
      </FormRow>
    </LoginLayout>
  )
}

export default Login