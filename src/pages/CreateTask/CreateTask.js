import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom';
import {
  createTask,
  errorValidationTask,
  handleChangeTask,
  updateTask
} from "../../app/feature/Task/taskSlice";

import FormInput from "../../components/FormInput";
import FormRadio from "../../components/FormRadio";
import FormText from "../../components/FormText";
import { taskCreateValidation } from "../../utils/Validation";

const CreateTask = () => {
  const {
    errorValue,
    name,
    description,
    dueDate,
    effort,
    isCompleted,
    isVerified,
    isEdit,
    editTaskId,
  } = useSelector((store) => store.taskReducer);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    const { name, value } = e.target;
    dispatch(handleChangeTask({ name, value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const errors = taskCreateValidation({
      name,
      description,
      dueDate,
      effort,
      isCompleted,
      isVerified,
    });
    if (Object.keys(errors).length) {
      dispatch(errorValidationTask(errors));
      return;
    }
    dispatch(errorValidationTask({}));

    const task = {
      name,
      description,
      dueDate,
      effort,
      isCompleted,
      isVerified,
    };
    if (isEdit) {
      dispatch(updateTask({ editTaskId, task }));
      navigate("/tasks-list");
      return;
    }

    dispatch(createTask(task));
  };
  useEffect(() => {
    dispatch(errorValidationTask({}));
  }, []);

  const blurHandler = (e) => {
    const errors = taskCreateValidation({
      name,
      description,
      dueDate,
      effort,
      isCompleted,
      isVerified,
    });
    console.log({ errors });
    if (Object.keys(errors).length) {
      dispatch(errorValidationTask(errors));
      return;
    }
  };
  return (
    <div className="container  mb-5 p-3">
      <h3 className="text-primary">{isEdit ? "Edit Task" : "Create Task"}</h3>
      <div className="m-3">
        <div className="row  shadow-lg rounded-1 p-4 mx-auto">
          <div className="col   ">
            <form onSubmit={submitHandler} className="row  gap-3">
              <div className="col d-flex flex-column gap-3">
                <FormInput
                  type={"text"}
                  labelText={"Name"}
                  name={"name"}
                  value={name}
                  changeHandler={changeHandler}
                  blurHandler={blurHandler}
                  alert={errorValue["name"]}
                />
                <FormText
                  labelText={"Description"}
                  name={"description"}
                  value={description}
                  changeHandler={changeHandler}
                  blurHandler={blurHandler}
                  alert={errorValue["description"]}
                />

                <FormInput
                  labelText={"Due Date"}
                  type={"date"}
                  name={"dueDate"}
                  value={dueDate}
                  blurHandler={blurHandler}
                  changeHandler={changeHandler}
                  alert={errorValue["dueDate"]}
                />
                <FormInput
                  labelText={"Effort"}
                  type={"date"}
                  name={"effort"}
                  value={effort}
                  blurHandler={blurHandler}
                  changeHandler={changeHandler}
                  alert={errorValue["effort"]}
                />

                <FormRadio
                  type={"radio"}
                  labelText={"Is Completed"}
                  name={"isCompleted"}
                  itemList={[
                    {
                      name: "Yes",
                      value: "yes",
                    },
                    { name: "No", value: "no" },
                  ]}
                  blurHandler={blurHandler}
                  changeHandler={changeHandler}
                  alert={errorValue["isCompleted"]}
                />
                <FormRadio
                  type={"radio"}
                  labelText={"Is Verified"}
                  name={"isVerified"}
                  itemList={[
                    {
                      name: "Yes",
                      value: "yes",
                    },
                    { name: "No", value: "no" },
                  ]}
                  blurHandler={blurHandler}
                  changeHandler={changeHandler}
                  alert={errorValue["isVerified"]}
                />
                {/* <div>
                  <h6>Gender</h6>
                  <div className="d-flex gap-2">
                    <div>
                      <input
                        name="gender"
                        value={"male"}
                        type="radio"
                        onChange={changeHandler}
                      />{" "}
                      Male
                    </div>
                    <div>
                      <input
                        name="gender"
                        value={"female"}
                        type="radio"
                        onChange={changeHandler}
                      />{" "}
                      Female
                    </div>
                  </div>
                  {errorValue["gender"] && (
                    <p className={` ${errorValue["gender"] && "text-danger"}`}>
                      {errorValue["gender"]}
                    </p>
                  )}
                </div> */}
                <button type="submit" className="btn btn-success w-50">
                  {isEdit ? "Edit Task" : "Create Task"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
