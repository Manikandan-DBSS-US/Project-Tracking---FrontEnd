import axios from "axios";
import { useEffect, useState } from "react";

const ProjectsList = () => {
  const [project, setProject] = useState([]);

  const getProjects = async () => {
    try {
      const data = await axios.get(
        "http://localhost:5000/api/v1/project/getAllProjects"
      );
      setProject(data.data.projects);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div>
      <h3 className="text-primary">Project Lists</h3>
      <div className="card">
        <div className="card-body">
          <table className="table table-responsive">
            <thead className="bg-light">
              <tr>
                <th>Project Id</th>
                <th>Project Name</th>
                <th>Project Description</th>
                <th>Client Name</th>
                <th>Project Start Date</th>
                <th>Project End Date</th>
                <th>Project Technologies</th>
                <th>Selected Users</th>
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
                    <td>{element.projectEndDate}</td>
                    <td>
                      {element.technologiesUsed
                        ? element.technologiesUsed.map((item) => item).join(",")
                        : ""}
                    </td>
                    <td>
                      {element.selectUsers.map((item) => item.value).join(",")}
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
