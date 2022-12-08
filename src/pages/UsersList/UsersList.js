import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteUser,
  editUser,
  getAllUser,
  setEdit,
} from "../../app/feature/User/userSlice";
import { HiOutlineTrash } from "react-icons/hi";
import { AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import TableHeader from "../../components/TableHeader";
import { userHeader } from "../../constants/TableHeaderData";
import EditDelete from "../../components/EditDelete";
import { LoadingSpinner } from "../../components/LoadingSpinner.js";

const UserLists = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, users, isLoading } = useSelector((store) => store.userReducer);
  console.log({ token });
  useEffect(() => {
    dispatch(getAllUser());
  }, []);

  const editHandler = (id) => {
    navigate("/create-user");
    dispatch(setEdit());
    dispatch(editUser(id));
  };

  const deleteHandler = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div>
      <div className="d-flex gap-3">
        <h3 className="text-primary">User Lists</h3>
        {isLoading && <LoadingSpinner />}
      </div>
      <div className="card">
        <div className="card-body">
          <table className="table table-responsive">
            <TableHeader headerData={userHeader} />
            <tbody>
              {users &&
                users?.map((data, index) => (
                  <tr key={index}>
                    <td>{data._id}</td>
                    <td>{data.userName}</td>
                    <td>{data.firstName}</td>
                    <td>{data.lastName}</td>
                    <td>{data.email}</td>
                    <td>
                      {data.dateOfBirth &&
                        data.dateOfBirth.substring(
                          0,
                          data.dateOfBirth.indexOf("T")
                        )}
                    </td>

                    <td>{data.gender}</td>
                    <td>{data.phoneNumber}</td>

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

export default UserLists;
