import styled from "styled-components";
import React from "react";
export interface btnProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

export const SquareButton = styled.button<btnProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({ theme }) => theme.palette.contrast};
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  text-align: center;
  justify-content: center;
  padding: 8px 32px;
  width: auto;
  height: calc(8px + 8px + 22px + 1px + 1px);
  background-color: #f26929;
  border: 1px solid #f26929;
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
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const SquareButtonLine = styled(SquareButton)`
  background: none;
`;

export const SquareButtonLineAlt = styled(SquareButtonLine)`
  border-color: #30d1ff;
`;

export const SquareButtonLg = styled(SquareButton)`
  font-size: 20px;
  line-height: 32px;
  height: calc(8px + 8px + 32px + 1px + 1px);
`;

export const SquareButtonSm = styled(SquareButton)`
  font-size: 12px;
  line-height: 19px;
  padding: 4px 16px;
  height: calc(4px + 4px + 19px + 1px + 1px);
`;

export const SquareButtonSmLine = styled(SquareButtonSm)`
  background: none;
`;

export const SquareButtonSmLineAlt = styled(SquareButtonSmLine)`
  border-color: #30d1ff;
`;
