import styled from "styled-components";

export const FooterStyle = styled.section`
  height: 5rem;
  text-align: center;
  line-height: 5rem;
  // pure css gradient background 
  // https://codepen.io/P1N2O/pen/pyBNzX
  background: linear-gradient(-45deg, rgba(209,221,205,1), rgb(204, 167, 180));
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  
  @keyframes gradient {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
}
`;
