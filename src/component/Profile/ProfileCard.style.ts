import styled from "styled-components";

export const ProfileCardStyle = styled.div`
  display: inline-block;
  margin: 0 5rem;
  
  & > .selfie {
    max-width: 300px;
    max-height: 300px;
    border-radius: 15px;
  }
  
  & > .name {
    font-size: 2rem;
    text-align: center;
    padding: 1rem 0;
  }
  
  & > .occupation {
    font-size: 1rem;
    font-family: 'Noto Sans KR', sans-serif;
  }
  
  @media (max-width: 992px) {
    margin: 0 auto;
  }
`;
