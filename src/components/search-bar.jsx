import React, { useRef } from "react";

export const SearchBar = ({ setData, setKeyWord, getData, targetRef, setvisibleCountResults }) => {
  const textRef = useRef();

  return (
    <form className="wiki-form">
      <div className="search-container">
        <label htmlFor="search-input">Tekst szukaj:</label>
        <input
          id="search-input"
          className="area"
          ref={targetRef}
          onChange={(evt) => {
            if (evt.target.value === "") {
              setData(null);
            }
            getData(0);
            setvisibleCountResults(0)
          }}
          type="search"
          name="search"
          placeholder="na przykład: React"
        ></input>
      </div>

      <div className="key-word-container">
        <label htmlFor="key-word">Tekst podświetlenia:</label>
        <input
          className="area"
          id="key-word"
          ref={textRef}
          onChange={(evt) => {
            if (evt.target.value === "") {
              setKeyWord("");
            }
          }}
          name="key-word"
          type="text"
          placeholder={"na przykład: framework"}
        ></input>

        <button
          className="btn"
          onClick={(evt) => {
            evt.preventDefault();
            setKeyWord(textRef.current.value);
          }}
        >
          Podświetl wszystkie
        </button>
      </div>
    </form>
  );
};
