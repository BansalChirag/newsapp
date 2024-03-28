import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 5rem;
  }
  @media (max-width: 350px) {
    padding: 3rem;
 }
`;

export default Wrapper;