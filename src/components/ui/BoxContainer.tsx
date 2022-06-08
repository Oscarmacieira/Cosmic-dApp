import styled from "styled-components";
import { InfoBtn } from "../buttons/infoBtn/infoBtn";

export const ModalBoxContainer = styled.div`
  width: 100%;
  height: 340px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px;
  position: relative;
  background: ${({ theme }) => theme.palette.color2};
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.39);
  border-radius: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    height: fit-content;
    width: 100%;
  }

  .apr {
    margin-left: 25px;
    margin-right: 25px;
    width: 50px;
  }

  .shy {
    font-weight: 700;
    font-size: 20px;
    color: ${({ theme }) => theme.palette.shy};
    height: 10px;
  }
  .blue {
    color: ${({ theme }) => theme.palette.secondary};
    height: 20px;
  }

  .divider {
    width: 80%;
    margin-left: auto;
    margin-right: auto;

    height: 1px;
    background: ${({ theme }) => theme.palette.shy};
  }

  th {
    border-bottom: 1px solid ${({ theme }) => theme.palette.shy};
  }
  th,
  td {
    padding: 8px;
    font-size: 12px;
  }

  th:nth-child(1) {
    width: 80px;
  }
  th:nth-child(1),
  th:nth-child(2),
  td:nth-child(1),
  td:nth-child(2) {
    border-right: 1px solid ${({ theme }) => theme.palette.shy};
  }
`;

export const BoxContainer = (props: any) => {
  return (
    <>
      <ModalBoxContainer>
        <div
          className="flex"
          style={{
            right: "25px",
            top: "15px",
            position: "absolute",
            zIndex: 4,
          }}
        >
          <div></div>
          {props.isInfo && <InfoBtn />}
        </div>
        {props.children}
      </ModalBoxContainer>
    </>
  );
};

export const BoxContainerSecondary = (props: any) => {
  return (
    <>
      <ModalBoxContainerSecondary>
        <div
          className="flex"
          style={{ width: "100%", justifyContent: "space-between" }}
        >
          <div></div>
          {props.isInfo && <InfoBtn />}
        </div>
        {props.children}
      </ModalBoxContainerSecondary>
    </>
  );
};

const ModalBoxContainerSecondary = styled(ModalBoxContainer)`
  background: ${({ theme }) => theme.palette.color4};
`;

export const BoxContainerAuto = (props: any) => {
  return (
    <>
      <ModalBoxContainerAuto>
        <div
          className="flex"
          style={{ width: "100%", justifyContent: "space-between" }}
        >
          <div></div>
          {props.isInfo && <InfoBtn />}
        </div>
        {props.children}
      </ModalBoxContainerAuto>
    </>
  );
};

const ModalBoxContainerAuto = styled(ModalBoxContainer)`
  height: fit-content;
`;

export const BoxContainerAutoSecondary = (props: any) => {
  return (
    <>
      <ModalBoxContainerAutoSecondary>
        <div
          className="flex"
          style={{ width: "100%", justifyContent: "space-between" }}
        >
          <div></div>
          {props.isInfo && <InfoBtn />}
        </div>
        {props.children}
      </ModalBoxContainerAutoSecondary>
    </>
  );
};

const ModalBoxContainerAutoSecondary = styled(ModalBoxContainerSecondary)`
  height: fit-content;
`;
