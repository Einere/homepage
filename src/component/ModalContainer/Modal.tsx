import * as React from 'react';
import {FunctionComponent} from 'react';
import {ModalStyle} from "./Modal.style";
import {ModalType} from "./ModalContainer";
import {faImage, faTimes} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Modal: FunctionComponent<ModalType> = function (props) {
    const {
        isOpened,
        title,
        image,
        content,
        repository,
        toggleIsOpened,
    } = props;

    const modalClose = 'modal-close';
    const modalTitle = 'modal-title';
    const modalHr = 'modal-hr';
    const modalImage = 'modal-image';
    const modalEmptyImage = 'modal-empty-image';
    const modalContent = 'modal-content';
    const modalGitHub = 'modal-github';

    const onClickHandler = function () {
        window.open(repository);
    };

    return (
        <ModalStyle className={isOpened ? 'open' : ''}>
            <FontAwesomeIcon icon={faTimes} className={modalClose} onClick={toggleIsOpened}/>
            <span className={modalTitle}>{title}</span>
            <hr className={modalHr}/>
            {image ?
                <img className={modalImage} src={image} alt="project"/> :
                <div className={modalEmptyImage}>
                    <FontAwesomeIcon icon={faImage}/>
                </div>
            }
            <p className={modalContent}>{content}</p>
            {repository ? <FontAwesomeIcon icon={faGithub} className={modalGitHub} onClick={onClickHandler}/> : null}
        </ModalStyle>
    );
};
