export const CreateProject = () => {
  return (
    <div>
      <h3 className="text-primary">Create Project</h3>
      <div className="container">
        <div className="row justify-content-center mx-auto">
          <form className="col-lg-5 col-md-7 col-sm-8 border bg-light rounded-3 d-flex flex-column gap-2 p-3 mx-auto">
            <div>
              <h6 className="fw-bold">Project Name</h6>
              <input className="form-control" />
            </div>
            <div>
              <h6 className="fw-bold">Project Description</h6>
              <input className="form-control" />
            </div>
            <div>
              <h6 className="fw-bold">Client Name</h6>
              <input className="form-control" />
            </div>
            <div>
              <h6 className="fw-bold">Project Start Date</h6>
              <input className="form-control" type="date" />
            </div>
            <div>
              <h6 className="fw-bold">Project End Date</h6>
              <input className="form-control" type="date" />
            </div>
            <div className="d-flex flex-column">
              <div>
                <h6 className="fw-bold"> Technologies</h6>
              </div>
              <div className="d-flex gap-3">
                <div>
                  <input type="checkbox" /> React.Js
                </div>
                <div>
                  <input type="checkbox" /> Angular
                </div>
                <div>
                  <input type="checkbox" /> Node.Js
                </div>
                <div>
                  <input type="checkbox" /> Express.Js
                </div>
              </div>
            </div>
            <div>
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
