import React from "react";
import "./app.scss";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { ColorPickerPanel } from "../ColorPickerPanel/ColorPickerPanel";

export const App = () => {
    return (
        <div className="app">
            <Header />
            <Main />
            <ColorPickerPanel />
        </div>
    );
};
