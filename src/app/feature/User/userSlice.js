import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
} from "../../localStorage";
import {
  getAccessTokenThunk,
  loginThunk,
  logoutThunk,
  registerThunk,
} from "./userThunk";

const initialState = {
  isLoading: false,
  errorValue: {},
  user: getUserFromLocalStorage(),
  firstUser:localStorage.getItem('firstUser'),
  token:"",
  isSubmit: false,
  userId: "",
  userName: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  dateOfBirth: "",
  gender: "",
  phoneNumber: "",
  role: "",
  isActive: "",
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    return registerThunk("user/register", user, thunkAPI);
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    console.log({ user });
    return loginThunk("user/login", user, thunkAPI);
  }
);

export const getAccessToken = createAsyncThunk(
  "user/getAccessToken",
  async (_, thunkAPI) => {
    return getAccessTokenThunk("user/refresh_token", thunkAPI);
  }
);

export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async (_, thunkAPI) => {
    return logoutThunk("user/logout", thunkAPI);
  }
);

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    submit: (state) => {
      state.isSubmit = true;
    },
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    resetValues: (state) => {
      return {
        ...state,
        userId: "",
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        dateOfBirth: "",
        gender: "",
        phoneNumber: "",
        role: "",
        isActive: "",
        token:""
      };
    },
    errorValidation: (state, { payload }) => {
      state.errorValue = payload;
    },
  },
  extraReducers: {
    //registerUser
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {},
    [registerUser.rejected]: (state, { payload }) => {
      console.log(payload);
    },
    //loginUser
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      console.log({ payload });
      state.isLoading = false;
      state.firstUser = true;
      // const { userExist } = payload;
      // console.log({ userExist });
      // state.isLoading = false;
      // state.user = userExist;
      // addUserToLocalStorage(userExist);
      localStorage.setItem('firstUser',JSON.stringify(true))
      toast.success(`User login!`);
    },
    [loginUser.rejected]: (state, { payload }) => {
      console.log({ payload });
      toast.error(payload);
    },
    //getAccessToken
    [getAccessToken.pending]: (state) => {
      state.isLoading = true;
    },
    [getAccessToken.fulfilled]: (state, { payload }) => {
      console.log({payload});
      state.isLoading = false;
      state.token = payload.access_token
    },
    [getAccessToken.rejected]: (state, { payload }) => {
      console.log(payload);
    },
  },
});

export const { submit, handleChange, resetValues, errorValidation } =
  userSlice.actions;
export default userSlice.reducer;
