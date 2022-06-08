import styled from "styled-components";

export const BTexto = styled.button`
  body {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    font-family: "IBM Plex Mono", monospace;
    font-weight: 300;
  }

  .label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    color: #000 !important;
  }
  div.label-text {
    color: #000;
    padding-right: 10px;
  }

  .toggle {
    isolation: isolate;
    position: relative;
    height: 24px;
    width: 48px;
    border-radius: 15px;
    background: #000;
    overflow: hidden;
  }

  .toggle-inner {
    z-index: 2;
    position: absolute;
    top: 1px;
    left: 1px;
    height: 22px;
    width: 46px;
    border-radius: 15px;
    overflow: hidden;
  }

  .active-bg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 200%;
    background: #f26929;
    transform: translate3d(-100%, 0, 0);
    transition: transform 0.05s linear 0.17s;
  }

  .toggle-state {
    display: none;
  }

  .indicator {
    height: 100%;
    width: 200%;
    background: white;
    border-radius: 13px;
    transform: translate3d(-75%, 0, 0);
    transition: transform 0.35s cubic-bezier(0.85, 0.05, 0.18, 1.35);
  }

  .toggle-state:checked ~ .active-bg {
    transform: translate3d(-50%, 0, 0);
  }

  .toggle-state:checked ~ .toggle-inner .indicator {
    transform: translate3d(25%, 0, 0);
  }
`;
