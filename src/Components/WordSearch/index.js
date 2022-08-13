import { useEffect, useState } from "react";
import {
  getWordPositionInMatrix,
  isWordPresentInDictionary,
} from "../../Helper";
import Header from "../Header";
import InputWordSection from "../InputWordSection";
import PuzzleSection from "../PuzzleSection";
import WordDictionary from "../WordDictionary";
import "./style.css";

const WordSearch = () => {
  // This component is solely responsible for arranging different components and reducing the lines of code in App.js
  const wordDictionary = [
    "bowling",
    "stumped",
    "fielder",
    "batsman",
    "run out",
    "catch",
    "umpire",
    "inning",
    "appeal",
    "batting",
    "spin",
    "tea",
    "runs",
    "stumps",
    "boundary",
  ];

  const wordsList = [
    "OUMBAMRUNOUTFHWNT",
    "SZIKQRWHZZTMATITE",
    "THERUNSHXILNNHGUA",
    "UDWZMQFBYWRPOSNFO",
    "MTIYICENJGBOWLING",
    "PUGBNAOCRRAXAYEPQ",
    "EYBONNPSPPTQWFUJR",
    "DLTCICZTPISTGKKCE",
    "KQSONZAUVIMSJBFAI",
    "LNFQGUYMIPASFAFTE",
    "OISQSKSPFHNYZTNCV",
    "QHHKASVSYXUHBTHHB",
    "HCMXJCXAMIVHOIPSJ",
    "SUMPIREWOTVEVNTPH",
    "SQHTYSVNOQSYFGJOZ",
    "HBOUNDARYAZWRIFYO",
    "QSGEDMKSLNOVDEJED",
    "TDCJEFIELDERJHDDM",
    "YARWXAFYNQSMZHDDV",
    "URJLWZGXZWSVFUXAG",
    "HSPINTAGVCVISDZUJ",
    "VNHUEVFRVAPPEALHE",
  ];

  const [highLightWords, setHighLightWords] = useState([]);
  const [wordSearchPaths, setWordSearchPaths] = useState([]);
  const [toastAlert, setToastAlert] = useState({
    error: false,
    success: false,
    msg: "",
  });

  useEffect(() => {
    if (
      highLightWords.length > 0 &&
      highLightWords.length === wordDictionary.length
    ) {
      setToastAlert({
        success: true,
        msg: "Hurray! You won the game",
      });
    }

    if (toastAlert.success || toastAlert.error) {
      alert(toastAlert.msg);
      setToastAlert({
        error: false,
        success: false,
        msg: "",
      });
      handleReset();
    }
  }, [
    highLightWords,
    toastAlert.error,
    toastAlert.msg,
    toastAlert.success,
    wordDictionary.length,
  ]);

  const getMatrix = (wordsList = []) => {
    let matrix = [];
    wordsList.forEach((wordItem) => {
      matrix.push(wordItem.split(""));
    });
    return matrix;
  };

  const puzzleMatrix = getMatrix(wordsList);
  const handleWordSearch = (originalInput) => {
    const inputWord = originalInput.split(" ").join("");
    if (isWordPresentInDictionary(wordDictionary, inputWord)) {
      setHighLightWords([...highLightWords, inputWord.toLowerCase()]);
      const wordPathInPuzzle = getWordPositionInMatrix(
        inputWord.toUpperCase(),
        puzzleMatrix
      );
      setWordSearchPaths([...wordSearchPaths, wordPathInPuzzle]);
    } else {
      setToastAlert({
        success: false,
        error: true,
        msg: "Please enter words correctly",
      });
    }
  };

  const handleReset = () => {
    setHighLightWords([]);
    setWordSearchPaths([]);
  };
  return (
    <div className="">
      <Header gameName={"cricket"} />
      <div className="container">
        <div className="leftSection">
          <WordDictionary
            wordsList={wordDictionary}
            highLightWords={highLightWords}
          />
        </div>
        <div className="rightSection">
          <InputWordSection
            handleWordSearch={handleWordSearch}
            handleReset={handleReset}
          />
          <PuzzleSection
            puzzleMatrix={puzzleMatrix}
            wordSearchPaths={wordSearchPaths}
          />
        </div>
      </div>
    </div>
  );
};

export default WordSearch;
