import * as React from "react";
import {FunctionComponent} from "react";
import {NavBarMenuItemStyle} from "./NavBarMenuItem.style";
import {scroll} from "../../util/scroll";

interface Prop {
    text: string;
}

export const NavBarMenuItem: FunctionComponent<Prop> = function ({text}) {
    function onClickHandle(e: React.MouseEvent<HTMLDivElement>) {
        const isSafari = /constructor/i.test(window.HTMLElement.toString()) || (function (p) {
            return p.toString() === "[object SafariRemoteNotification]";
            // @ts-ignore
        })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
        const target = e.target as HTMLElement;
        const element = document.querySelector(`#${target.textContent}`);

        // safari
        if (isSafari && element) scroll(element);
        // chrome
        if (element) element.scrollIntoView();
    }

    return (
        <NavBarMenuItemStyle className="nav-bar-menu-item" onClick={onClickHandle}>
            {text}
        </NavBarMenuItemStyle>
    );
};
