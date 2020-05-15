import styled from "styled-components";

export const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  background-color: ${props => props.theme.color.transparentWhite};
  box-shadow: ${props => props.theme.shadow.header};
  transition: all ${props => props.theme.time.transition}s ease;
  
  &.scroll-down {
      top: -${props => props.theme.size.navBar};
  }
`;
