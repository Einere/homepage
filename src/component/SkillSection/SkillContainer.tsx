import * as React from 'react';
import {FunctionComponent} from 'react';
import {SkillContainerStyle} from "./SkillContainer.style";
import {Skill} from "./Skill";
import {skills} from "../../data/skillData";

export const SkillContainer: FunctionComponent = function () {
    const SkillItems = skills.map(
        ({icons, category, contents}, index) => <Skill key={index} icons={icons}
                                                       category={category}
                                                       contents={contents}/>
    );

    return (
        <SkillContainerStyle>
            {SkillItems}
        </SkillContainerStyle>
    );
};
