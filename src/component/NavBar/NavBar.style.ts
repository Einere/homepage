import styled from "styled-components";

export const NavBarStyle = styled.nav`
  width: calc(100% - 10rem);
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  & .nav-bar-logo, & .nav-bar-menu-icon {
    cursor: pointer;
  }
  
  & .nav-bar-menu-icon {
    display: none;
  }
  
  @media (max-width: 992px) {
    width: calc(100% - 2rem);;
    margin: 0 auto;
    
    & .nav-bar-menu-icon {
      display: block;
      font-size: 2rem;
    }
  }
`;
