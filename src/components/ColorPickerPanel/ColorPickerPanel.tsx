import React from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import {
    ColorPickerPanelMode,
    selectColorPickerPanelState,
    setIsOpen,
} from "../../features/colorPickerPanelSlice";
import {
    Button,
    DrawerBody,
    DrawerHeader,
    DrawerHeaderTitle,
    OverlayDrawer,
} from "@fluentui/react-components";
import { Dismiss24Regular } from "@fluentui/react-icons";
import { CirclePicker, ColorResult } from "react-color";
import { availableColors } from "./constants";
import { setLeftColor, setRightColor } from "../../features/scoreSlice";

export const ColorPickerPanel: React.FC = () => {
    const dispatch = useAppDispatch();
    const { isOpen, mode } = useAppSelector(selectColorPickerPanelState);

    const onChange = (color: ColorResult) => {
        dispatch(
            mode === ColorPickerPanelMode.left
                ? setLeftColor(color.hex)
                : setRightColor(color.hex)
        );
        dispatch(setIsOpen({ isOpen: false }));
    };

    return (
        <OverlayDrawer
            open={isOpen}
            position={mode === ColorPickerPanelMode.left ? "start" : "end"}
            style={{ width: "325px" }}
        >
            <DrawerHeader>
                <DrawerHeaderTitle
                    action={
                        <Button
                            appearance="subtle"
                            aria-label="Close"
                            icon={<Dismiss24Regular />}
                            onClick={() =>
                                dispatch(setIsOpen({ isOpen: false }))
                            }
                        />
                    }
                >
                    {`Pick color for the ${mode} team`}
                </DrawerHeaderTitle>
            </DrawerHeader>

            <DrawerBody>
                <div style={{ marginTop: "1em" }}>
                    <CirclePicker
                        width="100%"
                        circleSize={76}
                        colors={availableColors}
                        onChange={onChange}
                    />
                </div>
            </DrawerBody>
        </OverlayDrawer>
    );
};
