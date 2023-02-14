import {combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {configureStore} from "@reduxjs/toolkit";
import {userLoginreducer} from "./userLoginReducer";


const rootReducer = combineReducers({
    userLogin: userLoginreducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk)
})

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
