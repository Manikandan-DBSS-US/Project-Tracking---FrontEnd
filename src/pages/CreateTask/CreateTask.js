import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createTask, errorValidationTask, handleChangeTask } from "../../app/feature/Task/taskSlice";
import FormInput from "../../common/FormInput";
import FormRadio from "../../common/FormRadio";
import FormText from "../../common/FormText";
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
  } = useSelector((store) => store.taskReducer);
  const dispatch = useDispatch()
  const changeHandler = (e) => {
    const { name, value } = e.target;
    console.log({value});
    dispatch(handleChangeTask({ name, value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      errorValidationTask(
        taskCreateValidation({
          name,
          description,
          dueDate,
          effort,
          isCompleted,
          isVerified,
        })
      )
    );
    const task = {
      name,
      description,
      dueDate,
      effort,
      isCompleted,
      isVerified,
    };
    // if (isEdit) {
    //   dispatch(updateUser({editJobId,task}));
    //   return;
    // }

    dispatch(createTask(task));
  };



  return (
    <div className="container mt-1">
      <div>
        <h3 className="text-primary">{isEdit ? "Edit User" : "Create User"}</h3>
      </div>
      <div className="m-3">
        <div className="row shadow-lg rounded-1 p-4 mx-auto">
          <div className="col">
            <form 
            onSubmit={submitHandler}
            className="row gap-3">
              <div className="col d-flex flex-column gap-3">
                <FormInput
                  type={"text"}
                  labelText={"Name"}
                  name={"name"}
                  value={name}
                  changeHandler={changeHandler}
                  alert={errorValue["name"]}
                />
                <FormText
                  labelText={"Description"}
                  name={"description"}
                  value={description}
                  changeHandler={changeHandler}
                  alert={errorValue["description"]}

                />

                <FormInput
                  labelText={"Due Date"}
                  type={"date"}
                  name={"dueDate"}
                  value={dueDate}
                  changeHandler={changeHandler}
                  alert={errorValue["dueDate"]}

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
