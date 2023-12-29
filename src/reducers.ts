import { combineReducers } from "redux";
import { clockSlice } from "./features/clockSlice";
import { scoreSlice } from "./features/scoreSlice";
import { colorPickerPanelSlice } from "./features/colorPickerPanelSlice";

export const rootReducer = combineReducers({
    [clockSlice.name]: clockSlice.reducer,
    [scoreSlice.name]: scoreSlice.reducer,
    [colorPickerPanelSlice.name]: colorPickerPanelSlice.reducer,
});
