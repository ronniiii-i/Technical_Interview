import { useState, useEffect } from "react";

import Form from "./components/Form";
import Search from "./components/Search";
import Table from "./components/Table";

import "./App.scss";

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searched, setSearched] = useState(false);

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

  const handleSearch = (searchTerm) => {
    const filtered = users.filter(
      (user) =>
        user.fname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.lname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
    console.log(filtered);
    console.log(filteredUsers);
    if (searchTerm != "") {
      setSearched(true)
    } else (
      setSearched(false)
    )
  };

  return (
    <main>
      <Form
        users={users}
        addUser={addUser}
        updateUsers={updateUsers}
        editingUser={editingUser}
      />
      <Search handleSearch={handleSearch} />
      <Table
        users={users}
        det={filteredUsers.length > 0 ? "filtered" : "not"}
        filtered={filteredUsers}
        searched={searched}
        deleteUser={deleteUser}
        editUser={editUser}
      />
    </main>
  );
}

export default App;
