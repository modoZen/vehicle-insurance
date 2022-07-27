import { createSlice } from "@reduxjs/toolkit"
import { ICoverage } from "../../pages/MakePlan"

interface IState{
    list: ICoverage[],
    baseMount: number
}

const initialState: IState = {
    list: [],
    baseMount: 20
}

const coverageSlice = createSlice({
    name: 'coverage',
    initialState,
    reducers: {
        addCoverage: (state, action)=>{
            state.list.push(action.payload);
            console.log(state.list.length)
        },
        removeCoverage: (state, action)=>{
            state.list = state.list.filter(item=>item.title != action.payload.title);
        },
        clearCoverages: (state)=>{
            state.list = [];
        }
    }
})

export const { addCoverage, removeCoverage, clearCoverages } = coverageSlice.actions;

export const coverageReducer = coverageSlice.reducer;