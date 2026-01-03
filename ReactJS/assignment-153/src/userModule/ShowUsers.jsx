export default function ShowUsers(props) {
  const userData = props.usersData;

  const onEditUserBtn = function (index) {
    props._onEditUserEvent(index);
  };

  const onDeleteUserBtn = function (index) {
    props._onDeleteUserEvent(index);
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <div className="card bg-body-tertiary">
            <div className="card-body">
              <h3>Show users</h3>
              <hr />
              {userData && userData.length ? (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First name</th>
                      <th>Last name</th>
                      <th>Age</th>
                      <th>Country</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userData.map(function (item, index) {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{item.firstName}</td>
                          <td>{item.lastName}</td>
                          <td>{item.age}</td>
                          <td>{item.country}</td>
                          <td>
                            <button
                              type="button"
                              onClick={onEditUserBtn.bind(this, index)}
                              className="btn btn-primary btn-sm"
                            >
                              Edit user
                            </button>&nbsp;
                            <button
                              type="button"
                              onClick={onDeleteUserBtn.bind(this, index)}
                              className="btn btn-danger btn-sm"
                            >
                              Delete user
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : (
                "No users found"
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
