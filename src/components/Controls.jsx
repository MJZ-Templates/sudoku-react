import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
`;

const DifficultyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const Select = styled.select`
  padding: 8px 12px;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid #6fafe7;
  border-radius: 6px;
  background-color: white;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: #4e9bd6;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 15px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-weight: bold;

  ${({ variant }) => {
    switch (variant) {
      case "new":
        return "background-color: #6fafe7;";
      case "undo":
        return "background-color: #ffd873; color: #333;";
      case "delete":
        return "background-color: #f58f98;";
      default:
        return "background-color: #4caf50; color: white;";
    }
  }}

  &:hover {
    // transform: scale(1.05);
  }
`;

function Controls({
  difficulty,
  setDifficulty,
  resetBoard,
  undoMove,
  deleteCell,
}) {
  return (
    <Container>
      <DifficultyContainer>
        <Label htmlFor="difficulty">Difficulty:</Label>
        <Select
          id="difficulty"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </Select>
      </DifficultyContainer>

      <ButtonContainer>
        <Button id="new-game" variant="new" onClick={resetBoard}>
          New Game
        </Button>
        <Button id="undo" variant="undo" onClick={undoMove}>
          Undo
        </Button>
        <Button id="delete" variant="delete" onClick={deleteCell}>
          Delete
        </Button>
      </ButtonContainer>
    </Container>
  );
}

export default Controls;
