import * as React from 'react';
import {FunctionComponent} from 'react';
import {SkillSectionStyle} from "./SkillSection.style";
import {Title} from "../Title/Title";
import {SkillContainer} from "./SkillContainer";

export const SkillSection: FunctionComponent = function () {
    const title = 'SKILL';

    return (
        <SkillSectionStyle className="skill" id="skill">
            <Title title={title}/>
            <SkillContainer/>
        </SkillSectionStyle>
    );
};
