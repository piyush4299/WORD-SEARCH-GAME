export const getWordPositionInMatrix = (inputWord, puzzleMatrix) => {
  const rowLength = puzzleMatrix.length;
  const colLength = puzzleMatrix[0].length;
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      const searchPathInPuzzle = searchMatrix(
        puzzleMatrix,
        row,
        col,
        inputWord,
        rowLength,
        colLength
      );
      if (searchPathInPuzzle.length === inputWord.length) {
        return searchPathInPuzzle;
      }
    }
  }
  return [];
};

const searchMatrix = (
  puzzleMatrix,
  row,
  col,
  inputWord,
  rowLength,
  colLength
) => {
  let searchPath = [];
  if (puzzleMatrix[row][col] !== inputWord[0]) return searchPath;

  let inputWordLength = inputWord.length;
  let dx = [-1, -1, -1, 0, 0, 1, 1, 1];

  let dy = [-1, 0, 1, -1, 1, -1, 0, 1];

  for (let dir = 0; dir < 8; dir++) {
    let iterator,
      rowDirection = row + dx[dir],
      colDirection = col + dy[dir];
    searchPath = [[row, col]];

    for (iterator = 1; iterator < inputWordLength; iterator++) {
      if (
        rowDirection >= rowLength ||
        rowDirection < 0 ||
        colDirection >= colLength ||
        colDirection < 0
      ) {
        break;
      }

      if (puzzleMatrix[rowDirection][colDirection] !== inputWord[iterator])
        break;

      searchPath.push([rowDirection, colDirection]);
      rowDirection += dx[dir];
      colDirection += dy[dir];
    }

    if (iterator === inputWordLength) return searchPath;
  }
  return [];
};

export const isWordInSearchPath = (wordSearchPaths, row, col) => {
  for (let i = 0; i < wordSearchPaths.length; i++) {
    const singlePath = wordSearchPaths[i];
    let flag = false;
    for (let j = 0; j < singlePath.length; j++) {
      if (singlePath[j][0] === row && singlePath[j][1] === col) {
        flag = true;
        break;
      }
    }

    if (flag) return true;
  }
  return false;
};

export const isWordPresentInDictionary = (wordDictionary, inputWord) => {
  for (let i = 0; i < wordDictionary.length; i++) {
    if (
      wordDictionary[i].split(" ").join("").toLowerCase() ===
      inputWord.toLowerCase()
    ) {
      return true;
    }
  }
  return false;
};
