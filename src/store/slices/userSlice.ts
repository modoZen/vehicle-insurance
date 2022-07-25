import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export interface User{
    name?: string
    celular: string | number
    plate: string
}

interface UserState{
    user: User | null
    isLogin: boolean
}

const initialState: UserState = {
    user: null,
    isLogin: true
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setUser: (state, action)=>{
            state.user = action.payload
            state.isLogin = true
        },
        removeUser: (state, action) =>{
            state.user = null,
            state.isLogin = false
        }
    }
})

export const userReducer = userSlice.reducer;

export const { setUser, removeUser} = userSlice.actions;
