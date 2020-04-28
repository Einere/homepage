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
      font-size: 3rem;
      transition: color 0.5s ease;
      cursor: pointer;
      
      &:hover {
        color: rgb(204, 167, 180);
      }
    }
    
    & > .modal-title {
      font-size: 3rem;
      font-weight: bold;
    }
    
    & > .modal-hr {
      width: 20rem;
      margin: 1rem 0;
      
      @media(max-width: 992px) {
        width: 10rem;
      }
    }
    
    & > .modal-image {
      width: 25vw;
      height: 25vh;
      min-width: 256px;
      min-height: 256px;
      object-fit: contain;
      object-position: center;
    }
    
    & > .modal-none-image {
      width: 25vw;
      height: 25vh;
      min-width: 256px;
      min-height: 256px;
      font-size: 5rem;
      text-align: center;
      line-height: 256px;
    }
    
    & > .modal-content {
      font-family: 'Noto Sans KR', sans-serif;
      margin-top: 1rem;
      font-size: 1.1rem;
    }
    
    & > .modal-github {
      font-size: 2rem;
      margin: 1rem;
      cursor: pointer;
    }
  }
`;

