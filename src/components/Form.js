
function Form() {
  return (
    <section className="form">
      <form>
        <input
          type="text"
          placeholder="First name"
        />
        <input
          type="text"
          placeholder="Last name"
        />
        <input
          type="text"
          placeholder="Email address"
        />
        <button className="button">Submit</button>
      </form>
    </section>
  );
}

export default Form;
