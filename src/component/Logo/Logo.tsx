import * as React from "react";
import {FunctionComponent} from "react";
import logo from "../../asset/image/logo.png";
import {LogoStyle} from './Logo.style';

interface Prop {
    width: number;
}

export const Logo: FunctionComponent<Prop> = function ({width}) {
    const alt = "logo";

    return (
        <LogoStyle
            src={logo}
            alt={alt}
            className="nav-bar-logo"
            width={width}
        />
    );
};
