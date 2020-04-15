import * as React from 'react';
import {FunctionComponent, HTMLAttributes} from 'react';
import {TextStyle} from "./Text.style";

interface Prop {
    text: string;
    fontSize?: number;
    textAlign?: string;
    fontFamily?: string;
    margin?: string;
    padding?: string;
    letterSpacing?: number;
}

export const Text: FunctionComponent<Prop & HTMLAttributes<HTMLDivElement>> = function ({
        text,
        className,
        fontSize= 1,
        textAlign = 'inherit',
        fontFamily,
        margin= 'unset',
        padding= 'unset',
        letterSpacing = 1,
    }) {
    return (
        <TextStyle
            className={className}
            fontSize={fontSize}
            textAlign={textAlign}
            fontFamily={fontFamily}
            margin={margin}
            padding={padding}
            letterSpacing={letterSpacing}
        >
            {text}
        </TextStyle>
    );
};
