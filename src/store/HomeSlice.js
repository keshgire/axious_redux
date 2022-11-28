import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
}
const HomeSlice = createSlice({
    name: 'HomeSlice',
    initialState,
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload)

        },
        remove: (state, action) => {
            state.value = state.value.filter((item) => item.id !== action.payload.id)

        },
        update: (state, action) => {
          state.value.map((item)=>{if(item.id===action.payload.id)item.name=action.payload.name})
        }
    }
})

export const { add, remove, update } = HomeSlice.actions;
export default HomeSlice.reducer;