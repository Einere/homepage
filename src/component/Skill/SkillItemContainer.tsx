import * as React from 'react';
import {FunctionComponent} from 'react';
import {SkillItemContainerStyle} from "./SkillItemContainer.style";
import {SkillItem} from "./SkillItem";
import {faDocker, faJsSquare, faNodeJs, faReact, faVuejs} from "@fortawesome/free-brands-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

export interface SkillData {
    icons: IconProp[];
    category: string;
    contents: string[];
}

const skills: SkillData[] = [
    {
        icons: [faJsSquare],
        category: "Language",
        contents: ["Java", "JavaScript", "TypeScript", "functional JS"]
    },
    {
        icons: [faReact, faVuejs],
        category: "FrontEnd",
        contents: ["React", "Vue.js"]
    },
    {
        icons: [faNodeJs],
        category: "BackEnd",
        contents: ["Node.js", "Express"]
    },
    {
        icons: [faDocker],
        category: "DebOps",
        contents: ["Docker"]
    },
];

export const SkillItemContainer: FunctionComponent = function () {
    const SkillItems = skills.map(
        ({icons, category, contents}, index) => <SkillItem key={index} icons={icons}
                                                          category={category}
                                                          contents={contents}/>
    );

    return (
        <SkillItemContainerStyle>
            {SkillItems}
        </SkillItemContainerStyle>
    );
};
