import * as React from 'react';
import {FunctionComponent} from 'react';
import {InformationStyle} from "./Information.style";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faHome, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faCalendarAlt} from "@fortawesome/free-regular-svg-icons";
import {informationData} from "../../data/informationData";

export const Information: FunctionComponent = function () {
    const {
        birth,
        phone,
        email,
        location
    } = informationData;

    return (
        <InformationStyle>
            <li>
                <FontAwesomeIcon icon={faCalendarAlt} className="info birth"/>
                {birth}
            </li>
            <li>
                <FontAwesomeIcon icon={faPhone} className="info phone"/>
                {phone}
            </li>
            <li>
                <FontAwesomeIcon icon={faEnvelope} className="info email"/>
                {email}
            </li>
            <li>
                <FontAwesomeIcon icon={faHome} className="info location"/>
                {location}
            </li>
        </InformationStyle>
    );
};
