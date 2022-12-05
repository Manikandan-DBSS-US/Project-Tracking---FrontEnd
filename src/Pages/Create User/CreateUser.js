export const CreateUser = () => {
  return (
    <div className="container mt-1">
      <div>
        <h3 className="text-primary">Create User</h3>
      </div>
      <div className="m-3">
        <div className="row shadow-lg rounded-3 p-4 mx-auto">
          <div className="col">
            <form className="row gap-3">
              <div className="col d-flex flex-column gap-3">
                <div>
                  <h6>User Id</h6>
                  <input className="form-control" placeholder="UserId" />
                </div>
                <div>
                  <h6>First Name</h6>
                  <input className="form-control" placeholder="First Name" />
                </div>
                <div>
                  <h6>Email</h6>
                  <input className="form-control" placeholder="Email" />
                </div>
                <div>
                  <h6>Phone Number</h6>
                  <input className="form-control" placeholder="Phone Number" />
                </div>
                <div>
                  <h6>Date</h6>
                  <input className="form-control" type="date" />
                </div>
              </div>
              <div className="col d-flex flex-column gap-3">
                <div>
                  <h6>User Name</h6>
                  <input className="form-control" placeholder="User Name" />
                </div>
                <div>
                  <h6>Last Name</h6>
                  <input className="form-control" placeholder="Last Name" />
                </div>
                <div>
                  <h6>Password</h6>
                  <input className="form-control" placeholder="Password" />
                </div>
                <div>
                  <h6>Gender</h6>
                  <div className="d-flex gap-2">
                    <div>
                      <input type="radio" /> Male
                    </div>
                    <div>
                      <input type="radio" /> Female
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <input type="checkbox" />{" "}
                <span>Terms and Conditions apply</span>
              </div>
              <button className="btn btn-success w-50">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
