import { loadingSetAC, loadingReducer } from "./loadingReducer"
import { combineReducers, createStore, Store } from "redux";

export type ActionTypes = ReturnType<typeof loadingSetAC>

const reducers = combineReducers({
    loading: loadingReducer,
})

export type AppStoreType = ReturnType<typeof reducers>

export let store: Store<AppStoreType, ActionTypes> = createStore(reducers)

// @ts-ignore
window.store = store // for dev
