import styled from "styled-components";

export const ProjectStyle = styled.article`
  width: 400px;
  margin: 1rem;
  padding-bottom: 1rem;
  text-align: center;
  transition: box-shadow 0.5s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.2);
  }

  & > .project-thumbnail {
    width: 100%;
    height: 256px;
    border-radius: 15px;
    line-height: 256px;
    font-size: 5rem;
    color: rgba(204, 167, 180, 0.6); 
    object-fit: contain;
    object-position: center;
  }
  
  & > .project-title {
    font-size: 1.5rem;
  }
  
  @media(max-width: 992px) {
    width: 80%;
  }
`;
