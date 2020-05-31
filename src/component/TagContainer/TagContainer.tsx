import * as React from 'react';
import {FunctionComponent} from 'react';
import {TagContainerStyle} from "./TagContainer.style";
import {Tag} from "./Tag";
import {TagContainerProp} from "../../@types";

export const TagContainer: FunctionComponent<TagContainerProp> = function (props) {
    const {
        tags
    } = props;

    const Tags = tags.map((text, i) => <Tag text={text} key={i}/>);

    return (
        <TagContainerStyle>
            {Tags}
        </TagContainerStyle>
    );
};
