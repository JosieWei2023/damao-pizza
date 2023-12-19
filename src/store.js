import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";

// step 4: create the store
const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default store;