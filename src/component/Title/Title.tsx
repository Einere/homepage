import * as React from 'react';
import {FunctionComponent} from 'react';
import {TitleStyle} from "./Title.style";
import {TitleProp} from "../../@types";

export const Title: FunctionComponent<TitleProp> = function ({title}) {
    return (
        <TitleStyle id={title}>{title}</TitleStyle>
    );
};
