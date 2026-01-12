import React from "react";

const SearchBar = ({ handleSearch, searchValue, setSearchValue }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="search"
          placeholder="Search"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
