import styled from "styled-components";

export const NavBarMenuStyle = styled.div`
  display: flex;
  height: 100%;

  @media(max-width: ${props => props.theme.size.desktopMinWidth}px) {
    display: block;
    position: absolute;
    height: 0;
    width: 100%;
    top: ${props => props.theme.size.mobileNavBarHeight};
    left: 0;
    background-color: ${props => props.theme.color.transparentDimBlack};
    overflow: hidden;
    transition: height ${props => props.theme.time.transition}s ease;
    
    &.show {
      // 좀 더 우아한 방법이 없을까...
      height: calc(${props => props.theme.size.mobileNavBarHeight} * 3);
    }
  }
`;
