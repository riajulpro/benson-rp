import Image from "next/image";

const Buy = () => {
  return (
    <section className="lg:mt-[380px] container relative mb-[251px]">
      <h1 className="text-[60px] leading-[65px] text-white text-center">
        How To Buy
      </h1>
      <div className="max-w-[985px] mx-auto bg-white border-[4px] border-action px-[48px] py-[50px] mt-[18px] text-[24px] leading-[32px] rounded-[40px]">
        1. Set up a crypto wallet with access to the Base network. Coinbase
        Wallet is recommended. If you are using another wallet such as MetaMask,
        follow these steps to connect to Base.
        <br />
        <br />
        2. Send Ethereum (ETH) to your wallet on the Base network, or send to
        your wallet via the Ethereum network then bridge to Base using Coinbase
        Wallet’s in-wallet bridge, Orbiter or Synapse.
        <br />
        <br />
        3. Head to LlamaSwap with this link that has an ETH to $BENSON swap
        preloaded. LlamaSwap is an aggregator that swaps via multiple sites at
        once, giving you the best price. Make sure your wallet is connected on
        the Base network.
        <br />
        <br />
        $BENSON contract address:
        <br />
        <br />
        4. Select how much you want to swap for $BENSON, click Swap and confirm
        the transaction in your wallet.
      </div>
      <div className="absolute -bottom-[240px] left-[190px]">
        <Image src="/img/buy.png" alt="Buy" height="350" width="350" />
      </div>
    </section>
  );
};

export default Buy;
