import customFetch from "../../axios";

export const registerThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const loginThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error) {
    console.log({error});
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const getAccessTokenThunk = async (url,thunkAPI) => {
  try {
    const resp = await customFetch.post(url, null);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};


export const logoutThunk = async(url,thunkAPI) => {
    try {
        const resp = await customFetch.get(url);
        return resp.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
}