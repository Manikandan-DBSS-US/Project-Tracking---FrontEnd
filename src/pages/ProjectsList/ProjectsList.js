import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { LoadingSpinner } from "../../components/LoadingSpinner.js";

const ProjectsList = () => {
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate("");

  const [project, setProject] = useState([]);

  const getProjects = async () => {
    try {
      const data = await axios.get(
        "http://localhost:5000/api/v1/project/getAllProjects"
      );
      setProject(data.data.projects);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  // delete Project
  const deleteProject = async ({ projectName, _id }) => {
    if (window.confirm(`Are You Sure Delete This Project ${projectName}`)) {
      try {
        await axios.delete(
          `http://localhost:5000/api/v1/project/delete/${_id}`,
          { _id }
        );
        alert("Deleted Successfully");
        getProjects();
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div>
      <div className="d-flex gap-3">
        <h3 className="text-primary">Project Lists</h3>
        {loading && <LoadingSpinner />}
      </div>
      <div className="card">
        <div className="card-body">
          <table className="table table-responsive table-hover">
            <thead className="bg-light">
              <tr>
                <th>Project Id</th>
                <th>ProjectName</th>
                <th>ProjectDescription</th>
                <th>ClientName</th>
                <th>ProjectStartDate</th>
                <th>ProjectEndDate</th>
                <th>ProjectTechnologies</th>
                <th>SelectedUsers</th>
                <th>options</th>
              </tr>
            </thead>
            <tbody>
              {project.map((element) => {
                return (
                  <tr>
                    <td>{element._id}</td>
                    <td>{element.projectName}</td>
                    <td>{element.projectDescription}</td>
                    <td>{element.clientName}</td>
                    <td>
                      {new Date(element.projectStartDate).getFullYear()} -
                      {new Date(element.projectStartDate).getMonth()} -
                      {new Date(element.projectStartDate).getDate()}
                    </td>
                    <td>
                      {new Date(element.projectEndDate).getFullYear()} -
                      {new Date(element.projectEndDate).getMonth()} -
                      {new Date(element.projectEndDate).getDate()}
                    </td>
                    <td>
                      {element.technologiesUsed
                        ? element.technologiesUsed.map((item) => item).join(" , ")
                        : ""}
                    </td>
                    <td>
                      {element.selectUsers.map((item) => item.value).join(" , ")}
                    </td>
                    <td>
                      <div className="d-flex gap-2">
                        <button
                          className="btn text-warning"
                          onClick={() =>
                            navigate("/projects-list/" + element._id)
                          }
                        >
                          <AiFillEdit />
                        </button>
                        <button
                          className="btn text-danger"
                          onClick={() => deleteProject(element)}
                        >
                          <AiFillDelete />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ProjectsList;
