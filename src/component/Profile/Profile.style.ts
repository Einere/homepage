import styled from "styled-components";

export const ProfileStyle = styled.article`
  width: 100%;
  text-align: center;
  padding: 1rem 0;
  vertical-align: bottom;
  
  & > .description {
    display: inline-block;
    padding: 2rem;
    vertical-align: bottom;
    text-align: left;
    
    & > .sns > a {
      width: 50px;
      line-height: 50px;
      background-color: #EBDCD5;
      border-radius: 5px;
      font-size: 16px;
      display: inline-block;
      text-align: center;
      cursor: pointer;
      
      &:hover {
        background-color: #DDC4C2;
        transition: background-color 0.5s ease;
      }
    }
  }
  
  & > .history {
    text-align: center;
    padding: 20px 0;
    
    & > .history-title {
      font-size: 32px;
      font-weight: bold;
      padding: 10px 0;
    }
    
    & > p {
      font-size: 16px;
      font-family: 'Noto Sans KR', sans-serif;
    }
  }
  
  @media (max-width: 992px) {
    width: 100%;
    padding: 1rem 0;
    
    & > .description {
      width: 100%;
      padding: 1rem 0;
    }
  }
`;
