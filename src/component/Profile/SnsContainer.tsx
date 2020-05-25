import * as React from 'react';
import {FunctionComponent} from 'react';
import {IconButton} from "../IconButton/IconButton";
import {SnsContainerStyle} from "./SnsContainer.style";
import {faFacebookF, faInstagram, faGithub} from "@fortawesome/free-brands-svg-icons";
import {snsData} from "../../data/snsData";

export const SnsContainer: FunctionComponent = function() {
    const {
        facebookHref,
        instagramHref,
        githubHref,
    } = snsData;

    return (
        <SnsContainerStyle className="sns">
            <IconButton href={facebookHref} icon={faFacebookF}/>
            <IconButton href={instagramHref} icon={faInstagram}/>
            <IconButton href={githubHref} icon={faGithub}/>
        </SnsContainerStyle>
    );
};
