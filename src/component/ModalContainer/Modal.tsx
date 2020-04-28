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

    const onClickHandler = function () {
        window.open(repository);
    };

    return (
        <ModalStyle className={isOpened ? 'open' : ''}>
            <FontAwesomeIcon icon={faTimes} className="modal-close" onClick={toggleIsOpened}/>
            <span className="modal-title">{title}</span>
            <hr className="modal-hr"/>
            {image ?
                <img className="modal-image" src={image} alt="project"/> :
                <div className="modal-none-image">
                    <FontAwesomeIcon icon={faImage}/>
                </div>
            }
            <p className="modal-content">{content}</p>
            {repository ? <FontAwesomeIcon icon={faGithub} className="modal-github" onClick={onClickHandler}/> : null}
        </ModalStyle>
    );
};
