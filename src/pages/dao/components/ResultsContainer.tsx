import { BoxContainerAuto } from "../../../components/ui/BoxContainer";
import styled from "styled-components";

export const ResultsContainer = (props: any) => {
  return (
    <>
      <BoxContainerAuto>
        <h2>{props.title}</h2>
        {props.options?.map((info, index) => {
          return <InFoRow name={info.name} vote={info.vote} key={index} />;
        })}
      </BoxContainerAuto>
    </>
  );
};

const InFoRow = (props) => {
  return (
    <>
      <ResultBox>
        <div className="info-vote">
          <div className="one">{props.name}</div> <div>{props.vote}%</div>
        </div>
        <br />
        <div className="progress-bar">
          <div
            className="inner-progress-bar"
            style={{ width: `${props.vote}%` }}
          ></div>
        </div>
        <br />
      </ResultBox>
    </>
  );
};

const ResultBox = styled.div`
  height: 60px;
  .info-vote {
    display: flex;
    justify-content: space-between;
    height: 0px;
    font-weight: 200;
    .one {
      font-size: 18px;
      position: relative;
      top: -3px;
      color: ${({ theme }) => theme.palette.shy};
    }
  }
  .progress-bar {
    width: 100%;
    height: 16px;
    border-radius: 20px;
    margin-bottom: 10px;
    margin-top: 5px;
    background-color: ${({ theme }) => theme.palette.contrast};
    padding: 2px;
    .inner-progress-bar {
      height: 100%;
      background-color: ${({ theme }) => theme.palette.secondary};
      border-radius: 20px;
    }
  }
`;
