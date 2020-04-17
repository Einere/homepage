import * as React from 'react';
import {FunctionComponent} from 'react';
import {IconStyle} from "./Icon.style";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

interface Prop {
    icon: IconProp;
}

export const Icon: FunctionComponent<Prop> = function ({icon}) {
    return (
        <IconStyle className="icon">
            <FontAwesomeIcon icon={icon}/>
        </IconStyle>
    );
};
