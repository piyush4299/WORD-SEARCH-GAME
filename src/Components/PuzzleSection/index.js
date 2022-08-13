import React from "react";
import { isWordInSearchPath } from "../../Helper";
import "./style.css";

const PuzzleSection = ({ puzzleMatrix, wordSearchPaths }) => {
  return (
    <table className="puzzleSection">
      {puzzleMatrix.map((puzzleArray, row) => {
        return (
          <tr>
            {puzzleArray.map((puzzleWord, col) => {
              return (
                <td
                  className={`puzzleWord ${
                    isWordInSearchPath(wordSearchPaths, row, col) &&
                    "highlightCell"
                  }`}
                >
                  {puzzleWord}
                </td>
              );
            })}
          </tr>
        );
      })}
    </table>
  );
};

export default PuzzleSection;
