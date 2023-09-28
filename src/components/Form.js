import { useState } from "react";

function Form({ addUser }) {
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setemail] = useState("");
  // const [count, setcount] = useState(0);

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
    const user = {
      id: Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000,
      fname,
      lname,
      email,
    };
    addUser(user);
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
          type="text"
          placeholder="Email address"
          value={email}
          onChange={handleemail}
        />
        <button className="button" disabled={!isFormValid}>
          Submit
        </button>
      </form>
    </section>
  );
}

export default Form;
