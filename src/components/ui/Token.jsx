const Token = () => {
  return (
    <section className="container mt-[460px]">
      <h1 className="text-white text-center text-[60px] leading-[58px]">
        Based Benson&apos;s <br />
        Tokenomics
      </h1>
      <div className="mt-[64px] bg-white rounded-[40px] max-w-[985px] mx-auto border-[4px] border-action py-[80px] px-[88px] grid grid-cols-2 gap-[20px]">
        <div className="bg-primary text-white px-[56px] py-[42px] border-[4px] border-action rounded-[30px] flex flex-col items-center justify-center">
          <h1 className="text-[48px] leading-[58px]">Total Supply</h1>
          <p className="text-[32px] leading-[58px]">500,000,000</p>
        </div>
        <div className="bg-primary text-white px-[56px] py-[42px] border-[4px] border-action rounded-[30px] flex flex-col items-center justify-center">
          <h1 className="text-[48px] leading-[58px]">100% LP</h1>
          <h1 className="text-[48px] leading-[58px]">0% Presale</h1>
        </div>
        <div className="bg-primary text-white px-[56px] py-[42px] border-[4px] border-action rounded-[30px] flex flex-col items-center justify-center">
          <h1 className="text-[48px] leading-[58px]">LP Burned</h1>
          <h1 className="text-[48px] leading-[58px]">At Launch</h1>
        </div>
        <div className="bg-primary text-white px-[56px] py-[42px] border-[4px] border-action rounded-[30px] flex flex-col items-center justify-center">
          <h1 className="text-[48px] leading-[58px]">Ownership</h1>
          <h1 className="text-[48px] leading-[58px]">Revoked</h1>
        </div>
      </div>
      <div className="flex justify-center mt-[64px]">
        <button className="lg:w-[245px] lg:h-[62px] text-[24px] leading-normal rounded-[12px] p-5 lg:p-0 bg-action text-white">
          See the Charts
        </button>
      </div>
    </section>
  );
};

export default Token;
