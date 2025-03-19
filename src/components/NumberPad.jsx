import styled from "@emotion/styled";

const Pad = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 15px;
`;

const NumButton = styled.button`
  display: flex;
  justify-content: center;
  width: 50px;
  height: 50px;
  font-size: 22px;
  font-weight: bold;
  background-color: #ecf0f1;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  &:hover {
    border: none;
  }
`;

function NumberPad({ insertNumber }) {
  return (
    <Pad>
      {[...Array(9).keys()].map((num) => (
        <NumButton key={num} onClick={() => insertNumber(num + 1)}>
          {num + 1}
        </NumButton>
      ))}
    </Pad>
  );
}

export default NumberPad;
