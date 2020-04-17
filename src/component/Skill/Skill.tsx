import * as React from 'react';
import {FunctionComponent} from 'react';
import {SkillStyle} from "./Skill.style";
import {Title} from "../Title/Title";
import {SkillItemContainer} from "./SkillItemContainer";

export const Skill: FunctionComponent = function () {
    const title = 'SKILL';

    return (
        <SkillStyle className="services-area" id="service">
            <Title title={title}/>
            <SkillItemContainer/>
        </SkillStyle>
    );
};
