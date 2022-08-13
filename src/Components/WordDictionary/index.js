import React from "react";
import "./style.css";

const WordDictionary = ({ wordsList, highLightWords }) => {
  return (
    <div className="wordDictionary">
      <p className="dictionaryTitle">Find the words</p>
      <div className="wordList">
        {wordsList.map((word) => (
          <p
            key={word}
            className={`word ${
              highLightWords.includes(word.split(" ").join("").toLowerCase()) &&
              "highlightWord"
            }`}
          >
            {word}
          </p>
        ))}
      </div>
    </div>
  );
};

export default WordDictionary;
