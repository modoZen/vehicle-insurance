import { createSlice } from "@reduxjs/toolkit";

interface UiState{
    loading:boolean
}

const initialState: UiState = {
    loading: false
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers:{
        toogleLoading: (state)=>{
            state.loading = !state.loading
            console.info(state.loading)
        }
    }
})

export const uiReducer = uiSlice.reducer;

export const { toogleLoading } = uiSlice.actions;