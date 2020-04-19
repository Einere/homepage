import * as React from 'react';
import {FunctionComponent} from 'react';
import {SkillContainerStyle} from "./SkillContainer.style";
import {Skill} from "./Skill";
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
        contents: ["Java", "JavaScript", "TypeScript", "Functional Programming"]
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
        category: "DevOps",
        contents: ["Docker"]
    },
];

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
