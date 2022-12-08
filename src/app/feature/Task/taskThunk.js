import customFetch from "../../axios"
import { getAllTask, resetValuesTask } from "./taskSlice";

export const createTaskThunk = async(url,task,thunkAPI) => {
    try {
        const resp = await customFetch.post(url,task)
        thunkAPI.dispatch(resetValuesTask())
        return resp.data;
    } catch (error) {
        console.log(error.response.data.msg);
       return thunkAPI.rejectWithValue(error.response.data.msg)
    }
};

export const getAllTaskThunk = async (url, thunkAPI) => {
    try {
      const resp = await customFetch.get(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  };


  export const updateTaskThunk = async (url,task, thunkAPI) => {
    try {
      const resp = await customFetch.put(url,task);
    thunkAPI.dispatch(resetValuesTask());
    thunkAPI.dispatch(getAllTask())
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  };


  export const deleteTaskThunk = async (url, thunkAPI) => {
    try {
      const resp = await customFetch.delete(url);
      thunkAPI.dispatch(getAllTask())
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  };
  