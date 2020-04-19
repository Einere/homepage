import * as React from 'react';
import {FunctionComponent} from 'react';
import {SkillStyle} from "./Skill.style";
import {Icon} from "../Icon/Icon";
import {SkillData} from "./SkillContainer";

export const Skill: FunctionComponent<SkillData> = function({icons, category, contents}) {
    const Icons = icons.map((icon, i) => <Icon key={i} icon={icon}/>);

    return (
        <SkillStyle>
            {Icons}
            <div className="category">{category}</div>
            <div className="content">{contents.join(', ')}</div>
        </SkillStyle>
    );
};
