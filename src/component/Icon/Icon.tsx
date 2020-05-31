import * as React from 'react';
import {FunctionComponent} from 'react';
import {IconStyle} from "./Icon.style";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {MyIconProp} from "../../@types";

export const Icon: FunctionComponent<MyIconProp> = function ({icon}) {
    return (
        <IconStyle className="icon">
            <FontAwesomeIcon icon={icon}/>
        </IconStyle>
    );
};
