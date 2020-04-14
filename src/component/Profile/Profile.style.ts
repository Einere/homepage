import styled from "styled-components";

export const ProfileStyle = styled.article`
  width: 100%;
  text-align: center;
  padding: 1rem 0;
  vertical-align: bottom;
  
  & > .profile-left {
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
  }
  
  
  
  & > .information {
    display: inline-block;
    padding: 2rem;
    vertical-align: bottom;
    text-align: left;
    
    & > .intro {
      padding: 1rem 0;
      font-family: 'Noto Sans KR', sans-serif;
      letter-spacing: 1.5px;
    }
    
    & > ul {
      padding: 20px 0;
      margin: 0 auto;
      
      & > li > .info > i {
        width: 20px;
      }
    }
    
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
    
    & > .profile-left {
      margin: 0 auto;
    }
    
    & > .information {
      width: 100%;
      padding: 1rem 0;
      
      & > ul {
        width: 50%;
      }
    }
  }
`;
