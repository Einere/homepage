import styled from "styled-components";

export const TitleStyle = styled.div`
  font-size: 3.5rem;
  font-weight: bold;
  text-align: center;
  letter-spacing: 3px;
  margin: 2rem 0;  
  text-transform: uppercase;

  &::after {
    content: "";
    display: block;
    width: 12rem;
    height: 10px;
    margin: 0 auto;
    background-image: linear-gradient(to right, #B17F94, #CCA7B4, #DDC4C2, #EBDCD5);
  }
`;
