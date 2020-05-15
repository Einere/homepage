import styled from "styled-components";

export const ProjectStyle = styled.article`
  width: ${props => props.theme.size.projectWidth}px;
  margin: ${props => props.theme.spacing.default};
  padding-bottom: ${props => props.theme.spacing.default};
  text-align: center;
  transition: box-shadow ${props => props.theme.time.transition}s ease;
  cursor: pointer;

  &:hover {
    box-shadow: ${props => props.theme.shadow.card};
  }

  & > .project-thumbnail {
    width: 100%;
    height: ${props => props.theme.size.image}px;
    line-height: ${props => props.theme.size.image}px;
    font-size: 5rem;
    color: ${props => props.theme.color.lily}; 
    object-fit: contain;
    object-position: center;
  }
  
  & > .project-title {
    font-size: ${props => props.theme.size.smallTitle};
  }
  
  @media(max-width: ${props => props.theme.size.desktopMinWidth}px) {
    width: ${props => props.theme.size.defaultWidth}%;
  }
`;
