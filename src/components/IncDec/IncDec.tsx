import "./incdec.scss";
import React from "react";

interface ScoreManagementParams {
    onIncrementButtonClick: () => void;
    onDecrementButtonClick: () => void;
}

export const IncDec: React.FC<ScoreManagementParams> = ({
    onIncrementButtonClick, onDecrementButtonClick,
}) => {
    return (
        <div className="incdec">
            <div className="inc">
                <button onClick={onIncrementButtonClick}>▲</button>
            </div>
            <div className="dec">
                <button onClick={onDecrementButtonClick}>▼</button>
            </div>
        </div>
    );
};
