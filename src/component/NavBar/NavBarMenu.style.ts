import styled from "styled-components";

export const NavBarMenuStyle = styled.div`
  display: flex;
  height: 100%;

  @media(max-width: 992px) {
    display: block;
    position: absolute;
    height: 0;
    width: 100%;
    top: 3rem;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    overflow: hidden;
    transition: height 0.5s ease;
    
    &.show {
      height: 9rem;
    }
  }
`;
