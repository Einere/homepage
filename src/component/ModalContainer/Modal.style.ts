import styled from "styled-components";

export const ModalStyle = styled.section`
  display: none;
  
  &.open {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 101;
    color: white;
    
    & > .modal-close {
      position: fixed;
      top: 3vh;
      right: 3vw;
      font-size: ${props => props.theme.size.bigIcon};
      transition: color ${props => props.theme.time.transition}s ease;
      cursor: pointer;
      
      &:hover {
        color: ${props => props.theme.color.lily};
      }
    }
    
    & > .modal-title {
      font-size: ${props => props.theme.size.bigIcon};
      font-weight: bold;
    }
    
    & > .modal-hr {
      width: ${props => props.theme.size.horizontalBar};
      margin: ${props => props.theme.spacing.default} 0;
      
      @media(max-width: ${props => props.theme.size.desktopMinWidth}px) {
        width: calc(${props => props.theme.size.horizontalBar} / 2);
      }
    }
    
    & > .modal-image {
      width: 25vw;
      height: 25vh;
      min-width: ${props => props.theme.size.image}px;
      min-height: ${props => props.theme.size.image}px;
      object-fit: contain;
      object-position: center;
    }
    
    & > .modal-empty-image {
      width: 25vw;
      height: 25vh;
      min-width: ${props => props.theme.size.image}px;
      min-height: ${props => props.theme.size.image}px;
      font-size: ${props => props.theme.size.navBar};
      text-align: center;
      line-height: ${props => props.theme.size.image}px;
    }
    
    & > .modal-content {
      font-family: ${props => props.theme.font.korean};
      margin-top: 1rem;
      font-size: ${props => props.theme.size.modalContent};
    }
    
    & > .modal-github {
      font-size: ${props => props.theme.size.smallIcon};
      margin: 1rem;
      cursor: pointer;
    }
  }
`;

