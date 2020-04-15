import styled from "styled-components";

export const InformationStyle = styled.ul`
  padding: 20px 0;
  margin: 0 auto;
  
  & > li > .info {
    width: 20px;
    margin-right: 5px;
  }

  @media (max-width: 992px) {
    width: 50%;
  }
`;
