import styled from "styled-components";

export const InterestedInStyle = styled.div`
  margin: ${props => props.theme.spacing.normal} 0;
  
  & > ul > li {
    line-height: ${props => props.theme.size.lineHeight};
  }
`;
