import * as React from "react";
import {FunctionComponent} from "react";
import {NavBarMenuItemStyle} from "./NavBarMenuItem.style";

interface Prop {
    text: string;
}

export const NavBarMenuItem: FunctionComponent<Prop> = function ({text}) {
    return (
        <NavBarMenuItemStyle className="nav-bar-menu-item">
            {text}
        </NavBarMenuItemStyle>
    );
};

