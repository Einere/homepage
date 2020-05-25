import * as React from 'react';
import {FunctionComponent} from 'react';
import {SubTitle} from "../Title/SubTitle";
import {InterestedInStyle} from "./InterestdIn.style";
import {interestedInData} from "../../data/interestedInData";

export const InterestedIn: FunctionComponent = function () {
    const {
        title,
        interests
    } = interestedInData;

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

