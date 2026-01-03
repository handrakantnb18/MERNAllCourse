import { useState } from "react";
import AddUser from "./userModule/AddUser";
import ShowUsers from "./userModule/ShowUsers";
import EditUser from "./userModule/EditUser";

export default function App() {
  const initialUserData = {
    firstName: "Virat",
    lastName: "Kohli",
    age: 36,
    country: "India",
  };
  const [userData, setUserData] = useState([initialUserData]);
  const [editUserId, setEditUserId] = useState(null);
  const [view, setView] = useState("ADD");

  const _onAddUserEvent = function (userObj) {
    userData.push(userObj);
    setUserData([...userData]);
  };

  const _onEditUserEvent = function (index) {
    setEditUserId(index);
    setView("EDIT");
  };

  const _onUpdateUserEvent = function (userObj) {
    userData[editUserId] = userObj;
    setUserData([...userData]);
    setView("ADD");
  };

  const _onDeleteUserEvent = function (index) {
    userData.splice(index, 1);
    setUserData([...userData]);
    setView("ADD");
  };

  var viewComponent = "";
  if (view == "ADD") {
    viewComponent = <AddUser _onAddUserEvent={_onAddUserEvent.bind(this)} />;
  } else {
    viewComponent = (
      <EditUser
        currentUser={userData[editUserId]}
        _onUpdateUserEvent={_onUpdateUserEvent.bind(this)}
      />
    );
  }

  return (
    <>
      <div className="container">
        <h2>Welcome to React JS</h2> <hr />
        {viewComponent}
        <ShowUsers
          usersData={userData}
          _onEditUserEvent={_onEditUserEvent.bind(this)}
          _onDeleteUserEvent={_onDeleteUserEvent.bind(this)}
        />
      </div>
    </>
  );
}
