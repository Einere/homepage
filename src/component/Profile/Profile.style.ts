import styled from "styled-components";

export const ProfileStyle = styled.article`
  width: 100%;
  text-align: center;
  padding: ${props => props.theme.spacing.default} 0;
  vertical-align: bottom;
  
  & > .description {
    display: inline-block;
    padding: ${props => props.theme.spacing.normal};
    vertical-align: bottom;
    text-align: left;
  }
  
  @media (max-width: 992px) {
    width: 100%;
    
    & > .description {
      width: 100%;
      padding: ${props => props.theme.spacing.default} 0;
    }
  }
`;
