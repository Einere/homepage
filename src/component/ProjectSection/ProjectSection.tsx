import * as React from 'react';
import {FunctionComponent} from 'react';
import {SectionStyle} from "../AboutSection/Section.style";
import {Title} from "../Title/Title";
import {ProjectContainer} from "./ProjectContainer";

export const ProjectSection: FunctionComponent = function () {
    const title = "project";

    return (
        <SectionStyle>
            <Title title={title}/>
            <ProjectContainer/>
        </SectionStyle>
    );
};
