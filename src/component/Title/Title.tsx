import * as React from 'react';
import {FunctionComponent} from 'react';
import {TitleStyle} from "./Title.style";

interface Prop extends React.HTMLAttributes<HTMLDivElement>{
    title: string;
}

export const Title: FunctionComponent<Prop> = function ({title}) {
    return (
        <TitleStyle id={title}>{title}</TitleStyle>
    );
};
