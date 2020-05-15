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
    background-color: ${props => props.theme.color.transparentBlack};
    z-index: 100;  
  }
`;

