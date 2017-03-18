// Actions
const ADD_SAMPLE = 'mcc/samples/ADD_SAMPLE';
const REMOVE_SAMPLE = 'mcc/samples/REMOVE_SAMPLE';
const SELECT_SAMPLE = 'mcc/samples/SELECT_SAMPLE';

// Types
export const SAMPLE = 'mcc/dnd/samples/SAMPLE';

// Reducer
export const initialSample = {
    name: '',
};

export function sample(state = initialSample, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export const initialState = {
    selected: false,
    samples: [
        {id: 0, name: 'Sample 1', location: 'Main'},
        {id: 1, name: 'Sample 2', location: 'Main'},
        {id: 2, name: 'Sample 3', location: 'Main'},
        {id: 3, name: 'Sample 4', location: 'Main'},
        {id: 4, name: 'Sample 5', location: 'Main'},
        {id: 5, name: 'Sample 6', location: 'Main'},
    ]
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SAMPLE:
            return {
                ...state,
                samples: [
                    ...state.samples,
                    sample(undefined, action),
                ]
            };

        case SELECT_SAMPLE:
            return {
                ...state,
                selected: action.payload.id
            };
        
        default:
            return state;
    }
}

// Selectors
export const getSamples = (state) => state.samples.samples;
export const getSelectedSample = (state) => state.samples.selected;

// Emitters
export const addSample = (id) => ({
    type: ADD_SAMPLE
});

export const removeSample = (id) => ({
    type: REMOVE_SAMPLE
});

export const selectSample = (id) => ({
    type: SELECT_SAMPLE,
    payload: {
        id
    }
});