import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Heading from '../ui/Heading';
import Button from '../ui/Button';

const StyledPageNotFound = styled.div`
 height: 100vh;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: var(--color-grey-50);
 padding: 4.8rem;
`;

const Box = styled.div`
 background-color: var(--color-grey-0);
 border: 1px solid var(--color-grey-100);
 border-radius: var(--border-radius-md);
 padding: 4.8rem;
 flex: 0 1 96rem;
 text-align: center;
 box-shadow: rgba(0, 0, 0, 0.24) 0px .3rem .8rem;

 & h1 {
    margin-bottom: 3.2rem;
 }
`;

// Define a styled component for the paragraph
const StyledParagraph = styled.p`
 color: #333; // Custom color
 font-size: 1.2rem; // Adjust font size
 margin-bottom: 1.5rem; // Add some spacing below the paragraph
`;

const PageNotFound = () => {
 const navigate = useNavigate();
 const [time, setTime] = useState(10);

 useEffect(() => {
    const timer = setTimeout(() => {
      if (time > 0) {
        setTime(prevTime => prevTime - 1);
      } else {
        navigate('/');
      }
    }, 1000);

    return () => clearTimeout(timer);
 }, [time, navigate]);

 return (
    <StyledPageNotFound>
      <Box>
        <Heading as="h1">Oops! We couldn't find that page.</Heading>
        <StyledParagraph>
          It looks like the page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </StyledParagraph>
        <Button size="large" onClick={() => navigate(-1)}>&larr; Go back</Button>
        <StyledParagraph>
          Or, we can redirect you to the Dashboard in {10} seconds...
        </StyledParagraph>
      </Box>
    </StyledPageNotFound>
 );
};

export default PageNotFound;
