import styled from "styled-components";

export const SkillItemStyle = styled.div`
  background-color: white;
  padding: 1rem;
  margin: 2rem;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.2);
  }

  & > .category {
    font-size: 32px;
    font-weight: bold;
    padding: 10px 0;
  }

  & > .content {
    font-size: 16px;
    font-family: 'Noto Sans KR', sans-serif;
    letter-spacing: 1px;
    padding: 10px 0;
  }
`;
