import styled from "styled-components";

export const HistoryStyle = styled.div`
  margin: ${props => props.theme.spacing.normal} 0;
  
  & > p {
    font-family: ${props => props.theme.font.korean};
  }
`;
