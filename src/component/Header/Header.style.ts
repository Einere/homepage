import styled from "styled-components";

export const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease;
  
  &.scroll-up {
      top: -5rem;
  }
`;
