import styled from "styled-components";

const ProgressBarWrapper = styled.div`
  background: white;
  border-radius: 30px;
  border: 0.25rem solid #ffffff;
  height: 3rem;
  position: relative;
  overflow: hidden;
  > .progress-bar-content {
    position: absolute;
    background: ${({ theme }) => theme.palette.secondary};
    height: 100%;
    border-radius: inherit;
    display: flex;
    align-items: center;
    > .amount-label {
      font-size: 1.75rem;
      margin: 1rem;
      font-weight: bold;
    }
  }
`;

const ProgressBar = ({ amount, showValue = true }) => {
  if (amount < 0) amount = 0;
  if (amount > 100) amount = 100;

  return (
    <ProgressBarWrapper>
      <div className="progress-bar-content" style={{ width: `${amount}%` }}>
        {showValue ? <span className="amount-label">{amount}%</span> : null}
      </div>
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
