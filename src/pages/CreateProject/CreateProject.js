import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Select from "react-select";

export const CreateProject = () => {
  const navigate = useNavigate("");

  const UserSchema = Yup.object().shape({
    projectName: Yup.string().required("Required"),
    projectDescription: Yup.string().required("Required"),
    clientName: Yup.string().required("Required"),
    projectStartDate: Yup.date().required("Required"),
    projectEndDate: Yup.date().required("Required"),
    technologiesUsed: Yup.array("").min(1, "Minimum Choose one").required(""),
    selectUsers: Yup.array()
      .min(1, "Mininmum Choose one user")
      .of(
        Yup.object().shape({
          label: Yup.string().required(),
          value: Yup.string().required(),
        })
      ),
  });

  return (
    <div>
      <Formik
        initialValues={{
          projectName: "",
          projectDescription: "",
          clientName: "",
          projectStartDate: "",
          projectEndDate: "",
          technologiesUsed: [],
          selectUsers: [],
        }}
        validationSchema={UserSchema}
        onSubmit={async (values) => {
          console.log(values);
          try {
            const data = await axios.post(
              "http://localhost:5000/api/v1/project/create",
              values
            );
            console.log(data);
          } catch (error) {
            console.log(error.message);
          }
        }}
      >
        {({ errors, touched, setFieldValue, setFieldTouched, values }) => (
          <div className="container mb-5 p-3">
            <h3 className="text-primary">Create Project</h3>
            <div className="row justify-content-center">
              <Form className="col-lg-5 col-md-6 col-sm-10 d-flex flex-column gap-2 rounded-4 shadow-lg p-5">
                <div>
                  <h6>
                    projectName <span className="text-danger">*</span>
                  </h6>
                  <Field name="projectName" className="form-control" />
                  {errors.projectName && touched.projectName ? (
                    <div className="text-danger">{errors.projectName}*</div>
                  ) : null}
                </div>
                <div>
                  <h6>
                    projectDescription <span className="text-danger">*</span>
                  </h6>
                  <Field
                    name="projectDescription"
                    type="text"
                    className="form-control"
                  />
                  {errors.projectDescription && touched.projectDescription ? (
                    <div className="text-danger">
                      {errors.projectDescription}*
                    </div>
                  ) : null}
                </div>
                <div>
                  <h6>
                    clientName <span className="text-danger">*</span>
                  </h6>
                  <Field
                    name="clientName"
                    type="text"
                    className="form-control"
                  />
                  {errors.clientName && touched.clientName ? (
                    <div className="text-danger">{errors.clientName}*</div>
                  ) : null}
                </div>
                <div>
                  <h6>
                    projectStartDate <span className="text-danger">*</span>
                  </h6>
                  <Field
                    name="projectStartDate"
                    type="date"
                    className="form-control"
                  />
                  {errors.projectStartDate && touched.projectStartDate ? (
                    <div className="text-danger">
                      {errors.projectStartDate}*
                    </div>
                  ) : null}
                </div>
                <div>
                  <h6>
                    projectEndDate <span className="text-danger">*</span>
                  </h6>
                  <Field
                    name="projectEndDate"
                    type="date"
                    className="form-control"
                  />
                  {errors.projectEndDate && touched.projectEndDate ? (
                    <div className="text-danger">{errors.projectEndDate}*</div>
                  ) : null}
                </div>

                <div>
                  <h6>
                    technologiesUsed <span className="text-danger">*</span>
                  </h6>
                  <div id="checkbox-group"></div>
                  <div
                    role="group"
                    aria-labelledby="checkbox-group"
                    className="d-flex flex-wrap gap-3"
                  >
                    <label>
                      <Field
                        type="checkbox"
                        name="technologiesUsed"
                        value="React.Js"
                      />
                      React.Js
                    </label>
                    <label>
                      <Field
                        type="checkbox"
                        name="technologiesUsed"
                        value="Angular"
                      />
                      Angular
                    </label>
                    <label>
                      <Field
                        type="checkbox"
                        name="technologiesUsed"
                        value="Dot net"
                      />
                      Dot net
                    </label>
                    <label>
                      <Field
                        type="checkbox"
                        name="technologiesUsed"
                        value="Java"
                      />
                      Java
                    </label>
                    <label>
                      <Field
                        type="checkbox"
                        name="technologiesUsed"
                        value="Node.Js"
                      />
                      Node.Js
                    </label>
                    <label>
                      <Field
                        type="checkbox"
                        name="technologiesUsed"
                        value="AWS"
                      />
                      Dot net
                    </label>
                    <label>
                      <Field
                        type="checkbox"
                        name="technologiesUsed"
                        value="Azure"
                      />
                      Azure
                    </label>
                  </div>
                  {errors.technologiesUsed && touched.technologiesUsed ? (
                    <div className="text-danger">
                      {errors.technologiesUsed}*
                    </div>
                  ) : null}
                </div>
                <MySelect
                  value={values.selectUsers}
                  onChange={setFieldValue}
                  onBlur={setFieldTouched}
                  error={errors.selectUsers}
                  touched={touched.selectUsers}
                />
                {errors.selectUsers && touched.selectUsers ? (
                  <div className="text-danger">{errors.selectUsers}*</div>
                ) : null}
                <button
                  type="submit"
                  className="form-control btn btn-outline-success fw-bold"
                >
                  Submit
                </button>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

const options = [
  { value: "Food", label: "Food" },
  { value: "Being Fabulous", label: "Being Fabulous" },
  { value: "Ken Wheeler", label: "Ken Wheeler" },
  { value: "ReasonML", label: "ReasonML" },
  { value: "Unicorns", label: "Unicorns" },
  { value: "Kittens", label: "Kittens" },
];

class MySelect extends React.Component {
  handleChange = (value) => {
    // this is going to call setFieldValue and manually update values.topcis
    this.props.onChange("selectUsers", value);
  };

  handleBlur = () => {
    // this is going to call setFieldTouched and manually update touched.topcis
    this.props.onBlur("selectUsers", true);
  };

  render() {
    return (
      <div style={{ margin: "1rem 0" }}>
        {/* <label htmlFor="color">Topics (select at least 3) </label> */}
        <Select
          id="color"
          options={options}
          isMulti={true}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          value={this.props.value}
        />
      </div>
    );
  }
}

export default CreateProject;
