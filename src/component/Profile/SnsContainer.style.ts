import styled from "styled-components";

export const SnsContainerStyle = styled.div`
  @media (max-width: ${props => props.theme.size.desktopMinWidth}px) {
    width: 50%;
    margin: 0 auto;
  }
`;
