import "./clock.scss";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { selectClockState } from "../../features/clockSlice";
import { decrementSeconds } from "../../features/clockSlice";

export const Clock: React.FC = () => {
    const dispatch = useAppDispatch();
    const { minutes, seconds, isWorking } = useAppSelector(selectClockState);

    useEffect(() => {
        let intervalId = 0;
        if (isWorking) {
            intervalId = window.setInterval(() => dispatch(decrementSeconds()), 1000);
        } else {
            clearInterval(intervalId)
        }
        return () => clearInterval(intervalId);
    });

    return (
        <div className="clock">
            <span className="minutes">
                {minutes.toString().padStart(2, "0")}
            </span>
            <span className="colon">:</span>
            <span className="seconds">
                {seconds.toString().padStart(2, "0")}
            </span>
        </div>
    );
};
