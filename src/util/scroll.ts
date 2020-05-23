function inOutQuart(n: number) {
    n *= 2;
    if (n < 1) return 0.5 * Math.pow(n, 4);
    return -0.5 * ((n -= 2) * Math.pow(n, 2) * n - 2);
}

export function scroll(element: Element) {
    let start = 0;
    const targetTop = element && element ? element.getBoundingClientRect().top : 0; // relative
    const firstPos = window.pageYOffset || document.documentElement.scrollTop; // absolute
    let currentPos = 0; // absolute

    function showAnimation(timestamp: number) {
        if (start === 0) start = timestamp || new Date().getTime();

        const elapsed = timestamp - start;
        const progress = elapsed / 500; // animation duration 500ms
        const easePercentage = parseFloat(inOutQuart(progress).toFixed(2));

        currentPos = (targetTop === 0) ? (firstPos - (firstPos * easePercentage)) : (firstPos + (targetTop * easePercentage));
        window.scrollTo(0, currentPos);

        if (
            // 최상단으로 가야 하는 경우
            (targetTop === 0 && currentPos <= 0) ||
            // 아래로 스크롤해서 목표 지점을 지나친 경우
            (targetTop > 0 && currentPos >= firstPos + targetTop) ||
            // 위로 스크롤해서 목표 지점을 지나친 경우
            (targetTop < 0 && currentPos <= firstPos + targetTop)
        ) {
            cancelAnimationFrame(start);
            currentPos = 0;
            return;
        }
        window.requestAnimationFrame(showAnimation);
    }

    window.requestAnimationFrame(showAnimation);
}
