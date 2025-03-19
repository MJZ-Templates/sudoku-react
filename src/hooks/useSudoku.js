import { useState } from "react";
import { getRandomPuzzle } from "../data/puzzles";

function useSudoku(initialDifficulty = "medium") {
  const [difficulty, setDifficulty] = useState(initialDifficulty);
  const [board, setBoard] = useState(() => generateBoard(difficulty));

  function generateBoard(difficulty) {
    const puzzle = getRandomPuzzle(difficulty);
    return puzzle.split("").map((num) => ({
      value: num,
      fixed: num !== "0",
      selected: false,
    }));
  }

  function resetBoard(newDifficulty = difficulty) {
    setDifficulty(newDifficulty);
    setBoard(generateBoard(newDifficulty));
  }

  return { board, difficulty, setDifficulty, resetBoard };
}

export default useSudoku;
