declare module 'custom-styled-components' {
    export interface DefaultTheme {
        color: {
            bouquet: string,
            lily: string,
            wafer: string,
            bizarre: string,
            tasman: string,
            transparentTasman: string,
            transparentWhite: string,
            transparentGray: string;
            transparentDimBlack: string;
            transparentBlack: string,
            title: string,
            footer: string,
        },
        size: {
            absoluteDefault: number,
            borderRadius: number,
            category: number,
            desktopMinWidth: number,
            defaultWidth: number,
            horizontalBarHeight: number,

            lineHeight: number,

            iconButton: number,
            miniIcon: number,
            image: number,
            selfie: number,
            projectWidth: number,

            relativeDefault: string,
            modalContent: string,
            smallTitle: string,
            subTitle: string,
            title: string,

            smallIcon: string, // 혹은 32px
            bigIcon: string, // 혹은 48px

            navBar: string,
            mobileNavBarHeight: string,
            shortHorizontalBar: string,
            horizontalBar: string,
        },
        spacing: {
            zero: number,
            default: string,
            normal: string,
            wide: string,
        },
        font: {
            korean: string,
            english: string,
        },
        shadow: {
            header: string,
            card: string,
        },
        time: {
            transition: number,
        }
    }
}

