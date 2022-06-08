import styled from "styled-components";

interface btnProps {
  optTwo: string;
  optOneColor: string;
  optTwoColor: string;
}

export const Button = styled.button<btnProps>`
  border-radius: 30px;
  border: none;
  padding: 0;
  background: #fff;
  font-weight: 700;
  align-self: center;
  .switch-button {
    width: 386px;
    text-align: center;
    font-size: 18px;
    line-height: 28px;
    /* letter-spacing: 1px; */
    color: #fff;
    position: relative;
    padding-right: 193px;
    position: relative;

    @media (max-width: 576px) {
      font-size: 14px;
      line-height: 22px;
      width: 186px;
      padding-right: 93px;
    }

    &:before {
      content: "${(btnProps) => btnProps.optTwo}";
      position: absolute;
      color: ${(btnProps) => btnProps.optTwoColor};
      top: 0;
      bottom: 0;
      right: 0;
      width: 193px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 3;
      pointer-events: none;
      transition: all 0.5s linear;

      @media (max-width: 576px) {
        width: 93px;
      }
    }

    &-checkbox {
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      margin: 0;
      border: 0;
      opacity: 0;
      z-index: 2;

      &:checked + .switch-button-label:before {
        transform: translateX(193px);
        transition: transform 300ms linear;

        @media (max-width: 576px) {
          transform: translateX(93px);
        }
      }

      & + .switch-button-label {
        position: relative;
        padding: 8px 28px;
        display: block;
        user-select: none;
        pointer-events: none;
        color: ${(btnProps) => btnProps.optOneColor};
        transition: all 0.5s linear;

        &:before {
          content: "";
          background: #f26929;
          height: 100%;
          width: 193px;
          position: absolute;
          left: 0;
          top: 0;
          border-radius: 30px;
          transform: translateX(0);
          transition: transform 300ms;
          color: #000;

          @media (max-width: 576px) {
            width: 93px;
          }
        }

        .switch-button-label-span {
          position: relative;
        }
      }
    }
  }
`;
