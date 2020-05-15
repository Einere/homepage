import styled from "styled-components";

export const InformationStyle = styled.ul`
  padding: ${props => props.theme.spacing.default} 0;
  margin: 0 auto;
  
  & > li > .info {
    width: ${props => props.theme.size.miniIcon}px;
    margin-right: 5px;
  }

  @media (max-width: ${props => props.theme.size.desktopMinWidth}px) {
    width: 50%;
  }
`;
