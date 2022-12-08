import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { updateUserThunk } from "../User/userThunk";
import { createTaskThunk, deleteTaskThunk, getAllTaskThunk } from "./taskThunk";

const initialState = {
  errorValue: {},
  isLoading: "",
  name: "",
  description: "",
  dueDate: "",
  effort: "",
  isCompleted: "",
  isVerified: "",
  tasks: [],
  isEdit: "",
  editTaskId: "",
};

export const createTask = createAsyncThunk(
  "task/createTask",
  async (user, thunkAPI) => {
    return createTaskThunk("task/create-task", user, thunkAPI);
  }
);

export const getAllTask = createAsyncThunk(
  "task/getAllTask",
  async (_, thunkAPI) => {
    return getAllTaskThunk("task", thunkAPI);
  }
);

export const updateTask = createAsyncThunk(
  "task/updateTask",
  async ({editJobId, task} ,thunkAPI) => {
    return updateUserThunk(`user/${editJobId}`,task, thunkAPI);
  }
)

export const deleteTask = createAsyncThunk(
  "user/deleteTask",
  async (id, thunkAPI) => {
    return deleteTaskThunk(`task/${id}`, thunkAPI);
  }
);

const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    handleChangeTask: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    errorValidationTask: (state, { payload }) => {
      state.errorValue = payload;
    },
    resetValuesTask: (state) => {
      return {
        ...state,
        name: "",
        description: "",
        dueDate: "",
        effort: "",
        isCompleted: "",
        isVerified: "",
        isEdit: "",
        editTaskId: "",
      };
    },
    setEditTask: (state) => {
      state.isEdit = true;
    },
    editTask: (state, { payload }) => {
      const result = state.tasks.find((task) => task._id === payload);
      console.log({ result });
      return { ...state, editTaskId: payload, ...result };
    },
  },
  extraReducers: {
    // createTask
    [createTask.pending]: (state) => {
      state.isLoading = true;
    },
    [createTask.fulfilled]: (state, payload) => {
      state.isLoading = false;
      toast.success("New Task Added!");
    },
    [createTask.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    //getAllTask
    [getAllTask.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllTask.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.tasks = payload.tasks;
    },
    [getAllTask.rejected]: (state, { payload }) => {
      console.log(payload);
      state.isLoading = false;
      toast.error(payload)
    },
      //updateTask
      [updateTask.pending]: (state) => {
        state.isLoading = true;
      },
      [updateTask.fulfilled]: (state, { payload }) => {
        state.isLoading = false;
        toast.success("User updated!")
        state.isEdit = false
      },
      [updateTask.rejected]: (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload)
      },
    //deleteTask
    [deleteTask.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteTask.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      toast.success("User deleted!")
    },
    [deleteTask.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload)
    },
  },
});

export const { handleChangeTask, errorValidationTask , resetValuesTask,setEditTask,editTask} = taskSlice.actions;
export default taskSlice.reducer;
