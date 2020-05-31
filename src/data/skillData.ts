import {faCss3, faDocker, faHtml5, faJsSquare, faNodeJs, faReact, faVuejs} from "@fortawesome/free-brands-svg-icons";
import {SkillType} from "../@types";

export const skills: SkillType[] = [
    {
        icons: [faHtml5, faCss3, faJsSquare],
        category: "Language",
        contents: ["HTML", "CSS", "Java", "JavaScript", "TypeScript"]
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
