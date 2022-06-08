import Modal from "../../../components/ui/Modal";
import styled from "styled-components";
import { days, Lootbox } from "./ObjectP2E";
import { useState } from "react";

export const DropRateModal = (props: any) => {
  return (
    <>
      {" "}
      <Modal
        onClose={() => props.toggleDropRateList()}
        isOpen={props.isDropRateList}
      >
        <DropRateModalContainer>
          <div className="close">
            <div></div>
            <span className="orange">DROP RATE %</span>
            <b onClick={() => props.toggleDropRateList()}>X</b>
          </div>
          <br />
          <TableDropRate nbDays={7} />
          <hr />
          <TableDropRate nbDays={15} />
          <hr />
          <TableDropRate nbDays={30} />
        </DropRateModalContainer>
      </Modal>
    </>
  );
};

const TableDropRate = (props: any) => {
  return (
    <>
      <TableDropContainer>
        <div className="TitleDropRate">
          {props.nbDays} days timelock period model
          <img
            className="lock"
            style={{
              width: "20px",
              height: "20px",
              marginLeft: "10px",
              position: "relative",
              top: "3px",
            }}
            alt="lock"
            src="svg/blue-lock.svg"
          />
        </div>
        <table>
          <thead>
            <tr>
              {Lootbox.map((info) => {
                return <th key={info.name}>{info.name}</th>;
              })}
            </tr>
          </thead>

          <tbody>
            <tr>
              {Lootbox.map((info) => {
                return (
                  <td key={info.name + "1"}>
                    <LootBoxHover name={info.name} key={info.name + "2"} />
                  </td>
                );
              })}
            </tr>
            <tr>
              {Lootbox.map((info) => {
                return (
                  <td key={info.name + "3"}>
                    {props.nbDays === 7
                      ? info.days07
                      : props.nbDays === 15
                      ? info.days15
                      : info.days30}
                    %
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </TableDropContainer>
    </>
  );
};

const LootBoxHover = (props: any) => {
  return (
    <img
      style={{ width: "70px", height: "70px" }}
      className={"LB-" + props.name}
      alt={"lootbox"}
      src={
        "svg/lootboxs/" + props.name + "/" + props.name.toLowerCase() + ".png"
      }
    />
  );
};

const TableDropContainer = styled.div`
  .TitleDropRate {
    font-weight: 700;
    font-size: 16px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
    padding-bottom: 10px;
  }
  table {
    width: 100%;
    table-layout: fixed;
    text-align: center;
  }
  th {
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
  td {
    font-weight: 700;
    .LB-Normal {
      width: 30px !important;
      height: 30px !important;
    }
    .LB-Rare {
      width: 30px !important;
      height: 30px !important;
    }
    .LB-Epic {
      width: 40px !important;
      height: 40px !important;
    }
    .LB-Legendary {
      width: 50px !important;
      height: 50px !important;
    }
    .LB-Cosmic {
      width: 60px !important;
      height: 60px !important;
    }
  }
`;

const DropRateModalContainer = styled.div`
  background: radial-gradient(
    50% 50% at 50% 50%,
    #14215e 0%,
    rgba(11, 18, 52, 0) 100%
  );
  hr {
    background: radial-gradient(
      50% 50% at 50% 50%,
      #6c77ae 0%,
      rgba(11, 18, 52, 0) 100%
    );
    height: 2px;
    border: none;
  }
  .close {
    display: flex;
    justify-content: space-between;
    position: absolute;
    right: 20px;
    top: 10px;
    width: 100%;
    font-size: 30px;
    b:hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }

  .orange {
    font-weight: 700;
    font-size: 24px;
    /* identical to box height */

    color: #f9cb2a;
  }
`;
