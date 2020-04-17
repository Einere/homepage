import * as React from 'react';
import {FunctionComponent} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconButtonStyle} from "./IconButton.style";

interface Prop {
    href: string;
    icon: any;
}

export const IconButton: FunctionComponent<Prop> = function ({href, icon}) {
    return (
        <IconButtonStyle target="_blank" rel="noopener noreferrer" href={href}>
            <FontAwesomeIcon icon={icon}/>
        </IconButtonStyle>
    );
};
