import styled from "styled-components";

export const AssetsIcons = (props: any) => {
  const ticker1 = props.asset1 === "ticker" ? "cegt" : props.asset1;
  const ticker2 = props.asset2 === "ticker" ? "cegt" : props.asset2;
  return (
    <>
      <Asset1 alt={props.asset1} src={`svg/coins/` + ticker1 + `.svg`} />
      <Asset2 alt={props.asset2} src={`svg/coins/` + ticker2 + `.svg`} />
    </>
  );
};

const Asset1 = styled.img`
  width: 40px;
  position: relative;
  z-index: 1;
`;
const Asset2 = styled.img`
  width: 40px;
  left: -15px;
  position: relative;
  z-index: 0;
`;
