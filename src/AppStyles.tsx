import { createGlobalStyle } from "styled-components";
import colors from "./theme/styles/colors";
import spacing from "./theme/styles/spacing";

export const AppStyles = createGlobalStyle`
  
  @import url('https://fonts.googleapis.com/css2?family=Saira:wght@100;200;300;400;500&display=swap');

  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  body {
    background: ${({ theme }) => (theme as any).colors.body};
    color: ${({ theme }) => (theme as any).colors.text};
    transition: all 0.50s linear;
    margin: 0;
    padding: 0;
  }
  hr {
    width: 100%;
    height: 1px;
    left: 0px;
    top: 1438px;
    border: none;
    background: ${({ theme }) => theme.palette.shy};
    transform: matrix(1, 0, 0, -1, 0, 0);
  }

  a {
    color: ${({ theme }) => (theme as any).colors.link.text};
    cursor: pointer;
    text-decoration: none;
  }

  .hover-btn {
    cursor:pointer;
    &:hover{
      opacity:0.6;
      transform: scale(1.05);
  }
  }

  @font-face {
    font-family: "SpaceQuest";
    src: url("fonts/SpaceQuest/SpaceQuest.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  h1 {
    font-family: "SpaceQuest" !important;
    text-transform: uppercase !important;
  }

  a,
  button,
  i,
  input {
    transition: all 0.2s ease-in 0s;

  
  }
  input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
  
        input[type=number] {
            -moz-appearance: textfield;
        }

  * {
    box-sizing: border-box;
    font-family: 'Saira', sans-serif !important;
  }

  button.btn {
    background-color: ${({ theme }) => (theme as any).colors.button.background};
    color: ${({ theme }) => (theme as any).colors.button.text};
  }

  button.cancel {
    background-color: #ff0000;
    color: ${({ theme }) => (theme as any).colors.button.text};
  }

  button:disabled {
    background-color: #ebebeb;
    color: #333333;
  }

  button:hover {
    cursor: pointer;
  }

  button {
    border: 0;
    display: inline-block;
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    cursor: pointer;
    background-color: #1064EA;
    color: #FFFFFF;
    font-family: ${({ theme }) => (theme as any).font};
  }

  ::-webkit-scrollbar {
    width: 5px;
    position: absolute;
    margin-right: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.palette.color5};
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.palette.primary};
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.palette.primary};
  }

  .truncate-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  // typography utils
  ${["center", "left", "right", "justify"].map(
		(typo) => `.text-${typo} { text-align: ${typo}; }`
	)}

  // flex utils
  .flex {
    display: flex;
  }
.flex-column {
    display: flex;
    flex-direction: column;
  }

  .flex-justify-between {
    display: flex;
    justify-content: space-between;
  }

  .flex-justify-evenly {
    display: flex;
    justify-content: space-evenly;
  }
  .flex-justify-around {
    display: flex;
    justify-content: space-around;
  }
  // flex utils
  .flex-for-desktop {
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
      display: block;
  }
  }
  .flex-for-mobile {
    display: block;
    @media (max-width: 768px) {
      display: flex;
      justify-content: space-between;

    }
  }
.not-desktop{
  display: hidden;
  @media (max-width: 768px) {
      display: block;

    }
}

  // margin utils
  .center {
    margin-left: auto;
    margin-right: auto;
    width: fit-content;

  }

    .blue {
  color:${({ theme }) => theme.palette.secondary};
  }

  .open-down {
    animation: open-down 0.5s;
  }

    .shy {
  color:${({ theme }) => theme.palette.shy};
  font-weight: bold;
}

${[
	"center",
	"flex-start",
	"flex-end",
	"space-around",
	"space-between",
	"space-evenly",
].map((type) => `.justify-${type} { justify-content: ${type}; }`)}

${["center", "start", "end", "stretch", "baseline", "normal"].map(
	(type) => `.align-items-${type} { align-items: ${type}; }`
)}

  .close-modal {
    background: transparent;
    display: inline;
    width: auto;
    padding: 0;
    margin: 0;
    border: 0;
    border-radius: 0;
    font-size: 1rem;
    align-self: baseline;
    img {
      vertical-align: middle;
      margin: 0 .5rem;
      width: 1.5rem;
    }
  }

  ${colors}
  ${spacing}

  @keyframes glow-Normal {
    from {
      filter: drop-shadow(0px 0px 0px #9bffb5);
    }
    to {
      filter: drop-shadow(0px 0px 30px #9bffb5);
    }
  }
  @keyframes glow-Rare {
    from {
      filter: drop-shadow(0px 0px 0px rgba(49, 217, 226, 0.463));
    }
    to {
      filter: drop-shadow(0px 0px 30px rgba(49, 217, 226, 0.463));
    }
  }
  @keyframes glow-Epic {
    from {
      filter: drop-shadow(0px 0px 0px #fbd4ff);
    }
    to {
      filter: drop-shadow(0px 0px 30px #fbd4ff);
    }
  }
  @keyframes glow-Legendary {
    from {
      filter: drop-shadow(0px 0px 0px #fff1a0);
    }
    to {
      filter: drop-shadow(0px 0px 30px #fff1a0);
    }
  }
  @keyframes glow-Cosmic {
    from {
      filter: drop-shadow(0px 0px 0px #b02b99);
    }
    to {
      filter: drop-shadow(0px 0px 30px #b02b99);
    }
  }

  // SMALL GLOWING
  @keyframes glowSm-Normal {
    from {
      filter: drop-shadow(0px 0px 0px #9bffb5);
    }
    to {
      filter: drop-shadow(0px 0px 15px #9bffb5);
    }
  }
  @keyframes glowSm-Rare {
    from {
      filter: drop-shadow(0px 0px 0px rgba(49, 217, 226, 0.463));
    }
    to {
      filter: drop-shadow(0px 0px 15px rgba(49, 217, 226, 0.463));
    }
  }
  @keyframes glowSm-Epic {
    from {
      filter: drop-shadow(0px 0px 0px #fbd4ff);
    }
    to {
      filter: drop-shadow(0px 0px 15px #fbd4ff);
    }
  }
  @keyframes glowSm-Legendary {
    from {
      filter: drop-shadow(0px 0px 0px #fff1a0);
    }
    to {
      filter: drop-shadow(0px 0px 15px #fff1a0);
    }
  }
  @keyframes glowSm-Cosmic {
    from {
      filter: drop-shadow(0px 0px 0px #b02b99);
    }
    to {
      filter: drop-shadow(0px 0px 15px #b02b99);
    }
  }
  @keyframes open-down{

	from {
  height:0%;
  }	
  to {
    height:100%;
  }

  }
`;
