import { useState } from "react";
import AddUser from "./userModule/AddUser";
import ShowUser from "./userModule/ShowUser";
import ShowUsers from "./userModule/ShowUser";

export default function App() {
    const initialUserData = {
      firstName:"Virat",
      lastName: "Kohli",
      age: 35,
      country: "India"
    };

    const [userData, setUserData] = useState([initialUserData]);

    const _onAddUserEvent = function(userObj) {
          userData.push(userObj);
          setUserData([...userData]);
    }
  return (
    <>
    <h3>React Js </h3>
        <AddUser _onAddUserEvent = {_onAddUserEvent.bind(this)}/>
        <ShowUser usersData= { userData } />
      </>
  )
        
}
