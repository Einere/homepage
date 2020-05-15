import styled from "styled-components";

export const TitleStyle = styled.div`
  font-size: ${props => props.theme.size.title};
  font-weight: bold;
  text-align: center;
  letter-spacing: 3px;
  margin: ${props => props.theme.spacing.default} 0;  
  text-transform: uppercase;

  &::after {
    content: "";
    display: block;
    width: ${props => props.theme.size.shortHorizontalBar};
    height: ${props => props.theme.size.horizontalBarHeight}px;
    margin: 0 auto;
    background-image: ${props => props.theme.color.title};
  }
`;
