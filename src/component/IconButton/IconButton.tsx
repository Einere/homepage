import * as React from 'react';
import {FunctionComponent} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconButtonStyle} from "./IconButton.style";
import {IconButtonProp} from "../../@types";

export const IconButton: FunctionComponent<IconButtonProp> = function ({href, icon}) {
    return (
        <IconButtonStyle target="_blank" rel="noopener noreferrer" href={href}>
            <FontAwesomeIcon icon={icon}/>
        </IconButtonStyle>
    );
};
