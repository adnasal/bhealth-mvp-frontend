import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from './reducers/CounterSlice';
import { postAPI } from "../services/PostService";
import { signupAPI } from "../services/signupService";
import { labAPI } from "../services/labService";
import { authAPI } from "../services/authService";
import { appointmentAPI } from "../services/appointmentService";

const rootReducer = combineReducers({
    CounterReducer,
    [postAPI.reducerPath]: postAPI.reducer,
    [signupAPI.reducerPath]: signupAPI.reducer,
    [labAPI.reducerPath]: labAPI.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
    [appointmentAPI.reducerPath]: appointmentAPI.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(postAPI.middleware,
                    signupAPI.middleware,
                    labAPI.middleware,
                    authAPI.middleware,
                    appointmentAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
