import styled from "styled-components";

export const MaxButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  font-size: 10px;
  font-weight: 700;
  line-height: 22px;
  text-align: center;
  justify-content: center;
  padding: 8px 15px;
  width: auto;
  height: calc(6px + 6px + 14px + 1px + 1px);
  background-color: #787ca9;
  border-radius: 5px;
  box-shadow: 0px 4px 4px 0px #00000040;
  :hover {
    color: #14063a;
    background-color: #30d1ff;
    border-color: #30d1ff;
  }
  :disabled {
    color: rgba(255, 255, 255, 0.5);
    background-color: #787ca9;
    border-color: #787ca9;
  }
  :active {
    color: #14063a;
    background-color: #30d1ff;
    border-color: #30d1ff;
    box-shadow: 0px 0px 8px #30d1ff;
  }
`;
