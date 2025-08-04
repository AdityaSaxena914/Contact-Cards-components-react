import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/UserList/UserList";
import "./App.css"
const App = () => {
  const [users, setUsers] = useState([]);

  const handleAddUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <div>
      <AddUser onAddUser={handleAddUser} />
      <UserList users={users} />
    </div>
  );
};

export default App;
