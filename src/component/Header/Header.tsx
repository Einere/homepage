import * as React from 'react';
import {FunctionComponent, useEffect, useRef, useState} from 'react';
import {NavBar} from "../NavBar/NavBar";
import {HeaderStyle} from "./Header.style";
import {Scroll} from "../../@types";

export const Header: FunctionComponent = function () {
    const [timeoutId, setTimeoutId] = useState<number | null>(null);
    const lastScrollTopRef = useRef<number>(0);
    const scrollDelta = 5;
    const headerRef = useRef<HTMLElement>(null);

    function handelScroll() {
        const navBarMenu = document.querySelector('.nav-bar-menu');

        if (timeoutId === null) {
            setTimeoutId(
                setTimeout(() => {
                    const currentScrollTop = window.scrollY;
                    const currentHeader = headerRef.current;
                    const currentHeaderHeight = currentHeader?.offsetHeight!;
                    const lastScrollTop = lastScrollTopRef.current;

                    if (currentScrollTop === 0) {
                        currentHeader?.classList.remove(Scroll.down);
                        return;
                    }

                    if (Math.abs(lastScrollTop - currentScrollTop) <= scrollDelta) return;

                    if (currentScrollTop > currentHeaderHeight && currentScrollTop > lastScrollTop) {
                        currentHeader?.classList.add(Scroll.down);
                        navBarMenu?.classList.remove('show');
                    } else {
                        currentHeader?.classList.remove(Scroll.down);
                    }

                    lastScrollTopRef.current = currentScrollTop;
                    setTimeoutId(null);
                }, 250)
            );
        }
    }

    useEffect(() => {
        window.onscroll = handelScroll;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <HeaderStyle className="header-area" id="header" ref={headerRef}>
            <NavBar/>
        </HeaderStyle>
    );
};
