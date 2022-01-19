import React, { useState } from "react";
import "./SearchBar.scss";

const SearchBar = () => {
  const [text, setText] = useState("");

  return (
    <div className="SearchBarContainer">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="SearchBarContainer__input"
      />
      <button className="SearchBarContainer__button">Guardar</button>
    </div>
  );
};

export default SearchBar;
