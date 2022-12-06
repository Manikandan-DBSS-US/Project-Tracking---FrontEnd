import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./login.css"
import { BiLogIn } from "react-icons/bi";
import FormInput from "../../common/FormInput";
import {
  errorValidation,
  getAccessToken,
  handleChange,
  loginUser,
  resetValues,
  submit,
} from "../../app/feature/User/userSlice";
import { loginValidation } from "../../utils/Validation";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { userName, password, isSubmit, errorValue, firstUser } = useSelector(
    (store) => store.userReducer
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    dispatch(handleChange({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      userName,
      password,
    };
    dispatch(loginUser(user));

    // dispatch(
    //   errorValidation(
    //     loginValidation({
    //       userName,
    //       password,
    //     })
    //   )
    // );
    // dispatch(submit());
  };

  useEffect(() => {
    if (firstUser) {
      console.log("ohouadhihdohadoho");
      dispatch(resetValues());
      dispatch(getAccessToken())
      navigate("/");
    }
  }, [firstUser]);
  // useEffect(() => {
  //   if (Object.values(errorValue).length === 0 && isSubmit) {
  //     const user = {
  //       userName,
  //       password,
  //     };
  //     dispatch(loginUser(user));
  //     dispatch(resetValues());
  //   }
  // }, [isSubmit]);

  return (
    <div className="container mt-2">
      <div className="row justify-content-center">
        {/* Design Page */}
        <div className="col-lg-6 text-center mt-5 design-LoginPage">
          <div className="mt-5">
            <div>
              <h3 className="text-primary">login to your account</h3>
            </div>
            <img
              src="https://my.viciboxcenter.com/assets/media/svg/login.svg"
              className="w-75"
            />
          </div>
        </div>
        {/* Login Screen */}
        <div className="col-lg-5 col-sm-9 col-md-7 mt-5 LoginForm">
          <div className="p-2 mt-5">
            <div className="p-4 shadow-lg rounded-3">
              <form
                className="d-flex flex-column gap-3"
                onSubmit={handleSubmit}
              >
                <div className="text-center">
                  <h4>Login Now</h4>
                </div>
                <div className="text-center ">
                  <h1 className="text-primary">
                    <BiLogIn />
                  </h1>
                </div>
                <FormInput
                  type={"text"}
                  labelText={"User Name"}
                  name={"userName"}
                  value={userName}
                  changeHandler={changeHandler}
                  alert={errorValue["userName"]}
                  className="form-control"
                />

                <FormInput
                  type={"password"}
                  labelText={"Password"}
                  name={"password"}
                  value={password}
                  changeHandler={changeHandler}
                  alert={errorValue["password"]}
                />
                <div>
                  <button
                    className="form-control btn btn-primary"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
                <div className="d-flex justify-content-between">
                  <h6>Don't have an account Yet?</h6>
                  <h6 className="text-danger">Sign Up</h6>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
