import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteTask,
  editTask,
  getAllTask,
  setEditTask,
} from "../../app/feature/Task/taskSlice";
import EditDelete from "../../components/EditDelete";
import { Loading } from "../../components/Loading";
import TableHeader from "../../components/TableHeader";
import { taskHeader } from "../../constants/TableHeaderData";
const TasksList = () => {
  const dispatch = useDispatch();
  const { tasks,isLoading } = useSelector((store) => store.taskReducer);
  const navigate = useNavigate();

  const editHandler = (id) => {
    navigate("/create-task");
    console.log({id});
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
  if (isLoading) return <Loading />;

  return (
    <div>
      <h3 className="text-primary">Tasks List</h3>
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
                    <td>
                      {data.dueDate &&
                        data.dueDate.substring(0, data.dueDate.indexOf("T"))}
                    </td>
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
