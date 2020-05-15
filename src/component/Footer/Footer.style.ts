import styled from "styled-components";

export const FooterStyle = styled.section`
  height: ${props => props.theme.size.navBar};
  text-align: center;
  line-height: ${props => props.theme.size.navBar};
  // pure css gradient background 
  // https://codepen.io/P1N2O/pen/pyBNzX
  background: ${props => props.theme.color.footer};
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
