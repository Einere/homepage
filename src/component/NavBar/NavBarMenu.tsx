import * as React from "react";
import {FunctionComponent} from "react";
import {NavBarMenuStyle} from "./NavBarMenu.style";
import {NavBarMenuItem} from "./NavBarMenuItem";

interface Props {
    className: string;
}

export const NavBarMenu: FunctionComponent<Props> = function ({className}) {
    const menu = ["about", "skill", "project"];
    const MenuItems = menu.map((text, index) => <NavBarMenuItem text={text} key={index}/>);

    return (
        <NavBarMenuStyle className={className}>
            {MenuItems}
        </NavBarMenuStyle>
    );
};
