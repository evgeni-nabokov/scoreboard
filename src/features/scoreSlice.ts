import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ScoreState {
    leftScore: number;
    rightScore: number;
    leftColor: string;
    rightColor: string;
}

const initialState: ScoreState = {
    leftScore: 0,
    rightScore: 0,
    leftColor: "lightgray",
    rightColor: "lightgray",
};

export const scoreSlice = createSlice({
    name: "score",
    initialState,
    reducers: {
        resetScore(state) {
            state.leftScore = 0;
            state.rightScore = 0;
        },
        incrementLeftScore(state) {
            if (state.leftScore === 99) {
                state.leftScore = 0;
            } else {
                state.leftScore += 1;
            }
        },
        decrementLeftScore(state) {
            if (state.leftScore === 0) {
                state.leftScore = 99;
            } else {
                state.leftScore -= 1;
            }
        },
        incrementRightScore(state) {
            if (state.rightScore === 99) {
                state.rightScore = 0;
            } else {
                state.rightScore += 1;
            }
        },
        decrementRightScore(state) {
            if (state.rightScore === 0) {
                state.rightScore = 99;
            } else {
                state.rightScore -= 1;
            }
        },
        setLeftColor(state, action: PayloadAction<string>) {
            state.leftColor = action.payload;
        },
        setRightColor(state, action: PayloadAction<string>) {
            state.rightColor = action.payload;
        },
    },
});

interface stateWithScore {
    [scoreSlice.name]: ScoreState;
}

export const selectScoreState = (state: stateWithScore) =>
    state[scoreSlice.name];

export const {
    resetScore,
    incrementLeftScore,
    decrementLeftScore,
    incrementRightScore,
    decrementRightScore,
    setLeftColor,
    setRightColor,
} = scoreSlice.actions;
