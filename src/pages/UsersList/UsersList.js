import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUser } from "../../app/feature/User/userSlice";

const UserLists = () => {
  const dispatch = useDispatch();
  const { token, users } = useSelector((store) => store.userReducer);
  console.log({ token });
  useEffect(() => {
    dispatch(getAllUser());
  }, []);

  console.log({ users });
  return (
    <div>
      <h3 className="text-primary">User Lists</h3>
      <div>
        <table className="table table-responsive">
          <thead className="table-danger">
            <tr>
              {[
                "User Id",
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
                  <td>{data.userId}</td>
                  <td>{data.userName}</td>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.email}</td>
                  <td>{data.dateOfBirth}</td>
                  <td>{data.gender}</td>
                  <td>{data.phoneNumber}</td>

                  <td className="btn">
                    <button>edit</button>
                    <button>delete</button>
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
