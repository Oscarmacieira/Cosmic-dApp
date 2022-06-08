import styled from "styled-components";

export const InfoBtn = (props: any) => {
  return (
    <>
      {" "}
      <Arrowback
        onClick={() => props.onClick()}
        alt="back"
        src="svg/info-icon.svg"
      />
    </>
  );
};

const Arrowback = styled.img`
  width: 25px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;
