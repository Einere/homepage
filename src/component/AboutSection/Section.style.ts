import styled from "styled-components";

export const SectionStyle = styled.section`
  width: ${props => props.theme.size.defaultWidth}%;
  padding: ${props => props.theme.spacing.default} 0;
  margin: 0 auto;
  
  @media(max-width: ${props => props.theme.size.desktopMinWidth}px) {
    width: 100%;
  }
`;
