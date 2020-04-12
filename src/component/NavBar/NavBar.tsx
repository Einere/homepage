import * as React from "react";
import {FunctionComponent} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {Logo} from '../Logo/Logo';
import {NavBarStyle} from "./NavBar.style";
import {NavBarMenu} from "./NavBarMenu";

export const NavBar: FunctionComponent = function () {
    return (
        <NavBarStyle className="nav-bar">
            <Logo width={150}/>
            <FontAwesomeIcon icon={faBars} className="nav-bar-menu-icon"/>
            <NavBarMenu/>
        </NavBarStyle>
    );
};

