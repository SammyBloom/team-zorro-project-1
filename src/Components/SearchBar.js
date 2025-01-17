import React, { useState } from "react";

function SearchBar() {
  const [heading, setHeading] = useState(
    <img src="/images/side hustle.png" width="200px" alt="" />
  );

  const [inputValue, setInputValue] = useState("");

  const updateInputValue = (event) => {
    const newInputValue = event.target.value;
    setInputValue(newInputValue);
  };

  const handleFormSubmit = (event) => {
    const newHeading = inputValue;
    setInputValue("");

    newHeading
      ? setHeading(<h1>{newHeading}</h1>)
      : setHeading(<img src="/images/side hustle.png" width="200px" alt="" />);

    event.preventDefault();
  };
  return (
    <div className="centralComponent">
      <div className="sideHustle">{heading}</div>
      <div>
        <form action="" onSubmit={handleFormSubmit} method="" role="search">
          <input
            type="search"
            className="search"
            placeholder="Enter some text here"
            onChange={updateInputValue}
            value={inputValue}
          ></input>
          <img
            id="search-icon"
            onClick={handleFormSubmit}
            src="/images/iconmonstr-search-thin.svg"
            alt=""
          />
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
