import React, { useState } from "react";
import { RadioButton } from "../../components/buttons/radioButton";
import { Margin } from "./swap/swap";
import { Container } from "../../layout/Container";
import { Slippage } from "./DexComponents/ModalSlippage";
import { LiquidityDex } from "./liquidity";
import { SwapDEX } from "./swap";
import {
  StickerBottomLeft,
  StickerTopRight,
} from "../../components/ui/Stickers";
// import PageTitle from "../../layout/PageTitle";

const Dex = () => {
  const [swap, setSwap] = React.useState(true);
  const [isSlippage, setIsSlippage] = React.useState(false);

  // TBD: SLIPPAGE to call/save from/to DB
  // TBD: Implement verification if below 0 or over 50.
  const [slippage, setSlippage] = useState(2.45);

  const handleOption = () => {
    setSwap(!swap);
  };

  React.useEffect(() => {
    document.title = "DEX - Cosmic Exodus";
  });

  return (
    <Container>
      <Slippage
        onSelect1={() => setSlippage(0.1)}
        onSelect2={() => setSlippage(0.5)}
        onSelect3={() => setSlippage(1.0)}
        isOpen={isSlippage}
        onClose={() => {
          if (slippage > 50) {
            setSlippage(2.5);
          }
          setIsSlippage(!isSlippage);
        }}
        slippage={slippage}
        onChange={(value) => setSlippage(value)}
      />

      {/* <PageTitle>&nbsp;</PageTitle> */}
      <Margin />

      <StickerTopRight />
      <StickerBottomLeft />

      <RadioButton optOne="Swap" optTwo="Liquidity" function={handleOption} />
      <br />
      {swap ? (
        <>
          <SwapDEX
            setIsSlippage={() => setIsSlippage(!isSlippage)}
            slippage={slippage}
          />
        </>
      ) : (
        <>
          <LiquidityDex
            slippage={slippage}
            setIsSlippage={() => setIsSlippage(!isSlippage)}
          />
        </>
      )}
    </Container>
  );
};

export default Dex;
