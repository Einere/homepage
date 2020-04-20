import * as React from 'react';
import {FunctionComponent} from 'react';
import {TagContainerStyle} from "./TagContainer.style";
import {Tag} from "./Tag";

interface Prop {
    tags: string[];
}

export const TagContainer: FunctionComponent<Prop> = function (props) {
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
