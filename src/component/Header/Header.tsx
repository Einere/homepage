import * as React from 'react';
import {FunctionComponent, useEffect} from 'react';
import {NavBar} from "../NavBar/NavBar";
import {HeaderStyle} from "./Header.style";
import {useReactive} from "../../hook/useReactive";

export const Header: FunctionComponent = function () {
    const {
        reactiveElementHref,
        handleScroll,
    } = useReactive();

    useEffect(() => {
        window.onscroll = handleScroll;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <HeaderStyle className="header-area" id="header" ref={reactiveElementHref}>
            <NavBar/>
        </HeaderStyle>
    );
};
