import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    token: ""
}
export const ReducerLogin = createSlice({
    name: "Login",
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        },
        loggout: (state, action) => {
            state.token = null
        },
    }
})

export const { setToken, loggout } = ReducerLogin.actions;
export default ReducerLogin.reducer;