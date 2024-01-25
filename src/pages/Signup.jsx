import React from 'react'
import styled from 'styled-components'
import SignupForm from '../authentication/SignupForm'
import Heading from '../ui/Heading'
import FormRow from '../ui/FormRow'
import Button from '../ui/Button'
import { useNavigate } from 'react-router-dom'

const SignupLayout = styled.main`
    min-height: 100vh;
    display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`
const Signup = () => {
    const navigate = useNavigate();
  return (
    <SignupLayout>
        <Heading as="h1" >Create a new account</Heading>
        <SignupForm/>
        <FormRow>
        <Button
          onClick={() => navigate("/dashboard")}
          variation="secondary"
          size="large"
        >
          Go to Homepage
        </Button>
        <Button onClick={() => navigate("/login")}>Already a user</Button>
      </FormRow>
    </SignupLayout>
  )

}

export default Signup