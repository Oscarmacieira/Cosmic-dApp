import styled from "styled-components";

export const StickerTopRight = () => {
  return (
    <TopRightSticker
      className="planet-background"
      src="svg/planet.svg"
      alt="Planet"
    />
  );
};

export const StickerBottomLeft = () => {
  return (
    <BottomLeftSticker
      className="planet-background"
      src="svg/planet.svg"
      alt="Planet"
    />
  );
};

const TopRightSticker = styled.img`
  position: fixed;
  top: 20%;
  right: 100px;
  z-index: -1;
  width: 160px;
  @media (max-width: 768px) {
    right: 20px;
    top: 25vh;
    width: 100px;
  }
`;

const BottomLeftSticker = styled(TopRightSticker)`
  top: 70vh;
  left: 50px;

  width: 300px;
  @media (max-width: 768px) {
    left: -40px;
    top: 77vh;
  }
`;
