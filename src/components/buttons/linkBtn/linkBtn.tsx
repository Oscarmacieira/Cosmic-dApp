import styled from "styled-components";

export const LinkBtn = (props: any) => {
  return (
    <>
      <ButtonLink onClick={() => props.onClick()}>
        <p> {props.text}</p>
        <Link alt="back" src="svg/link.svg" style={{ width: "15px" }} />
      </ButtonLink>
    </>
  );
};

const Link = styled.img`
  position: relative;
  margin-left: 5px;
  margin-right: 15px;

  cursor: pointer;
  p {
    height: 15px;
  }
`;

const ButtonLink = styled.div`
  color: ${({ theme }) => theme.palette.primary};
  display: flex;
  width: fit-content;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  &:hover {
    opacity: 0.6;
  }
  span {
    color: ${({ theme }) => theme.palette.contrast};
  }
`;
