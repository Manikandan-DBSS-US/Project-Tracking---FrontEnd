import customFetch from "../../axios"

export const createTaskThunk = async(url,task,thunkAPI) => {
    try {
        const resp = await customFetch.post(url,task)
        return resp.data;
    } catch (error) {
        console.log(error.response.data.msg);
       return thunkAPI.rejectWithValue(error.response.data.msg)
    }
}