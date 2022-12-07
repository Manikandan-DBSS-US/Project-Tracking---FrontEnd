import {configureStore} from '@reduxjs/toolkit';
import userReducer from './feature/User/userSlice'
import taskReducer from './feature/Task/taskSlice'

export const store = configureStore({
    reducer:{
        userReducer,
        taskReducer
    }
});