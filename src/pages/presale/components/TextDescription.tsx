import styled from "styled-components";

export const TextDescription = () => {
  return (
    <TextDescriptionStyle className="flex-for-desktop">
      <div className="text-zone">
        <p>
          All funding tokens are a <b>synthetic</b> asset, pegged 1:1 (ratio)
          with the “real token”.
        </p>
        <p>
          The price will increase each Monday, according to upload schedule.
        </p>
        <br />
        <p>
          After public listing users will be able to perform the swap, in a
          linear release model.
        </p>
        <p>
          This was chosen by design, in order to protect the community from
          scammers with fake contracts, bots attacking the initial liquidity or
          any team members printing extra tokens.
        </p>
        <br />
        <p>
          We do not wish to push the “start button” without having an audit from
          external services. It’s very important for us that we are sure
          everything is safe to use, avoiding future problems.
        </p>{" "}
        <br />
        <b>
          The tokens exchanged here will only be able to trade directly with the
          Cosmic DAO Fund.
        </b>{" "}
        <br />
        <p>
          Tokens that have not been used in this sale round may be used for OTC
          exchange, if a valued partner is found.
        </p>
      </div>
      <div className="outter-img">
        <img className="nice" alt="nice" src="svg/stickers/nice.svg" />
      </div>
    </TextDescriptionStyle>
  );
};

const TextDescriptionStyle = styled.div`
  position: relative;
  .text-zone {
  }
  p {
    margin: 2px;
  }

  .outter-img {
    display: flex;
  }
  .nice {
    margin: 10px;
    width: 200px;
    position: relative;
    bottom: 0;

    @media (max-width: 768px) {
      width: 50%;
      margin-inline: auto;
    }
  }
`;
