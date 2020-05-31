import * as React from 'react';
import {FunctionComponent} from 'react';
import {SubTitleStyle} from "./SubTitle.style";
import {SubTitleProp} from "../../@types";

export const SubTitle: FunctionComponent<SubTitleProp> = function ({title}) {
    return (
        <SubTitleStyle>{title}</SubTitleStyle>
    );
};
