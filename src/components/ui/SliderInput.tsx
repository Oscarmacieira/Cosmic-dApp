import { useState } from "react";
import styled from "styled-components";
export const SliderInput = (props: any) => {
  const [value, setValue] = useState(0);
  const [percent, setpercent] = useState(0);

  const changeInput = (event: any) => {
    setValue(event.target.valueAsNumber);
    setpercent((event.target.valueAsNumber / props.balance) * 100);
  };

  const changeSlider = (event: any) => {
    setValue((event.target.valueAsNumber * props.balance) / 100);
    setpercent(event.target.valueAsNumber);
  };
  return (
    <>
      <InputZone>
        {" "}
        <input
          onChange={(event) => changeInput(event)}
          type={"number"}
          value={value}
          placeholder="0.00"
        ></input>
        <br />
        <input
          onChange={(event) => changeSlider(event)}
          value={percent}
          className="slider"
          type={"range"}
        ></input>
        <div className="flex-justify-between">
          <div className="text-center">
            <div>0%</div>
          </div>
          <div className="text-center">
            <div>25%</div>
          </div>
          <div className="text-center">
            <div>50%</div>
          </div>
          <div className="text-center">
            <div>75%</div>
          </div>
          <div className="text-center">
            <div>100%</div>
          </div>
        </div>
      </InputZone>
    </>
  );
};

const InputZone = styled.div`
  .text-center {
    text-align: center;
    position: relative;

    font-size: 14px;
    z-index: 1;
  }

  .text-center:nth-child(2),
  .text-center:nth-child(3),
  .text-center:nth-child(4) {
    left: 12px;
  }

  input {
    background-color: ${({ theme }) => theme.palette.shy};
    border-radius: 10px;
    width: 100%;
    height: 44px;
    color: white;
    font-weight: 700;
    padding: 5px;
    padding-left: 10px;
    outline: none;
    font-size: 18px;
    border: none;
    position: relative;
    z-index: 2;
    ::placeholder {
      color: white;
    }
  }

  .slider {
    -webkit-appearance: none;
    width: 100%;
    height: 3px;
    padding: 0;

    outline: none;

    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    background: ${({ theme }) => theme.palette.contrast};
    z-index: 2;
    :hover {
      opacity: 1;
    }
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.palette.secondary};
    z-index: 2;
    cursor: pointer;

    :hover {
      background-color: ${({ theme }) => theme.palette.primary};
    }
  }

  .slider::-moz-range-thumb {
    z-index: 2;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.palette.secondary};

    cursor: pointer;

    :hover {
      background-color: ${({ theme }) => theme.palette.primary};
    }
  }
`;
