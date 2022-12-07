import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
} from "../../localStorage";
import {
  deleteUserThunk,
  getAccessTokenThunk,
  getAllUserThunk,
  loginThunk,
  logoutThunk,
  registerThunk,
  updateUserThunk,
} from "./userThunk";

const initialState = {
  isLoading: false,
  errorValue: {},
  user: getUserFromLocalStorage(),
  users: [],
  firstUser: localStorage.getItem("firstUser")
    ? localStorage.getItem("firstUser")
    : "",
  token: "",
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

  isEdit: false,
  editJobId:""
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

export const getAllUser = createAsyncThunk(
  "user/getAllUser",
  async (_, thunkAPI) => {
    return getAllUserThunk("user", thunkAPI);
  }
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (id, thunkAPI) => {
    return deleteUserThunk(`user/${id}`, thunkAPI);
  }
);
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async ({editJobId, user} ,thunkAPI) => {
    return updateUserThunk(`user/${editJobId}`,user, thunkAPI);
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
        token: "",
      };
    },
    errorValidation: (state, { payload }) => {
      state.errorValue = payload;
    },
    setEdit: (state) => {
      state.isEdit = true;
    },
    editUser:(state,{payload}) => {
      console.log(state.users);
      const result = state.users.find(user => user._id === payload)
      console.log({result});
      return {...state,editJobId:payload,...result}
    }
  },
  extraReducers: {
    //registerUser
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      resetValues();
      toast.success("User Created!");
    },
    [registerUser.rejected]: (state, { payload }) => {
      toast.error(payload);
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
      localStorage.setItem("firstUser", JSON.stringify(true));
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
      console.log({ payload });
      state.isLoading = false;
      state.token = payload.access_token;
    },
    [getAccessToken.rejected]: (state, { payload }) => {
      console.log(payload);
    },
    //getAccessToken
    [getAllUser.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllUser.fulfilled]: (state, { payload }) => {
      console.log({ payload });
      state.isLoading = false;
      state.users = payload.users;
    },
    [getAllUser.rejected]: (state, { payload }) => {
      console.log(payload);
    },
    //deleteUser
    [updateUser.pending]: (state) => {
      state.isLoading = true;
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      toast.success("User updated!")
      state.isEdit = false
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload)
    },
    //deleteUser
    [deleteUser.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteUser.fulfilled]: (state, { payload }) => {
      console.log({ payload });
      state.isLoading = false;
      toast.success("User deleted!")
    },
    [deleteUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload)
    },
  },
});

export const { submit, handleChange, resetValues, errorValidation, editUser, setEdit } =
  userSlice.actions;
export default userSlice.reducer;
