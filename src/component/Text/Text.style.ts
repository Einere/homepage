import styled from "styled-components";

interface Props {
    fontSize?: number;
    textAlign?: string;
    fontFamily?: string;
    margin?: string;
    padding?: string;
    letterSpacing?: number;
}

export const TextStyle = styled.section<Props>`
  font-size: ${({fontSize}) => fontSize}rem;
  text-align: ${({textAlign}) => textAlign};
  font-family: ${({fontFamily}) => fontFamily};
  margin: ${({margin}) => margin};
  padding: ${({padding}) => padding};
  letter-spacing: ${({letterSpacing}) => letterSpacing}px;
  
  @media(max-width: 992px) {
    text-align: center;
  }
`;
