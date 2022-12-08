import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  createTask,
  errorValidationTask,
  handleChangeTask,
  updateTask,
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
  const navigate = useNavigate();
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
        <form onSubmit={submitHandler}>
          <div className="card">
            <div className="card-body">
              <div className="row justify-content-center">
                <div className="col">
                  <FormInput
                    type={"text"}
                    labelText={"Name"}
                    name={"name"}
                    value={name}
                    changeHandler={changeHandler}
                    blurHandler={blurHandler}
                    alert={errorValue["name"]}
                  />
                </div>
                <div className="col">
                  <FormInput
                    labelText={"Due Date"}
                    type={"date"}
                    name={"dueDate"}
                    value={dueDate}
                    blurHandler={blurHandler}
                    changeHandler={changeHandler}
                    alert={errorValue["dueDate"]}
                  />
                </div>
                <div className="col">
                  <FormInput
                    labelText={"Effort"}
                    type={"date"}
                    name={"effort"}
                    value={effort}
                    blurHandler={blurHandler}
                    changeHandler={changeHandler}
                    alert={errorValue["effort"]}
                  />
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col">
                  <FormText
                    labelText={"Description"}
                    name={"description"}
                    value={description}
                    changeHandler={changeHandler}
                    blurHandler={blurHandler}
                    alert={errorValue["description"]}
                  />
                </div>
              </div>

              <div className="row justify-content-between">
                <div className="col">
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
                </div>
                <div className="col">
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
                </div>
                <div className="col">
                  <button type="submit" className="btn btn-success w-75">
                    {isEdit ? "Edit Task" : "Create Task"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
