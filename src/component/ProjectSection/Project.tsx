import * as React from 'react';
import {FunctionComponent} from 'react';
import {ProjectType} from "./ProjectContainer";
import {ProjectStyle} from "./Project.style";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faImage} from "@fortawesome/free-solid-svg-icons";
import {TagContainer} from "../TagContainer/TagContainer";

export const Project: FunctionComponent<ProjectType> = function (props) {
    const {
        title,
        thumbnail,
        type,
        period,
        skill,
        description,
        task,
        repository,
    } = props;

    return (
        <ProjectStyle>
            {thumbnail ?
                <img src={thumbnail} alt="project thumbnail" className="project-thumbnail"/>
                :
                <div className="project-thumbnail">
                    <FontAwesomeIcon icon={faImage}/>
                </div>
            }

            <p className="project-title">{title}</p>
            {/*<p>{type}</p>*/}
            <TagContainer tags={skill}/>
            {/*<p>{description}</p>*/}
            {/*<p>{task}</p>*/}
            {/*<a href={repository}>repository</a>*/}
        </ProjectStyle>
    );
};
