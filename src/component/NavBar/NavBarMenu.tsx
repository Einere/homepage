import * as React from "react";
import {FunctionComponent} from "react";
import {NavBarMenuStyle} from "./NavBarMenu.style";
import {NavBarMenuItem} from "./NavBarMenuItem";

export const NavBarMenu: FunctionComponent<React.HTMLAttributes<HTMLDivElement>> = function ({className}) {
    const menu = ["about", "skill", "project"];
    const MenuItems = menu.map((text, index) => <NavBarMenuItem text={text} key={index}/>);

    return (
        <NavBarMenuStyle className={className}>
            {MenuItems}
        </NavBarMenuStyle>
    );
};
