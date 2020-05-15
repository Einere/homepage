import styled from "styled-components";

export const NavBarStyle = styled.nav`
  width: calc(100% - 10rem);
  height: ${props => props.theme.size.navBar};
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  & .nav-bar-menu-icon {
    display: none;
    cursor: pointer;
  }
  
  @media (max-width: ${props => props.theme.size.desktopMinWidth}px) {
    width: calc(100% - 2rem);
    height: ${props => props.theme.size.mobileNavBarHeight};
    margin: 0 auto;
    
    & .nav-bar-menu-icon {
      display: block;
      font-size: ${props => props.theme.size.smallIcon};
    }
  }
`;
