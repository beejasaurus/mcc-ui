// Actions
const ACTION = 'mcc/core/ACTION';

// Reducer
export const initialState = {};

export default function reducer (state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

// Selectors
export const getCore = (state) => state.core;

// Emitters
export const doAction = () => ({
    type: ACTION
});