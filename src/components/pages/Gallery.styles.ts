import Image from "next/image";
import styled from "styled-components";

export const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 100%;
  max-width: 720px;
`;

export const GalleryImg = styled.img`
  width: 100%;
`;

export const GalleryImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
`;

export const StyledNextImage = styled(Image)`
  object-fit: contain;
`;
