import { useState } from "react";
import "../Login/Login.css";
import { BiLogIn } from "react-icons/bi";

export const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

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
                <div>
                  <h6>Email</h6>
                  <input
                    className="form-control"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <h6>Password</h6>
                  <input
                    className="form-control"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                  />
                </div>
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
