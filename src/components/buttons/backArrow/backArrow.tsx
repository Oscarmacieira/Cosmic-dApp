import styled from "styled-components";

export const BackArrow = (props: any) => {
  return (
    <>
      {" "}
      <Arrowback
        onClick={() => props.onClick()}
        alt="back"
        src="svg/arrow-back.svg"
      />
    </>
  );
};

const Arrowback = styled.img`
  width: 25px;
  margin-right: 10px;
  cursor: pointer;
`;
