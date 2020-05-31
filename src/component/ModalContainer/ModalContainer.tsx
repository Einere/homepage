import * as React from 'react';
import {FunctionComponent} from 'react';
import {ModalBackgroundStyle} from "./ModalBackground.style";
import {Modal} from './Modal';
import {ModalContainerProp} from "../../@types";

export const ModalContainer: FunctionComponent<ModalContainerProp> = function (props) {
    const {
        isOpened,
        title,
        image,
        content,
        repository,
        toggleIsOpened,
    } = props;

    return (
        <>
            <Modal isOpened={isOpened} title={title} image={image} content={content} repository={repository}
                   toggleIsOpened={toggleIsOpened}/>
            <ModalBackgroundStyle className={isOpened ? 'open' : ''}/>
        </>
    );
};
