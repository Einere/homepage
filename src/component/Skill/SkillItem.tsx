import * as React from 'react';
import {FunctionComponent} from 'react';
import {SkillItemStyle} from "./SkillItem.style";
import {Icon} from "../Icon/Icon";
import {SkillData} from "./SkillItemContainer";

export const SkillItem: FunctionComponent<SkillData> = function({icons, category, contents}) {
    const Icons = icons.map((icon, i) => <Icon key={i} icon={icon}/>);

    return (
        <SkillItemStyle>
            {Icons}
            <div className="category">{category}</div>
            <div className="content">{contents.join(', ')}</div>
        </SkillItemStyle>
    );
};
