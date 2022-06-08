import styled from "styled-components";

export const PopUp = (props: any) => {
  return (
    <>
      <PopUpZone>
        <img alt="warning" src="svg/info-icon.svg" />
        <p> {props.text}</p>
      </PopUpZone>
    </>
  );
};

const PopUpZone = styled.div`
  margin-top: 30px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.palette.secondary};
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.39);

  img {
    background-color: #141414;
    height: 30px;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 20px;
    border-radius: 50px;
  }

  p {
    color: ${({ theme }) => theme.palette.color1};
  }
`;
