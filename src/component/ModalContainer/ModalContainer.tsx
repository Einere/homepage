import * as React from 'react';
import {FunctionComponent} from 'react';
import {ModalBackgroundStyle} from "./ModalBackground.style";
import {Modal} from './Modal';
import {ModalData} from "../../context/ModalContext";

export interface ModalType extends ModalData {
    isOpened: boolean;
    toggleIsOpened: () => void;
}

export const ModalContainer: FunctionComponent<ModalType> = function (props) {
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
