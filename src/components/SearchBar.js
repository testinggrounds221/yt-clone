import React, { useState } from "react";

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    onTermSubmit(term);
  };

  return (
    <div className=" search-bar ui segment">
      <div className="ui form">
        <div className="field">
          <label>Feel free to enter your search term and press enter</label>
          <form onSubmit={onFormSubmit}>
            <input
              type="text"
              onChange={(e) => {
                setTerm(e.target.value);
              }}
              value={term}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
