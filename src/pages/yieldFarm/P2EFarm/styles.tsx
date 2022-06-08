import styled from "styled-components";

export const HomeP2E = styled.div`
  width: 100%;
  table {
    margin-right: auto;
    margin-left: auto;
    width: 40%;
    text-align: center;
    table-layout: fixed;
    @media (max-width: 768px) {
      width: 80%;
    }
  }

  .shy {
    font-weight: 700;
    font-size: 25px;
    color: ${({ theme }) => theme.palette.shy};
  }
  .orange {
    font-weight: 700;
    font-size: 25px;
    color: #f9cb2a;
  }

  .FullListBtn {
    width: fit-content;
    text-align: center;

    margin-left: auto;
    margin-right: auto;
    p {
      font-size: 10px;
    }
  }

  .cardP2E {
    display: flex;
    text-align: center;
    @media (max-width: 768px) {
      display: block;
    }
    #swapIconDiv {
      height: 100%;
      width: fit-content;
      margin-top: auto;
      margin-bottom: auto;
      margin-right: auto;
      margin-left: auto;
      @media (max-width: 768px) {
        text-align: center;
      }
      #swap {
        padding: 20px;
        width: fit-content;
        vertical-align: middle;
        @media (max-width: 768px) {
          transform: rotate(90deg);
        }
      }
    }
    .asset-to-stake {
      font-weight: 700;
      font-size: 25px;
    }
  }
  .StakeBtnZone {
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    justify-content: space-around;
    display: flex;
    @media (max-width: 768px) {
      width: 100%;
    }
    b {
      font-size: 18px;
      position: relative;
      top: -3px;
    }
    span {
      font-weight: 700;
      font-size: 14px;
      color: ${({ theme }) => theme.palette.shy};
    }
  }
`;

export const LootBoxZone = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  background: radial-gradient(
    50% 50% at 50% 50%,
    #14215e 0%,
    rgba(11, 18, 52, 0) 100%
  );
  @media (max-width: 768px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    vertical-align: middle;
  }
  .Normal {
    margin-top: auto;
    margin-bottom: auto;
    margin-right: auto;
    margin-left: auto;
    grid-area: 1 / 1 / 2 / 2;
    @media (max-width: 768px) {
      grid-area: 1 / 1 / 2 / 2;
    }

    b {
      color: #9bffb5;
    }
  }
  .Rare {
    margin-top: auto;
    margin-bottom: auto;
    margin-right: auto;
    margin-left: auto;
    grid-area: 1 / 2 / 2 / 3;
    margin-top: auto;
    margin-bottom: auto;
    @media (max-width: 768px) {
      grid-area: 1 / 2 / 2 / 3;
    }
    b {
      color: rgba(49, 217, 226, 0.463);
    }
  }
  .Epic {
    margin-top: auto;
    margin-bottom: auto;
    margin-right: auto;
    margin-left: auto;

    grid-area: 1 / 3 / 2 / 4;
    @media (max-width: 768px) {
      grid-area: 2 / 1 / 3 / 2;
    }
    b {
      color: #fbd4ff;
    }
  }
  .Legendary {
    margin-top: auto;
    margin-bottom: auto;
    margin-right: auto;
    margin-left: auto;

    grid-area: 1 / 4 / 2 / 5;
    @media (max-width: 768px) {
      grid-area: 2 / 2 / 3 / 3;
    }

    b {
      color: #fff1a0;
    }
  }
  .Cosmic {
    margin-top: auto;
    margin-bottom: auto;
    margin-right: auto;
    margin-left: auto;
    grid-area: 1 / 5 / 2 / 6;
    @media (max-width: 768px) {
      grid-area: 3 / 1 / 4 / 3;
    }
    b {
      color: #b02b99;
    }
  }

  img {
    cursor: pointer;
    width: 170px;
    height: 170px;
    position: relative;
  }
  .lootbox-Normal {
    animation: glow-Normal 1s infinite alternate;
    width: 70px;
    height: 70px;
  }
  .lootbox-Rare {
    animation: glow-Rare 1s infinite alternate;
    width: 95px;
    height: 95px;
  }
  .lootbox-Epic {
    animation: glow-Epic 1s infinite alternate;
    width: 120px;
    height: 120px;
  }
  .lootbox-Legendary {
    animation: glow-Legendary 1s infinite alternate;
    width: 145px;
    height: 145px;
  }
  .lootbox-Cosmic {
    animation: glow-Cosmic 1s infinite alternate;
  }
`;
