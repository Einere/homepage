import * as React from "react";
import {FunctionComponent} from "react";
import {NavBarMenuStyle} from "./NavBarMenu.style";
import {NavBarMenuItem} from "./NavBarMenuItem";

export const NavBarMenu: FunctionComponent = function () {
    const menu = ["ABOUT", "SKILL", "PROJECT"];
    const MenuItems = menu.map((text, index) => <NavBarMenuItem text={text} key={index}/>);

    return (
        <NavBarMenuStyle className="nav-bar-menu">
            {MenuItems}
        </NavBarMenuStyle>
    );
};

