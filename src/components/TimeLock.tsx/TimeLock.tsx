import styled from "styled-components";
export const TimeLock = (props: any) => {
  return (
    <>
      <LockZone>
        <img alt="lock" src="svg/lock.svg" />
        <p>{props.lockTime} timelock</p>
      </LockZone>
    </>
  );
};

const LockZone = styled.div`
  display: flex;
  color: ${({ theme }) => theme.palette.primary};
  img {
    margin-right: 10px;
  }
`;
