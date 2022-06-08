import styled from "styled-components";

export function Toggler(props: any) {
  return (
    <Toggle>
      <label className="switch">
        <input
          type="checkbox"
          id="checkboxToggler"
          onChange={() => !props.isToggled}
        />
        <span className="slider"></span>
      </label>
    </Toggle>
  );
}

const Toggle = styled.div`
  z-index: 10;
  width: 25px;

  .switch {
    position: absolute;
    width: 25px;
    height: 12px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.palette.contrast};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 17px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 9px;
    width: 9px;
    left: 2px;
    bottom: 2px;
    background-color: ${({ theme }) => theme.palette.primary};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: ${({ theme }) => theme.palette.primary};
  }
  input:checked + .slider:before {
    background-color: ${({ theme }) => theme.palette.contrast};
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(12px);
    -ms-transform: translateX(12px);
    transform: translateX(12px);
  }
`;
