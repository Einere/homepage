import * as React from "react";
import {forwardRef} from "react";
import {NavBarMenuStyle} from "./NavBarMenu.style";
import {NavBarMenuItem} from "./NavBarMenuItem";

export const NavBarMenu = forwardRef<HTMLDivElement>((props, ref)=> {
    const menu = ["about", "skill", "project"];
    const MenuItems = menu.map((text, index) => <NavBarMenuItem text={text} key={index} ref={ref}/>);
    return (
        <NavBarMenuStyle className="nav-bar-menu" ref={ref}>
            {MenuItems}
        </NavBarMenuStyle>
    );
});
