import * as React from 'react';
import {FunctionComponent} from 'react';
import {Header} from '../../component/Header/Header';
import {AboutSection} from "../../component/AboutSection/AboutSection";
import {SkillSection} from "../../component/SkillSection/SkillSection";
import {ProjectSection} from "../../component/ProjectSection/ProjectSection";

export const Main: FunctionComponent = function () {
    return (
        <>
            <Header/>
            <AboutSection/>
            <SkillSection/>
            <ProjectSection/>
        </>
    );
};
