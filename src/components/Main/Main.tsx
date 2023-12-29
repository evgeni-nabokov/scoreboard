import "./main.scss";
import React from "react";
import { Score } from "../Score/Score";
import { useAppDispatch, useAppSelector } from "../../store";
import {
    decrementLeftScore,
    decrementRightScore,
    incrementLeftScore,
    incrementRightScore,
} from "../../features/scoreSlice";
import {
    decrementMinutes,
    decrementSeconds,
    incrementMinutes,
    incrementSeconds,
    setIsWorking,
    selectClockState
} from "../../features/clockSlice";
import { IncDec } from "../IncDec/IncDec";
import { Clock } from "../Clock/Clock";

export const Main: React.FC = () => {
    const dispatch = useAppDispatch();
    const { isVisible, isWorking } = useAppSelector(selectClockState);
    
    // const onPickColorLeftClick = (color: string) => dispatch(setLeftColor(color));
    // const onPickColorRightClick = (color: string) => dispatch(setLeftColor(color));
    // const onPickColorButtonLeftClick = () => dispatch(setIsOpen({ isOpen: true, mode: ColorPickerPanelMode.left }));
    // const onPickColorButtonRightClick = () => dispatch(setIsOpen({ isOpen: true, mode: ColorPickerPanelMode.right }));

    return (
        <div className="main">
            {isVisible && (
                <div className="clockContainer" >
                    <div className="leftSide">
                        <div className="clockButtonContainer">
                            {isWorking ? (
                                <button onClick={() => dispatch(setIsWorking(false))}>
                                    ⏸
                                </button>
                            ) : (
                                <button onClick={() => dispatch(setIsWorking(true))}>
                                    ▶
                                </button>
                            )}
                        </div>
                    </div>
                    <IncDec
                        onIncrementButtonClick={() => dispatch(incrementMinutes())}
                        onDecrementButtonClick={() => dispatch(decrementMinutes())}
                    />
                    <Clock />
                    <IncDec
                        onIncrementButtonClick={() => dispatch(incrementSeconds())}
                        onDecrementButtonClick={() => dispatch(decrementSeconds())}
                    />
                    <div className="rightSide">
                    </div>
                </div>
            )}
            <div className="scoreContainer">
                <IncDec
                    onIncrementButtonClick={() => dispatch(incrementLeftScore())}
                    onDecrementButtonClick={() => dispatch(decrementLeftScore())}
                />
                <Score/>
                <IncDec
                    onIncrementButtonClick={() => dispatch(incrementRightScore())}
                    onDecrementButtonClick={() => dispatch(decrementRightScore())}
                />
            </div>
        </div>
    );
};
