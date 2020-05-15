import * as React from 'react';
import {FunctionComponent} from 'react';
import {ProjectContainerStyle} from "./ProjectContainer.style";
import {Project} from "./Project";
import catchMyMind from '../../asset/image/catch_my_mind.png';
import logo from '../../asset/image/logo.png';
import {useModal} from "../../hook/useModal";
import {ModalData} from "../../context/ModalContext";
import {ModalContainer} from "../ModalContainer/ModalContainer";

export interface ProjectType {
    id: number;
    thumbnail?: string;
    title: string;
    type: 'team' | 'personal';
    period: {
        start: string | Date;
        end?: string | Date;
    };
    skill: string[];
    description: string;
    task: string[];
    repository: string;
    onClick?: () => void;
}

const projects: ProjectType[] = [
    {
        id: 0,
        thumbnail: catchMyMind,
        title: 'Catch My Mind',
        type: 'team',
        period: {
            start: '2019.11.',
            end: '2019.12.'
        },
        skill: ["HTML", "CSS", "JavaScript", "React", "Express", "GraphQL", "Sequelize", "MySQL", "Docker", "Travis CI",],
        description: "웹으로 즐기는 캐치마인드",
        task: ["권한인증 및 접근제어", "게임 진행 로직", "타이머", "문서화"],
        repository: "https://github.com/connect-foundation/2019-15",
    },
    {
        id: 1,
        title: 'todo-ts-react',
        type: 'personal',
        period: {
            start: '2020.01.',
        },
        skill: ["HTML", "CSS", "TypeScript", "React", "styled-components", "Docker", "GitHub Pages"],
        description: "간단한 투두 웹 앱",
        task: ["설계", "개발"],
        repository: "https://github.com/Einere/todo-ts-react",
    },
    {
        id: 2,
        thumbnail: logo,
        title: 'Shangri-la',
        type: 'personal',
        period: {
            start: '2020.04.',
        },
        skill: ["HTML", "CSS", "TypeScript", "React", "styled-components", "GitHub Pages"],
        description: "포트폴리오용 개인 홈페이지",
        task: ["설계", "개발"],
        repository: "https://github.com/Einere/einere.github.io2",
    }
];

export const ProjectContainer: FunctionComponent = function () {
    const {
        isOpened,
        setIsOpened,
        modalData,
        setModalData,
        toggleIsOpened,
    } = useModal({});

    function makeOnClickHandle(newModalData: ModalData) {
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
