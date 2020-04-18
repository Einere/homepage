import * as React from "react";
import {FunctionComponent, useCallback, useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {Logo} from '../Logo/Logo';
import {NavBarStyle} from "./NavBar.style";
import {NavBarMenu} from "./NavBarMenu";

export const NavBar: FunctionComponent = function () {
    const navBarMenuRef = useRef<HTMLDivElement>(null);

    const onClickHandle = useCallback(() => {
        const current = navBarMenuRef.current;
        if(current) {
            if(current.classList.contains('show')) {
                current.classList.remove('show');
            }
            else {
                current.classList.add('show');
            }
        }
    }, []);

    return (
        <NavBarStyle>
            <Logo width={150}/>
            <FontAwesomeIcon icon={faBars} className="nav-bar-menu-icon" onClick={onClickHandle}/>
            <NavBarMenu ref={navBarMenuRef}/>
        </NavBarStyle>
    );
};

