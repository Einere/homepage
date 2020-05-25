import * as React from "react";
import {FunctionComponent, useCallback, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {Logo} from '../Logo/Logo';
import {NavBarStyle} from "./NavBar.style";
import {NavBarMenu} from "./NavBarMenu";

export const NavBar: FunctionComponent = function () {
    const [isOpen, setIsOpen] = useState(false);

    const onClickHandle = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]);

    return (
        <NavBarStyle>
            <Logo width={150}/>
            <FontAwesomeIcon icon={faBars} className="nav-bar-menu-icon" onClick={onClickHandle}/>
            <NavBarMenu className={isOpen ? 'nav-bar-menu show' : 'nav-bar-menu'}/>
        </NavBarStyle>
    );
};

