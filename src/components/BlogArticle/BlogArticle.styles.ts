import Image from "next/image";
import styled from "styled-components";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  align-items: center;
  justify-content: space-between;
`;

/**
 * @see https://styled-components.com/docs/basics#styling-any-component
 */
export const StyledImage = styled(Image)`
  object-fit: contain;
`;
