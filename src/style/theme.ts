import {DefaultTheme} from "custom-styled-components";

export const theme: DefaultTheme = {
    color: {
        bouquet: '#B17F94',
        lily: '#CCA7B4',
        wafer: '#DDC4C2',
        bizarre: '#EBDCD5',
        tasman: '#D1DDCD',
        transparentTasman: 'rgba(209, 221, 205, 0.5)',
        transparentWhite: 'rgba(255, 255, 255, 0.8)',
        transparentGray: 'rgba(0, 0, 0, 0.4)',
        transparentDimBlack: 'rgba(0, 0, 0, 0.6)',
        transparentBlack: 'rgba(0, 0, 0, 0.7)',
        title: 'linear-gradient(to right, #B17F94, #CCA7B4, #DDC4C2, #EBDCD5)',
        footer: 'linear-gradient(-45deg, rgba(209,221,205,1), rgb(204, 167, 180))',
    },
    size: {
        absoluteDefault: 16,
        borderRadius: 5,
        category: 32,
        desktopMinWidth: 1025,
        defaultWidth: 80,
        horizontalBarHeight: 10,

        lineHeight: 1.8,

        iconButton: 50,
        miniIcon: 25,
        image: 256,
        selfie: 300,
        projectWidth: 400,

        relativeDefault: '1rem',
        modalContent: '1.1rem',
        smallTitle: '1.5rem',
        subTitle: '2rem',
        title: '3.5rem',

        smallIcon: '2rem', // 혹은 32px
        bigIcon: '3rem', // 혹은 48px

        navBar: '5rem',
        mobileNavBarHeight: '3rem',
        shortHorizontalBar: '15rem',
        horizontalBar: '20rem',
    },
    spacing: {
        zero: 0,
        default: '1rem',
        normal: '2rem',
        wide: '5rem',
    },
    font: {
        korean: "'Noto Sans KR', sans-serif",
        english: "'Heebo', sans-serif",
    },
    shadow: {
        header: '0 1px 10px rgba(0, 0, 0, 0.3)',
        card: '0 6px 20px 0 rgba(0, 0, 0, 0.2)',
    },
    time: {
        transition: 0.5,
    }
};
