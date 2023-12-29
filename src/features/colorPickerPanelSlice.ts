import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum ColorPickerPanelMode {
    left = "left",
    right = "right",
}

interface ColorPickerPanelState {
    isOpen: boolean;
    mode?: ColorPickerPanelMode;
}

const initialState: ColorPickerPanelState = {
    isOpen: false,
};

export const colorPickerPanelSlice = createSlice({
    name: "colorPickerPanel",
    initialState,
    reducers: {
        setIsOpen(state, action: PayloadAction<ColorPickerPanelState>) {
            state.isOpen = action.payload.isOpen;
            if (action.payload.mode) {
                state.mode = action.payload.mode;
            }
        },
    },
});

interface stateWithColorPickerPanel {
    [colorPickerPanelSlice.name]: ColorPickerPanelState;
}

export const selectColorPickerPanelState = (state: stateWithColorPickerPanel) =>
    state[colorPickerPanelSlice.name];

export const { setIsOpen } = colorPickerPanelSlice.actions;
