import "./score.scss";
import React from "react";
import { useAppSelector } from "../../store";
import { selectScoreState } from "../../features/scoreSlice";

export const Score: React.FC = () => {
    const { leftScore, rightScore, leftColor, rightColor } =
        useAppSelector(selectScoreState);

    return (
        <div className="score">
            <span className="left-number" style={{ color: leftColor }}>
                {leftScore.toString().padStart(2, "0")}
            </span>
            <span className="colon">:</span>
            <span className="right-number" style={{ color: rightColor }}>
                {rightScore.toString().padStart(2, "0")}
            </span>
        </div>
    );
};
