import { redirect } from "react-router-dom";
import customFetch from "../../axios";
import { getAllUser, resetValues } from "./userSlice";



export const registerThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);
    thunkAPI.dispatch(resetValues());
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const loginThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);
    thunkAPI.dispatch(resetValues());
    return resp.data;
  } catch (error) {
    console.log({ error });
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const getAccessTokenThunk = async (url, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, null);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const logoutThunk = async (url, thunkAPI) => {
  try {
    const resp = await customFetch.get(url);

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
export const getAllUserThunk = async (url, thunkAPI) => {
  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
export const updateUserThunk = async (url,user, thunkAPI) => {
  console.log(user);
  try {
    const resp = await customFetch.put(url,user);
    thunkAPI.dispatch(resetValues());
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
export const deleteUserThunk = async (url, thunkAPI) => {
  try {
    const resp = await customFetch.delete(url);
    thunkAPI.dispatch(getAllUser())
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
