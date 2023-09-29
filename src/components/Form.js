import { useState, useEffect } from "react";

function Form({ users, addUser, updateUsers, editingUser }) {
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setemail] = useState("");
  // const [count, setcount] = useState(0);

  useEffect(() => {
    if (editingUser) {
      setfName(editingUser.fname);
      setlName(editingUser.lname);
      setemail(editingUser.email);
    }
  }, [editingUser]);

  const handlefname = (e) => {
    setfName(e.target.value);
  };

  const handlelname = (e) => {
    setlName(e.target.value);
  };

  const handleemail = (e) => {
    setemail(e.target.value);
  };

  const isFormValid =
    fname.trim() !== "" && lname.trim() !== "" && email.trim() !== "";

  const formSubmit = (e) => {
    e.preventDefault();
    // setcount(count + 1)
    if (editingUser) {
      const updatedUsers = users.map((user) =>
        user.id === editingUser.id ? { ...user, fname, lname, email } : user
      );
      updateUsers(updatedUsers)
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    } else {
      const user = {
        id: Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000,
        fname,
        lname,
        email,
      };
      addUser(user);
    }
    setfName("");
    setlName("");
    setemail("");
  };

  return (
    <section className="form">
      <form onSubmit={formSubmit}>
        <input
          type="text"
          placeholder="First name"
          value={fname}
          onChange={handlefname}
        />
        <input
          type="text"
          placeholder="Last name"
          value={lname}
          onChange={handlelname}
        />
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={handleemail}
        />
        <button className="button button-primary" disabled={!isFormValid}>
          {editingUser ? "Update" : "Submit"}
        </button>
      </form>
    </section>
  );
}

export default Form;
