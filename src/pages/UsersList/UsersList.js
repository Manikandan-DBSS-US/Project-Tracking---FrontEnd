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

const UserLists = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { token, users, isLoading } = useSelector((store) => store.userReducer);
  console.log({ token });
  useEffect(() => {
    dispatch(getAllUser());
  }, []);

  const editHandler = (id) => {
    navigate("/create-user")
    dispatch(setEdit())
    dispatch(editUser(id));
    
  };

  const deleteHandler = (id) => {
    dispatch(deleteUser(id));
  };

  console.log({ users });
  if (isLoading) return <h1>Loading .....</h1>;
  return (
    <div>
      <h3 className="text-primary">User Lists</h3>
      <div>
        <table className="table table-responsive">
          <thead className="table-danger">
            <tr>
              {[
                "User Name",
                "First Name",
                "Last Name",
                "Email",
                "DOB",
                "Gender",
                "Phone Number",
                "Actions",
              ].map((title, index) => (
                <th key={index}>{title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users &&
              users?.map((data, index) => (
                <tr key={index}>
                  <td>{data.userName}</td>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.email}</td>
                  <td>{data.dateOfBirth}</td>
                  <td>{data.gender}</td>
                  <td>{data.phoneNumber}</td>

                  <td className="">
                    <span
                      onClick={() => editHandler(data._id)}
                      className="mx-1 text-success"
                    >
                      <AiOutlineEdit />
                    </span>
                    <span
                      onClick={() => {
                        deleteHandler(data._id);
                      }}
                      className="mx-1 text-danger"
                    >
                      <HiOutlineTrash />
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserLists;
