import {useRef, useState} from "react";
import {Scroll} from "../@types";

export function useReactive() {
    const [timeoutId, setTimeoutId] = useState<number | null>(null);
    const lastScrollTopRef = useRef<number>(0);
    const scrollDelta = 5;
    const reactiveElementHref = useRef<HTMLElement>(null);

    function handleScroll() {
        const navBarMenu = document.querySelector('.nav-bar-menu');

        if (timeoutId === null) {
            setTimeoutId(
                setTimeout(() => {
                    const currentScrollTop = window.scrollY;
                    const currentHeader = reactiveElementHref.current;
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

    return {
        reactiveElementHref,
        handleScroll
    };
}

