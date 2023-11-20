import { configureStore } from "@reduxjs/toolkit"

import { ReducerLogin } from "@/_Redux/Reducer/ReducerLogin"
import { ReducerUser } from "@/_Redux/Reducer/ReducerUser"



export const store = configureStore({
    reducer: {
        Login: ReducerLogin.reducer,
        User: ReducerUser.reducer
    }
})