import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTask, editTask, getAllTask, setEditTask } from "../../app/feature/Task/taskSlice";
import EditDelete from "../../components/EditDelete";
import TableHeader from "../../components/TableHeader";
import { taskHeader } from "../../constants/TableHeaderData";
const TasksList = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((store) => store.taskReducer);
  const navigate = useNavigate();

  const editHandler = (id) => {
    navigate("/create-task");
    dispatch(setEditTask());
    dispatch(editTask(id));
  };

  const deleteHandler = (id) => {
    console.log({ id });
    dispatch(deleteTask(id));
  };

  useEffect(() => {
    dispatch(getAllTask());
  }, []);
  return (
    <div>
      <h3 className="text-primary">User Lists</h3>
      <div className="card">
        <div className="card-body">
          <table className="table table-responsive">
            <TableHeader headerData={taskHeader} />
            <tbody>
              {tasks &&
                tasks?.map((data, index) => (
                  <tr key={index}>
                    <td>{data._id}</td>
                    <td>{data.name}</td>
                    <td>{data.description}</td>
                    <td>{data.dueDate}</td>
                    <td>{data.effort}</td>
                    <td>{data.isCompleted}</td>
                    <td>{data.isVerified}</td>
                    <EditDelete
                      editHandler={() => editHandler(data._id)}
                      deleteHandler={() => deleteHandler(data._id)}
                    />
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TasksList;
