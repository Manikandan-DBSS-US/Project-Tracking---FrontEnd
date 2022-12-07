import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Select from "react-select";
import { useEffect, useState } from "react";

export const ProjectsListEdit = () => {
    
  const navigate = useNavigate("");

  const {id} = useParams();

  const [project, setProjects] = useState([]);

  const getProjectsList = async () => {
    try {
        const data = await axios.get(`http://localhost:5000/api/v1/project/getOneProject/${id}`);
        setProjects(data.data.project);
    } catch (error) {
        console.log(error.message);
    }
  }

  useEffect(() => {
    getProjectsList();
  },[])

  console.log(project);
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
      enableReinitialize 
        initialValues={{
          projectName: project.projectName,
          projectDescription: project.projectDescription,
          clientName: project.clientName,
          projectStartDate:  project.projectStartDate,
          projectEndDate: project.projectEndDate,
          technologiesUsed: project.technologiesUsed,
          selectUsers: project.selectUsers,
        }}
        validationSchema={UserSchema}
        onSubmit={async (values) => {
          try {
            const data = await axios.put(`http://localhost:5000/api/v1/project/update/${id}`, values);
            console.log(data);
            navigate("/projects-list")
          } catch (error) {
            console.log(error.message);
          }
        }}
      >
        {({ errors, touched, setFieldValue, setFieldTouched, values }) => (
          <div className="container mb-5 p-3">
            <h3 className="text-primary">Edit Project</h3>
            <div className="card">
              <Form className="row justify-content-center card-body">
                <div className="col d-flex flex-column gap-3">
                  <div>
                    <h6>
                      Project Name <span className="text-danger">*</span>
                    </h6>
                    <Field name="projectName" className="form-control" />
                    {errors.projectName && touched.projectName ? (
                      <div className="text-danger">{errors.projectName}*</div>
                    ) : null}
                  </div>
                  <div>
                    <h6>
                      Project Start Date <span className="text-danger">*</span>
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
                      Client Name <span className="text-danger">*</span>
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
                      Technologies <span className="text-danger">*</span>
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
                </div>
                <div className="col d-flex flex-column gap-3">
                  <div>
                    <h6>
                      Project Description <span className="text-danger">*</span>
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
                      Project End Date <span className="text-danger">*</span>
                    </h6>
                    <Field
                      name="projectEndDate"
                      type="date"
                      className="form-control"
                    />
                    {errors.projectEndDate && touched.projectEndDate ? (
                      <div className="text-danger">
                        {errors.projectEndDate}*
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <h6>
                      Select Users <span className="text-danger">*</span>
                    </h6>
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
                  </div>
                  <button
                    type="submit"
                    className="form-control btn btn-success fw-bold"
                  >
                    Update
                  </button>
                </div>
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

export default ProjectsListEdit;
