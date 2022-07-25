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
    user: sessionStorage.getItem('user')!==null?JSON.parse(sessionStorage.getItem('user')!):null  ,
    isLogin: Boolean(sessionStorage.getItem('user')!==null?JSON.parse(sessionStorage.getItem('user')!):null)
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setUser: (state, action)=>{
            sessionStorage.setItem('user', JSON.stringify(action.payload))
            state.user = action.payload
            state.isLogin = true
        },
        removeUser: (state) =>{
            sessionStorage.removeItem('user')
            state.user = null,
            state.isLogin = false
        }
    }
})

export const userReducer = userSlice.reducer;

export const { setUser, removeUser} = userSlice.actions;
