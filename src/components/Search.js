import React, { useState } from "react";

function Search({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    handleSearch(value);
    console.log(value);
  };

  return (
    <section className="search flex column align-center justify-center">
      <input
        type="text"
        placeholder="Search by name or email"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </section>
  );
}

export default Search;
