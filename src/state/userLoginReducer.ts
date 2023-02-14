import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {userAPI} from "../api/api";

export type UserType = {
    id: string,
    username: string,
    email: string,
    address: string | null
    me: boolean | null
}

type InitialStateType = {
    name: string,
    email: string,
    disabled: boolean,
    usersList: UserType[],
    getData: boolean
    disabledListButton: boolean
}

const InitialState: InitialStateType = {
    name: '',
    email: '',
    usersList: [],
    disabled: false,
    getData: false,
    disabledListButton: false
}

const slice = createSlice({
    name: 'user',
    initialState: InitialState,
    reducers: {
        DisabledAC(state, {payload}: PayloadAction<{answer: boolean}>) {
            state.disabled = payload.answer
        },
        getDataAC(state, {payload}: PayloadAction<{answer: boolean}>) {
            state.getData = payload.answer
        },
        setDataAC(state, {payload}: PayloadAction<{name: string, email: string, wallet: string, disabled: boolean, answer: boolean}>) {
            state.usersList.unshift({id: Date.now().toString(), username: payload.name, email: payload.email, address: payload.wallet, me: payload.answer})
            state.disabledListButton = payload.disabled
        },
        FilterUserList(state, {payload}: PayloadAction<{id: string, disabled: boolean}>) {
             state.usersList = state.usersList.filter(t => t.id !== payload.id)
             state.disabledListButton = payload.disabled
        }
    },
    extraReducers: (builder) => {
        builder.addCase(UsersDataTC.fulfilled, (state, {payload}) => {
            if (payload) {
                state.usersList = payload.user
                state.name = payload.name
                state.email = payload.email
                state.getData = payload.data
            }
        })
    }
})

export const userLoginreducer = slice.reducer
export const {DisabledAC, setDataAC, FilterUserList} = slice.actions

export const UsersDataTC = createAsyncThunk('user/getData',async (payload: {name: string, email: string}) => {
    try {
        const user = await userAPI.get()
        return ({user: user, name: payload.name, email: payload.email, data: true})
    } catch (e) {
        console.log(e)
    }
})