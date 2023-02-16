import styled from "styled-components";

export const BlogsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 1fr;
  gap: 16px;
`;
