import * as React from 'react';
import {FunctionComponent} from 'react';
import {Header} from '../../component/Header/Header';
import {About} from "../../component/About/About";

export const Main: FunctionComponent = function () {
    return (
        <>
            <Header/>
            <About/>
        </>
    );
};
