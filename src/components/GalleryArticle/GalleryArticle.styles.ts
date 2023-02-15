import Image from "next/image";
import styled from "styled-components";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  align-items: center;
  justify-content: space-between;
`;

export const StyledImage = styled(Image)`
  object-fit: cover;
`;
