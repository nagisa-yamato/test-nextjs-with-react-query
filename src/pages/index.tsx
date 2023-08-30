import Link from "next/link";
import { styled } from "styled-components";

const StyledButton = styled.button`
  color: black;
  background-color: white;
`;

const PagesIndex = () => {
  return (
    <>
      <h1>Index</h1>
      <StyledButton as={Link} href="/login">
        login
      </StyledButton>
    </>
  );
};

export default PagesIndex;
