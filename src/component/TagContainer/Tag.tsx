import * as React from 'react';
import {FunctionComponent} from 'react';
import {TagStyle} from "./Tag.style";
import {TagProp} from "../../@types";

export const Tag: FunctionComponent<TagProp> = function (props) {
    const {
        text
    } = props;

    return (
        <TagStyle>{text}</TagStyle>
    );
};
