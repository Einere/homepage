import * as React from 'react';
import {FunctionComponent} from 'react';
import {ProjectType} from "../../@types";
import {ProjectStyle} from "./Project.style";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faImage} from "@fortawesome/free-solid-svg-icons";
import {TagContainer} from "../TagContainer/TagContainer";

export const Project: FunctionComponent<ProjectType> = function (props) {
    const {
        title,
        thumbnail,
        skill,
        onClick,
    } = props;

    return (
        <ProjectStyle onClick={onClick}>
            {thumbnail ?
                <img src={thumbnail} alt="project thumbnail" className="project-thumbnail"/>
                :
                <div className="project-thumbnail">
                    <FontAwesomeIcon icon={faImage}/>
                </div>
            }

            <p className="project-title">{title}</p>
            <TagContainer tags={skill}/>
        </ProjectStyle>
    );
};
