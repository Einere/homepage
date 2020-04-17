import * as React from 'react';
import {FunctionComponent} from 'react';
import {SubTitleStyle} from "./SubTitle.style";

interface Prop {
    title: string;
}

export const SubTitle: FunctionComponent<Prop> = function ({title}) {
    return (
        <SubTitleStyle>{title}</SubTitleStyle>
    );
};
