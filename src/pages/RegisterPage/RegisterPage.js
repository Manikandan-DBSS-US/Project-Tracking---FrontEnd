import { useEffect, useState } from "react";
import FormInput from "../../common/FormInput";
import FormRadio from "../../common/FormRadio";
import { useSelector, useDispatch } from "react-redux";
import {
  errorValidation,
  handleChange,
  registerUser,
  resetValues,
  submit,
} from "../../app/feature/User/userSlice";
import { registerValidation } from "../../utils/Validation";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const {
    userId,
    userName,
    firstName,
    lastName,
    email,
    password,
    dateOfBirth,
    gender,
    phoneNumber,
    role,
    isActive,
    isSubmit,
    errorValue
  } = useSelector((store) => store.userReducer);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    dispatch(handleChange({ name, value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      errorValidation(
        registerValidation({
          userId,
          userName,
          firstName,
          lastName,
          email,
          password,
          dateOfBirth,
          gender,
          phoneNumber,
          role,
          isActive,
          isSubmit
        })
      )
    );
   
    dispatch(submit());
  };
  useEffect(() => {
    if (Object.values(errorValidation).length === 0 && isSubmit) {
      const user = {
        userId,
        userName,
        firstName,
        lastName,
        email,
        password,
        dateOfBirth,
        gender,
        phoneNumber,
        role,
        isActive,
      };
      dispatch(registerUser(user));
      dispatch(resetValues())
    }
  }, [isSubmit]);

  return (
    <div className="container mt-1">
      <div>
        <h3 className="text-primary">Sign Up</h3>
      </div>
      <div className="m-3">
        <div className="row shadow-lg rounded p-4 mx-auto">
          <div className="col">
            <form onSubmit={submitHandler} className="row gap-3">
              <div className="col d-flex flex-column gap-3">
                <FormInput
                  type={"text"}
                  labelText={"User Id"}
                  name={"userId"}
                  value={userId}
                  changeHandler={changeHandler}
                  alert={errorValue["userId"]}
                />
                <FormInput
                  type={"text"}
                  labelText={"First Name"}
                  name={"firstName"}
                  value={firstName}
                  changeHandler={changeHandler}
                  alert={errorValue["firstName"]}
                />
                <FormInput
                  type={"text"}
                  labelText={"Email"}
                  name={"email"}
                  value={email}
                  changeHandler={changeHandler}
                  alert={errorValue["email"]}
                />
                <FormInput
                  type={"text"}
                  labelText={"Phone Number"}
                  name={"phoneNumber"}
                  value={phoneNumber}
                  changeHandler={changeHandler}
                  alert={errorValue["phoneNumber"]}
                />
                <FormInput
                  type={"date"}
                  labelText={"D.O.B"}
                  name={"dateOfBirth"}
                  value={dateOfBirth}
                  changeHandler={changeHandler}
                  alert={errorValue["dateOfBirth"]}
                />
              </div>
              <div className="col d-flex flex-column gap-3">
                <FormInput
                  type={"text"}
                  labelText={"User Name"}
                  name={"userName"}
                  value={userName}
                  changeHandler={changeHandler}
                  alert={errorValue["userName"]}
                />
                <FormInput
                  type={"text"}
                  labelText={"Last Name"}
                  name={"lastName"}
                  value={lastName}
                  changeHandler={changeHandler}
                  alert={errorValue["lastName"]}
                />
                <FormInput
                  type={"password"}
                  labelText={"Password"}
                  name={"password"}
                  value={password}
                  changeHandler={changeHandler}
                  alert={errorValue["password"]}
                />
                <FormRadio
                  type={"radio"}
                  labelText={"Gender"}
                  name={"gender"}
                  itemList={[
                    {
                      name: "Male",
                      value: "male",
                    },
                    { name: "Female", value: "female" },
                  ]}
                  changeHandler={changeHandler}
                  alert={errorValue["gender"]}
                />
                {/* <div>
                  <h6>Gender</h6>
                  <div className="d-flex gap-2">
                    <div>
                      <input name="gender" value={"male"} type="radio" onChange={changeHandler} /> Male
                    </div>
                    <div>
                      <input name="gender" value={"female"} type="radio" onChange={changeHandler} /> Female
                    </div>
                  </div>
                </div> */}
              </div>
              <div>
                <input type="checkbox" />
                <span>Terms and Conditions apply</span>
              </div>
              <button type="submit" className="btn btn-success w-50">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
