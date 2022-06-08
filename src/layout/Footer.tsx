import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  background-color: #0c112a;
  position: relative;

  #scrollTop {
    background-color: #1b1b2c;
    padding: 25px 8px;
    position: absolute;
    right: 30px;
    border-radius: 50px;
    top: 30px;
    @media (max-width: 768px) {
      top: 100px;
    }
    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }
  hr {
    height: 4px;
    width: 100%;
    margin: 0px;
    padding: 0px;
    background: linear-gradient(
      270deg,
      rgba(52, 55, 74, 0) 0%,
      #444b76 45.83%,
      rgba(52, 55, 74, 0) 100%
    );
  }

  #small {
    height: 5px;
    width: 60%;
    opacity: 0.6;
    background: radial-gradient(
      50% 50% at 50% 50%,
      #6c77ae 0%,
      rgba(11, 18, 52, 0) 100%
    );
  }

  .logos-zone {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    position: relative;
    left: 30px;
    gap: 20px;
    @media (max-width: 768px) {
      height: 50px;
    }

    @media (max-width: 768px) {
      margin-top: 10px;
    }
    img {
      height: 100px;
      margin-right: 0px;
      margin-left: auto;

      @media (max-width: 768px) {
        height: 60px;
      }
    }

    .everywhere {
      margin-right: auto;
      margin-left: 0px;
    }
    .cross {
      width: 20px;
      margin-inline: auto;
      @media (max-width: 768px) {
        width: 20px;
      }
    }
  }

  .powered-logos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    width: 20%;

    img {
      height: 20px;
      @media (max-width: 768px) {
        height: 12px;
      }
    }
    .div1,
    .div2,
    .div3 {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-inline: auto;
    }

    .div1 {
      grid-area: 1 / 1 / 2 / 2;
      display: flex;
      margin-right: 0px;
      margin-left: auto;
    }
    .div2 {
      grid-area: 1 / 2 / 2 / 3;
    }
    .div3 {
      grid-area: 1 / 3 / 2 / 4;
      margin-right: auto;
      margin-left: 0px;
      img {
        height: 20px;
        @media (max-width: 768px) {
          height: 12px;
        }
      }
    }
  }

  nav {
    display: flex;
    width: 80%;
    justify-content: center;
    gap: 25px;
    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .menu-footer  {
      color: ${({ theme }) => theme.palette.contrast};
      font-weight: 600;
      border-bottom: 1px solid #0c112a;
      width: fit-content;
      height: fit-content;
      margin-top: 5px;
      margin-bottom: 5px;

      &:hover {
        border-bottom: 1px solid ${({ theme }) => theme.palette.secondary};
      }
    }

    .disabled {
      opacity: 0.5;
      &:hover {
        border-bottom: 1px solid #0c112a;
      }
    }
  }
`;

export const FooterText = styled.div`
  display: flex;
  padding: 3px;
  background: #0b1234;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  p {
    color: ${({ theme }) => theme.palette.contrast};
    /* font-family: 'Saira'; */
    font-style: normal;
    font-weight: 500;
    font-size: 16;
    margin-right: 10px;
  }
  a {
    margin: 0;
    display: flex;
    img {
      width: 35px;
      &:hover {
        cursor: pointer;
        opacity: 0.6;
        transform: scale(1.07);
      }
    }
  }
`;

function Year() {
  let date = new Date().getFullYear();
  return date;
}

const FooterNav = [
  {
    title: "DAPP",
    href: "",
    disabled: false,
  },
  {
    title: "COSMIC BLOG",
    href: "",
    disabled: true,
  },
  {
    title: "COSMIC STATS",
    href: "",
    disabled: true,
  },
  {
    title: "RECRUITING",
    href: "https://cosmicexodus.finance/hiring",
    disabled: false,
  },
  {
    title: "CONTACT US",
    href: "https://cosmicexodus.finance/contact",
    disabled: false,
  },
  {
    title: "FAQ",
    href: "https://cosmicexodus.finance/faq",
    disabled: false,
  },

  {
    title: "AUDIT",
    href: "",
    disabled: true,
  },
];

const FooterCopyright = () => {
  return (
    <>
      <FooterBox>
        <img
          id="scrollTop"
          alt="scroll top"
          src="svg/blue-arrow.svg"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
        <hr />

        <div className="logos-zone">
          <a
            href="https://cosmicexodus.finance/"
            target={"_blank"}
            rel="noreferrer"
          >
            <img
              alt="cosmic exodus"
              src="https://media.discordapp.net/attachments/918938729014505522/945002174537138226/LogoCosmic-Exodus.png?width=636&height=636"
            />
          </a>
          <img
            alt="cosmic exodus"
            src="svg/light-cross.svg"
            className="cross"
          />
          <a
            href="https://twitter.com/_EverywhereTeam"
            target={"_blank"}
            rel="noreferrer"
          >
            <img
              alt="everywhere"
              className="everywhere"
              src="svg/everywhere-logo.svg"
            />
          </a>
        </div>
        <hr id="small" />
        <p>Powered by:</p>
        <div className="powered-logos">
          <a
            href="https://www.avax.network/"
            target={"_blank"}
            rel="noreferrer"
          >
            <img className="div1" alt="avalanche" src="svg/coins/avax.svg" />
          </a>
          <a href="https://moralis.io/" target={"_blank"} rel="noreferrer">
            <img className="div2" alt="moralis" src="svg/moralis.svg" />
          </a>

          <a href="https://unity.com/fr" target={"_blank"} rel="noreferrer">
            <img className="div3" alt="unity" src="svg/unity.svg" />
          </a>
        </div>
        <br />
        <nav>
          {FooterNav.map((elem) => {
            return (
              <a
                href={elem.href}
                key={elem.title}
                target={!elem.disabled ? "_blank " : ""}
                rel={!elem.disabled ? "noreferrer" : ""}
              >
                <h4
                  className={
                    elem.disabled ? "menu-footer disabled" : "menu-footer"
                  }
                >
                  {elem.title}
                </h4>
              </a>
            );
          })}
        </nav>
        <br />
        <FooterText>
          <p>Cosmic Exodus® | {Year()} </p>
          <a
            href="https://linktr.ee/Cosmic_Exodus"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="All link in one" src="svg/linktr.svg" />
          </a>
        </FooterText>
      </FooterBox>
    </>
  );
};

export default FooterCopyright;
