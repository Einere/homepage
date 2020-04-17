import * as React from 'react';
import {FunctionComponent} from 'react';
import {IconButton} from "../IconButton/IconButton";
import {SnsContainerStyle} from "./SnsContainer.style";
import {faFacebookF, faInstagram} from "@fortawesome/free-brands-svg-icons";

export const SnsContainer: FunctionComponent = function() {
    const facebookHref = "https://www.facebook.com/hyungjun.choi.146";
    const instagramHref = "https://www.instagram.com/alban_arthuan";

    return (
        <SnsContainerStyle className="sns">
            <IconButton href={facebookHref} icon={faFacebookF}/>
            <IconButton href={instagramHref} icon={faInstagram}/>
        </SnsContainerStyle>
    );
};
