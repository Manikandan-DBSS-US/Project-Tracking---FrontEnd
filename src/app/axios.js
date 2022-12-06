import axios from 'axios';
import { getUserFromLocalStorage } from './localStorage';

const customFetch = axios.create({
    baseURL:'/api/v1'
});


customFetch.interceptors.request.use(
    config => {
        const user = getUserFromLocalStorage();
        if(user){
            config.headers['Authorization'] = `Bearer ${user.token}`
        }
        return config;
    }
);


export const checkUnAuthorizedResponse  = (error, thunkAPI) => {
    return thunkAPI.rejectWithValue(error.response.data.msg)
};

export default customFetch;