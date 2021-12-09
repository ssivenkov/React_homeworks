import { loadingReducer, LoadingActionsType } from "./loadingReducer"
import { combineReducers, createStore, Store } from "redux";
import { ThemeActionsType, themeReducer } from "../../h12/bll/themeReducer";

export type AppActionsType = LoadingActionsType
    | ThemeActionsType

const RootReducer = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
})

export type AppReducersType = ReturnType<typeof RootReducer>

export let store: Store<AppReducersType, AppActionsType> = createStore(RootReducer)

// @ts-ignore
window.store = store // for dev
