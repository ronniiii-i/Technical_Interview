import { useState, useEffect } from "react";

import Form from "./components/Form";
import Search from "./components/Search";
import Table from "./components/Table";

import "./App.scss";

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const addUser = (user) => {
    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };
  const updateUsers = (users) => {
    setUsers(users);
    setEditingUser(null);
  };

  const editUser = (id) => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userToEdit = storedUsers.find((user) => user.id === id);
    if (userToEdit) {
      setEditingUser(userToEdit);
    }
  };

  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <main>
      <Form users={users} addUser={addUser} updateUsers={updateUsers} editingUser={editingUser} />
      <Search />
      <Table users={users} deleteUser={deleteUser} editUser={editUser} />
    </main>
  );
}

export default App;
