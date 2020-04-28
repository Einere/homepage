import styled from "styled-components";

export const ModalBackgroundStyle = styled.section`
  display: none;
  
  &.open {
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 100;  
  }
`;

