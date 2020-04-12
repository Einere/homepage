import * as React from "react";
import {FunctionComponent} from "react";
import {NavBarMenuStyle} from "./NavBarMenu.style";
import {NavBarMenuItem} from "./NavBarMenuItem";

export const NavBarMenu: FunctionComponent = function () {
    return (
        <NavBarMenuStyle className="nav-bar-menu">
            <NavBarMenuItem text="about"/>
            <NavBarMenuItem text="skill"/>
            <NavBarMenuItem text="project"/>
        </NavBarMenuStyle>
    );
};

