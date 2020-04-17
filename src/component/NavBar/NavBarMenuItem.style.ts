import styled from "styled-components";

export const NavBarMenuItemStyle = styled.div`
  cursor: pointer;
  width: 5rem;
  height: 5rem;
  line-height: 5rem;
  transition: all 0.5s ease;
  text-align: center;
  text-transform: uppercase;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;
