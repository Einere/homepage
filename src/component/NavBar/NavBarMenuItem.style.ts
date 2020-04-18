import styled from "styled-components";

export const NavBarMenuItemStyle = styled.div`
  cursor: pointer;
  width: 5rem;
  height: 5rem;
  line-height: 5rem;
  transition: background-color 0.5s ease;
  text-align: center;
  text-transform: uppercase;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
  
  @media(max-width: 992px) {
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    color: white;
  }
`;
