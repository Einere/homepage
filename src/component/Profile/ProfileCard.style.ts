import styled from "styled-components";

export const ProfileCardStyle = styled.div`
  display: inline-block;
  margin: 0 ${props => props.theme.spacing.wide};
  padding: ${props => props.theme.spacing.normal} 0;
  
  & > .selfie {
    max-width: ${props => props.theme.size.selfie}px;
    max-height: ${props => props.theme.size.selfie}px;
    border-radius: ${props => props.theme.size.borderRadius}px;
  }
  
  & > .name {
    font-size: ${props => props.theme.size.subTitle};
    text-align: center;
    padding: ${props => props.theme.spacing.default} 0;
  }
  
  & > .introduction {
    font-size: ${props => props.theme.size.relativeDefault};
    font-family: ${props => props.theme.font.korean};
  }
  
  @media (max-width: ${props => props.theme.size.desktopMinWidth}px) {
    margin: 0 auto;
  }
`;
