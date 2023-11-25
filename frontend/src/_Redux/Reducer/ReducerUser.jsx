import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    userName: null,
    firstname: "",
}
export const ReducerUser = createSlice({
    name: "User",
    initialState,
    reducers: {
        // action : (type ''; payload: tout ce quon veut )
        setUpdateProfile: (state, action) => {
            state.userName = action.payload
        },
        setValueProfile: (state, action) => {
            state.firstname = action.payload
        },
    }
})