import { Global } from "@emotion/react";
import { globalStyles } from "./styles/globalStyles";
import useSudoku from "./hooks/useSudoku";
import Board from "./components/Board";
import Controls from "./components/Controls";
import NumberPad from "./components/NumberPad";

function App() {
  const { board, resetBoard, difficulty, setDifficulty } = useSudoku();

  return (
    <>
      <Global styles={globalStyles} />
      <div className="container">
        <h1 className="title">Let's Play Sudoku</h1>
        <Controls
          resetBoard={resetBoard}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
        />
        <Board board={board} />
        <NumberPad />
      </div>
    </>
  );
}

export default App;
