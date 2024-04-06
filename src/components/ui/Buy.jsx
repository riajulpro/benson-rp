import Image from "next/image";

const Buy = () => {
  return (
    <section className="p-5 lg:p-0 mt-5 lg:mt-[380px] container relative lg:mb-[251px]">
      <h1 className="text-[24px] lg:text-[60px] leading-[65px] text-white text-center">
        How To Buy
      </h1>
      <div className="lg:m-0 max-w-[985px] mx-auto bg-white border-[4px] border-action p-5 lg:px-[70px] lg:py-[46px] mt-[18px] text-[24px] leading-[32px] rounded-[40px]">
        <div className="flex gap-1">
          <div>1.</div>
          <div>
            Set up a crypto wallet with access to the Base network. Coinbase
            Wallet is recommended. If you are using another wallet such as
            MetaMask, follow these steps to connect to Base.
          </div>
        </div>
        <br />
        <div className="flex gap-1">
          <div>2.</div>
          <div>
            Send Ethereum (ETH) to your wallet on the Base network, or send to
            your wallet via the Ethereum network then bridge to Base using
            Coinbase Wallet&apos;s in-wallet bridge, Orbiter or Synapse.
          </div>
        </div>
        <br />
        <div className="flex gap-1">
          <div>3.</div>
          <div>
            Head to LlamaSwap with this link that has an ETH to $BENSON swap
            preloaded. LlamaSwap is an aggregator that swaps via multiple sites
            at once, giving you the best price. Make sure your wallet is
            connected on the Base network.
            <br />
            $BENSON contract address:
          </div>
        </div>

        <br />
        <div className="flex gap-1">
          <div>4.</div>
          <div>
            Select how much you want to swap for $BENSON, click Swap and confirm
            the transaction in your wallet.
          </div>
        </div>
      </div>
      <div className="hidden lg:block absolute -bottom-[240px] left-[190px]">
        <Image src="/img/buy.png" alt="Buy" height="350" width="350" />
      </div>
    </section>
  );
};

export default Buy;
