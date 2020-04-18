import styled from "styled-components";

export const NavBarStyle = styled.nav`
  width: calc(100% - 10rem);
  height: 5rem;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  & .nav-bar-menu-icon {
    display: none;
    cursor: pointer;
  }
  
  @media (max-width: 992px) {
    width: calc(100% - 2rem);;
    height: 3rem;
    margin: 0 auto;
    
    & .nav-bar-menu-icon {
      display: block;
      font-size: 2rem;
    }
  }
`;
