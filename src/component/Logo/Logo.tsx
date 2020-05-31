import * as React from "react";
import {FunctionComponent} from "react";
import logo from "../../asset/image/logo.png";
import {LogoStyle} from './Logo.style';
import {LogoProp} from "../../@types";

export const Logo: FunctionComponent<LogoProp> = function ({width}) {
    const alt = "logo";

    function onClickHandle() {
        document.querySelector('html')!.scrollIntoView();
    }

    return (
        <LogoStyle
            src={logo}
            alt={alt}
            className="nav-bar-logo"
            width={width}
            onClick={onClickHandle}
        />
    );
};
