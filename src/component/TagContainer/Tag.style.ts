import styled from "styled-components";

export const TagStyle = styled.span`
  border: ${props => props.theme.color.tasman};
  border-radius: ${props => props.theme.size.borderRadius}px;
  background-color: ${props => props.theme.color.transparentTasman};
  padding: 0 5px;
  margin: 2px;
`;
