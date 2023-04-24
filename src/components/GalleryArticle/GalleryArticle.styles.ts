import Image from "next/image";
import styled from "styled-components";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  align-items: center;
  justify-content: space-between;
`;

export const StyledNextImage = styled(Image)`
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;
