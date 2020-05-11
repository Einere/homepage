import * as React from 'react';
import {FooterStyle} from "./Footer.style";

export const Footer: React.FunctionComponent = function () {
    const copyright = 'Copyright 2020. Einere. All right reserved.';

    return (
        <FooterStyle>
            <p>
                {copyright}
            </p>
        </FooterStyle>
    );
};
