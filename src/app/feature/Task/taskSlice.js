import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { createTaskThunk } from "./taskThunk";

const initialState = {
    errorValue:{},
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
      editTask:(state,{payload}) => {
        const result = state.tasks.find(task => task._id === payload)
        console.log({result});
        return {...state,editTaskId:payload,...result}
      }
  },
  extraReducers: {
    // createTask
    [createTask.pending]: (state) => {
      state.isLoading = true;
    },
    [createTask.fulfilled]: (state, payload) => {
      console.log({ payload });
    },
    [createTask.rejected]: (state, {payload}) => {
        console.log({payload});
      toast.error(payload);
    },
  },
});

export const {handleChangeTask,errorValidationTask} = taskSlice.actions;
export default taskSlice.reducer;