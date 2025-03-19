import styled from "@emotion/styled";

const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 50px);
  grid-template-rows: repeat(9, 50px);
  gap: 2px;
`;

const Cell = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ isFixed }) =>
    isFixed &&
    `
    background-color: #f0f0f0;
    font-weight: bold;
    pointer-events: none;
  `}

  ${({ isSelected }) =>
    isSelected &&
    `
    background-color: #81aef8;
    color: white;
  `}
`;

function Board({ board, selectCell }) {
  return (
    <BoardContainer>
      {board.map((cell, index) => (
        <Cell
          key={index}
          isFixed={cell.fixed}
          isSelected={cell.selected}
          onClick={() => !cell.fixed && selectCell(index)}
        >
          {cell.value !== "0" ? cell.value : ""}
        </Cell>
      ))}
    </BoardContainer>
  );
}

export default Board;
