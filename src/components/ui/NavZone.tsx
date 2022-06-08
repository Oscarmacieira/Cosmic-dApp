import styled from "styled-components";
import { BackArrow } from "../buttons/backArrow/backArrow";

export const NavZone = (props: any) => {
  return (
    <>
      <TopNavFarms>
        <div
          className="right"
          onClick={() => {
            props.onBack();
          }}
        >
          <BackArrow onClick={() => props.onBack()} />
          {props.text}
        </div>
        {props.children}
      </TopNavFarms>
    </>
  );
};

const TopNavFarms = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 20px;
  width: 100%;
  .right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Saira";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 25px;
    width: fit-content;
    :hover {
      opacity: 0.6;
      cursor: pointer;
    }
  }
`;
