import { AppActionsType } from "./store";

export type LoadingActionsType = loadingSetACType

type loadingSetACType = ReturnType<typeof loadingSetAC>;

export type StateType = {
    showLoading: boolean
}

const initState = {
    showLoading: false,
}

const LOADING_SET_TYPE = "LOADING-SET-TYPE"

export const loadingReducer = (state: StateType = initState, action: AppActionsType): StateType => {
    switch (action.type) {
        case LOADING_SET_TYPE: {
            return {...state, showLoading: action.showLoading}
        }
        default:
            return state
    }
}

type LoadingOnACType = {
    type: typeof LOADING_SET_TYPE
    showLoading: boolean
}

export const loadingSetAC = (showLoading: boolean): LoadingOnACType => ({
    type: LOADING_SET_TYPE,
    showLoading,
})