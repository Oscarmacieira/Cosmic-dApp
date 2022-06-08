import styled from "styled-components";

export const BlackButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 5px;
  margin-left: 5px;
  color: white;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  text-align: center;
  justify-content: center;
  padding: 8px 32px;
  width: auto;
  height: calc(8px + 8px + 22px + 1px + 1px);
  background-color: #0c1121;
  border-radius: 30px;
  :hover {
    color: white;
    background-color: #f26929;
  }
  :disabled {
    color: white;
    background-color: #f26929;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const BlackButtonLg = styled(BlackButton)`
  font-size: 20px;
  line-height: 32px;
  height: calc(8px + 8px + 32px + 1px + 1px);
`;

export const BlackButtonSm = styled(BlackButton)`
  font-size: 12px;
  line-height: 19px;
  padding: 4px 16px;
  height: calc(4px + 4px + 16px + 1px + 1px);
`;
