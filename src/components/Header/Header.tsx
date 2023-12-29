import "./header.scss";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { Switch } from "@fluentui/react-components";
import { selectClockState, setIsVisible } from "../../features/clockSlice";

export const Header: React.FC = () => {
    const dispatch = useAppDispatch();
    const { isVisible } = useAppSelector(selectClockState);

    return (
        <div className="header">
            <Switch label="Timer" checked={isVisible} onChange={(_ev, data) => dispatch(setIsVisible(data.checked))}/>
        </div>
    );
};
