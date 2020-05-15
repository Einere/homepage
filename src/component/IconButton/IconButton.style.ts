import styled from "styled-components";

export const IconButtonStyle = styled.a`
  width: ${props => props.theme.size.iconButton}px;
  line-height: ${props => props.theme.size.iconButton}px;
  background-color: ${props => props.theme.color.bizarre};
  border-radius: ${props => props.theme.size.borderRadius}px;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  margin-right: 5px;
  transition: background-color ${props => props.theme.time.transition}s ease;
  font-size: ${props => props.theme.size.absoluteDefault}px;
  
  &:hover {
    background-color: ${props => props.theme.color.wafer};
    transition: background-color ${props => props.theme.time.transition}s ease;
  }
`;
