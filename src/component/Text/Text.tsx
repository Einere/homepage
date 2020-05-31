import * as React from 'react';
import {FunctionComponent} from 'react';
import {TextStyle} from "./Text.style";
import {TextProp} from "../../@types";

export const Text: FunctionComponent<TextProp> = function ({
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
