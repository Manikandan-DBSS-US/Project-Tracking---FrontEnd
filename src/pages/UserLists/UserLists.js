const UserLists = () => {
  return (
    <div>
      <h3 className="text-primary">User Lists</h3>
      <div>
        <table className="table table-responsive">
          <thead className="table-danger">
            <tr>
              <th>User Id</th>
              <th>User Name</th>
              <th>Password</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Gender</th>
              <th>D.O.B</th>
              <th>Is Active</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>User</td>
              <td>User</td>
              <td>User</td>
              <td>User</td>
              <td>User</td>
              <td>User</td>
              <td>User</td>
              <td>User</td>
              <td>User</td>
              <td>User</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default UserLists;