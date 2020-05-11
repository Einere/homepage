import * as React from 'react';
import {FunctionComponent} from 'react';
import {SubTitle} from "../Title/SubTitle";
import {InterestedInStyle} from "./InterestdIn.style";

export const InterestedIn: FunctionComponent = function () {
    const title = 'INTERESTED IN';
    const interests = ["UI/UX 🖥", "Data Visualization 📈", "Functional Programming 𝑓","Writing 📝", "Calisthenics💪"];
    const Interests = interests.map((interest, i) => <li key={i}>{interest}</li>);

    return (
        <InterestedInStyle>
            <SubTitle title={title}/>
            <ul>
                {Interests}
            </ul>
        </InterestedInStyle>
    );
};

