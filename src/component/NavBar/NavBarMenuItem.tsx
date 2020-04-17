import * as React from "react";
import {FunctionComponent} from "react";
import {NavBarMenuItemStyle} from "./NavBarMenuItem.style";

interface Prop {
    text: string;
}

export const NavBarMenuItem: FunctionComponent<Prop> = function ({text}) {
    function onClickHandle(e: React.MouseEvent<HTMLDivElement>) {
        const target = e.target as HTMLElement;
        const element = document.querySelector(`#${target.textContent}`);
        if(element) element.scrollIntoView();
    }

    return (
        <NavBarMenuItemStyle className="nav-bar-menu-item" onClick={onClickHandle}>
            {text}
        </NavBarMenuItemStyle>
    );
};

