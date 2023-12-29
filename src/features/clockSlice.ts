import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

interface ClockState {
    isVisible: boolean;
    isWorking: boolean;
    minutes: number;
    seconds: number;
}

const initialState: ClockState = {
    isVisible: true,
    isWorking: false,
    minutes: 0,
    seconds: 0,
};

const incMin = (state: Draft<ClockState>) => {
    if (state.minutes === 99) {
        state.minutes = 0;
    } else {
        state.minutes += 1;
    }
};

const decMin = (state: Draft<ClockState>) => {
    if (state.minutes === 0) {
        state.minutes = 99;
    } else {
        state.minutes -= 1;
    }
};

export const clockSlice = createSlice({
    name: "clock",
    initialState,
    reducers: {
        setIsVisible(state, action: PayloadAction<boolean>) {
            state.isVisible = action.payload;
        },
        setIsWorking(state, action: PayloadAction<boolean>) {
            state.isWorking = action.payload;
        },
        resetClock(state) {
            state.minutes = 0;
            state.seconds = 0;
        },
        incrementMinutes(state) {
            incMin(state);
        },
        decrementMinutes(state) {
            decMin(state);
        },
        incrementSeconds(state) {
            if (state.seconds === 59) {
                state.seconds = 0;
                incMin(state);
            } else {
                state.seconds += 1;
            }
        },
        decrementSeconds(state) {
            if (state.seconds === 0) {
                state.seconds = 59;
                decMin(state);
            } else {
                state.seconds -= 1;
            }
        },
    },
});

interface stateWithClock {
    [clockSlice.name]: ClockState;
}

export const selectClockState = (state: stateWithClock) =>
    state[clockSlice.name];

export const {
    resetClock,
    setIsVisible,
    setIsWorking,
    incrementMinutes,
    decrementMinutes,
    incrementSeconds,
    decrementSeconds,
} = clockSlice.actions;
