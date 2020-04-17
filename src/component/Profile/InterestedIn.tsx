import * as React from 'react';
import {FunctionComponent} from 'react';
import {SubTitle} from "../Title/SubTitle";
import {InterestedInStyle} from "./InterestdIn.style";

export const InterestedIn: FunctionComponent = function () {
    const title = 'INTERESTED IN';
    const interests = ["UI/UX 🖥", "Data Visualization 📈", "Writing 📝", "Calisthenics💪"];
    const Interests = interests.map(interest => <li>{interest}</li>);

    return (
        <InterestedInStyle>
            <SubTitle title={title}/>
            <ul>
                {Interests}
            </ul>
        </InterestedInStyle>
    );
};

