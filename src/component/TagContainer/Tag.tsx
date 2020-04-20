import * as React from 'react';
import {FunctionComponent} from 'react';
import {TagStyle} from "./Tag.style";

interface Prop {
    text: string;
}

export const Tag: FunctionComponent<Prop> = function (props) {
    const {
        text
    } = props;

    return (
        <TagStyle>{text}</TagStyle>
    );
};
