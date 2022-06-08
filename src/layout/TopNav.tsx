import styled from "styled-components";
import { BackArrow } from "../components/buttons/backArrow/backArrow";
import { InfoBtn } from "../components/buttons/infoBtn/infoBtn";

export const TopNav = (props: any) => {
  return (
    <>
      <TopNavFarms>
        <div
          className="right"
          onClick={() => {
            props.onBack();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <BackArrow onClick={() => props.onBack()} />
          {props.text}
        </div>
        <InfoBtn />
      </TopNavFarms>
    </>
  );
};

const TopNavFarms = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  .right {
    display: flex;
    justify-content: space-between;

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
