import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    token: ""
}
export const ReducerLogin = createSlice({
    name: "Login",
    initialState,
    reducers: {
        // action : (type ''; payload: tout ce quon veut )
        setToken: (state, action) => {
            state.token = action.payload
        },
        loggout: (state) => {
            state.token = null
        },
    }
})