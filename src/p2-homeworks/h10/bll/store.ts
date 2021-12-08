import { loadingSetAC, loadingReducer } from "./loadingReducer"
import { combineReducers, createStore, Store } from "redux";
import { themeReducer } from "../../h12/bll/themeReducer";

export type ActionTypes = ReturnType<typeof loadingSetAC>

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
})

export type AppStoreType = ReturnType<typeof reducers>

export let store: Store<AppStoreType, ActionTypes> = createStore(reducers)

// @ts-ignore
window.store = store // for dev
