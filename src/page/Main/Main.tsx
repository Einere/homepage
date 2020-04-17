import * as React from 'react';
import {FunctionComponent} from 'react';
import {Header} from '../../component/Header/Header';
import {About} from "../../component/About/About";
import {Skill} from "../../component/Skill/Skill";

export const Main: FunctionComponent = function () {
    return (
        <>
            <Header/>
            <About/>
            <Skill/>
        </>
    );
};
