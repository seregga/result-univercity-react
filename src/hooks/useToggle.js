import { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'NEXTVALUE':
            const idx = state.idx + 1 < state.arrValues.length ? state.idx + 1 : 0
            return { ...state, idx}
        case 'SETVALUE':
            return {arrValues: [action.value], idx: 0}
        default:
            throw new Error();
    }
}

export function useToggle(initialState = [false, true]) {
    const [state, dispatch] = useReducer(reducer, {
        arrValues: initialState,
        idx: 0
    })
    
    const toggle = (value) => {
        if (value !== undefined) {
            dispatch({ type: 'SETVALUE', value })
        } else {
            dispatch({ type: 'NEXTVALUE' })
        }
    }

    const val = state.arrValues[state.idx]
    return [val, toggle]
}