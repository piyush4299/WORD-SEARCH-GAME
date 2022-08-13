import React, { useState } from "react";
import "./style.css";

const InputWordSection = ({ handleWordSearch, handleReset }) => {
  const [inputWord, setInputWord] = useState("");
  return (
    <div className="inputWordSection">
      <input
        type="text"
        placeholder="Enter the word"
        className="inputWord"
        onChange={(event) => setInputWord(event.target.value)}
        value={inputWord}
      />
      <button
        className="submitBtn"
        onClick={() => {
          handleWordSearch(inputWord);
          setInputWord("");
        }}
      >
        Submit
      </button>
      <button
        className="resetBtn"
        onClick={() => {
          handleReset();
          setInputWord("");
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default InputWordSection;
