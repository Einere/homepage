import * as React from 'react';
import {FunctionComponent} from 'react';
import {ProjectContainerStyle} from "./ProjectContainer.style";
import {Project} from "./Project";
import {useModal} from "../../hook/useModal";
import {ModalType} from "../../@types";
import {ModalContainer} from "../ModalContainer/ModalContainer";
import {projects} from "../../data/projectData";

export const ProjectContainer: FunctionComponent = function () {
    const {
        isOpened,
        setIsOpened,
        modalData,
        setModalData,
        toggleIsOpened,
    } = useModal({});

    function makeOnClickHandle(newModalData: ModalType) {
        return function () {
            setModalData(newModalData);
            setIsOpened(true);
        };
    }

    const Projects = projects.map((
        {
            id,
            thumbnail,
            title,
            type,
            period,
            description,
            repository,
            task,
            skill
        },
        index) =>
        <Project key={index} id={id} thumbnail={thumbnail} title={title} type={type} period={period} skill={skill}
                 description={description} task={task} repository={repository}
                 onClick={makeOnClickHandle({
                     image: thumbnail,
                     title: title,
                     content: description,
                     repository: repository
                 })}/>);


    return (
        <ProjectContainerStyle>
            {Projects}
            <ModalContainer isOpened={isOpened} title={modalData.title} image={modalData.image}
                            content={modalData.content} repository={modalData.repository}
                            toggleIsOpened={toggleIsOpened}/>
        </ProjectContainerStyle>
    );
};
