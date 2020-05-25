import * as React from 'react';
import {FunctionComponent} from 'react';
import {HistoryStyle} from "./History.style";
import {SubTitle} from "../Title/SubTitle";
import {historyData} from "../../data/historyieData";


export const History: FunctionComponent = function() {
    const title = "HISTORY";
    const historyParagraph = historyData.map((history, index) => {
        const start = history.period.start;
        const end = history.period?.end;
        const content = history.content;
         return (
             <p key={index}>{start}{end ? ` ~ ${end}` : ''} - {content}</p>
         )
    });

    return (
        <HistoryStyle className="history">
            <SubTitle title={title}/>
            {historyParagraph}
        </HistoryStyle>
    );
};
