import * as React from 'react';
import {FunctionComponent} from 'react';
import {Header} from '../../component/Header/Header';
import {AboutSection} from "../../component/AboutSection/AboutSection";
import {SkillSection} from "../../component/SkillSection/SkillSection";
import {ProjectSection} from "../../component/ProjectSection/ProjectSection";
import {Footer} from "../../component/Footer/Footer";
import {theme} from "../../style/theme";
import {ThemeProvider} from "styled-components";

export const Main: FunctionComponent = function () {
    return (
        <ThemeProvider theme={theme}>
            <Header/>
            <AboutSection/>
            <SkillSection/>
            <ProjectSection/>
            <Footer/>
        </ThemeProvider>
    );
};
