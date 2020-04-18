import * as React from 'react';
import {FunctionComponent} from 'react';
import {SectionStyle} from "./Section.style";
import {Title} from "../Title/Title";
import {Profile} from "../Profile/Profile";

export const About: FunctionComponent = function () {
    const title = 'about';

    return (
        <SectionStyle>
            <Title id={title} title={title}/>
            <Profile/>
        </SectionStyle>
    );
};
