import styled from "styled-components";

export const NavBarMenuItemStyle = styled.div`
  cursor: pointer;
  width: ${props => props.theme.size.navBar};
  height: ${props => props.theme.size.navBar};
  line-height: ${props => props.theme.size.navBar};
  transition: background-color ${props => props.theme.time.transition}s ease;
  text-align: center;
  text-transform: uppercase;
  
  &:hover {
    background-color: ${props => props.theme.color.transparentGray};
  }
  
  @media(max-width: ${props => props.theme.size.desktopMinWidth}px) {
    width: 100%;
    height: ${props => props.theme.size.mobileNavBarHeight};
    line-height: ${props => props.theme.size.mobileNavBarHeight};
    color: white;
  }
`;
