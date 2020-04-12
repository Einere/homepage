import * as React from "react";
import {FunctionComponent} from "react";
import logo from "../../asset/image/logo.png";
import {LogoStyle} from './Logo.style';

interface Prop {
    width: number;
}

export const Logo: FunctionComponent<Prop> = function ({width}) {
    return (
        <LogoStyle
            src={logo}
            alt="logo"
            className="nav-bar-logo"
            width={width}
        />
    );
};
