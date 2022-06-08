import { BoxContainer } from "../../../../components/ui/BoxContainer";

export const AprModal = () => {
  return (
    <>
      <BoxContainer isInfo={true}>
        <div className="flex">
          <img className="apr" alt="daily-APR" src="svg/daily-apr.svg" />
          <div>
            <p className="shy">Daily APR</p>
            <p>
              <b>2.4%</b>
            </p>
          </div>
        </div>
        <div className="divider" />

        <div className="flex">
          <img className="apr" alt="APY" src="svg/apy.svg" />
          <div>
            <p className="shy">APY</p>
            <p>
              <b>231%</b>
            </p>
          </div>
        </div>
        <div className="divider" />

        <div className="flex">
          <img className="apr" alt="APR" src="svg/apr.svg" />
          <div>
            <p className="shy">APR</p>
            <p>
              <b>64%</b>
            </p>
          </div>
        </div>
      </BoxContainer>
    </>
  );
};
