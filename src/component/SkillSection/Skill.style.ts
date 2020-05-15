import styled from "styled-components";

export const SkillStyle = styled.div`
  background-color: white;
  padding: ${props => props.theme.spacing.default};
  margin: ${props => props.theme.spacing.normal};
  transition: all ${props => props.theme.time.transition}s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: ${props => props.theme.shadow.card};
  }

  & > .category {
    font-size: ${props => props.theme.size.subTitle};
    font-weight: bold;
  }

  & > .content {
    font-size: ${props => props.theme.size.absoluteDefault}px;
    font-family: ${props => props.theme.font.korean};
    margin: calc(${props => props.theme.spacing.default} / 2) 0;
  }
`;
