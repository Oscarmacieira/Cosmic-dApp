import { SquareButton } from "../../../../components/buttons/squareButton";
import { TimeLock } from "../../../../components/TimeLock.tsx/TimeLock";
import { BoxContainer } from "../../../../components/ui/BoxContainer";
import styled from "styled-components";

export const UpgradeModal = (props: any) => {
  return (
    <>
      <BoxContainer isInfo={true} style={{ overflow: "hidden" }}>
        <Light alt="light" src="svg/light.svg" />

        <UpgradeModalContainer>
          <UpgradeCard alt="upgrade-card" src="svg/card.png" />

          <div className="btn-zone">
            <SquareButton disabled={false}>Approve </SquareButton>
            <TimeLock lockTime={"15d"} />
          </div>
        </UpgradeModalContainer>
      </BoxContainer>
    </>
  );
};

const UpgradeCard = styled.img`
  width: auto;
  z-index: 2;
  @media (max-width: 768px) {
    width: auto;
    margin-left: auto;
    margin-right: auto;
  }
`;
const Light = styled.img`
  position: absolute;
  height: 100%;
  overflow: hidden;
  top: 0;
  right: 0;
  z-index: 0;
`;

const UpgradeModalContainer = styled.div`
  display: flex;
  height: 100%;
  z-index: 2;
  position: relative;
  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }
  .btn-zone {
    @media (min-width: 768px) {
      position: absolute;
      bottom: 0;
      right: 40px;
    }
  }
`;
