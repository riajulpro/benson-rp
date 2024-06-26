const Token = () => {
  return (
    <section className="p-5 lg:p-0 container mt-5 lg:mt-[460px]">
      <h1 className="text-white text-center text-[24px] lg:text-[60px] lg:leading-[58px]">
        Based Benson&apos;s <br />
        Tokenomics
      </h1>
      <div className="lg:mt-[64px] bg-white rounded-[40px] max-w-[985px] mx-auto border-[4px] border-action p-1 lg:py-[80px] lg:px-[88px] grid lg:grid-cols-2 gap-3 lg:gap-[20px]">
        <div className="bg-primary text-white px-[56px] py-[42px] border-[4px] border-action rounded-[30px] flex flex-col items-center justify-center">
          <h1 className="text-[24px] lg:text-[48px] lg:leading-[58px]">
            Total Supply
          </h1>
          <p className="lg:text-[32px] leading-[58px]">500,000,000</p>
        </div>
        <div className="bg-primary text-white px-[56px] py-[42px] border-[4px] border-action rounded-[30px] flex flex-col items-center justify-center">
          <h1 className="lg:text-[48px] lg:leading-[58px]">100% LP</h1>
          <h1 className="lg:text-[48px] lg:leading-[58px]">0% Presale</h1>
        </div>
        <div className="bg-primary text-white px-[56px] py-[42px] border-[4px] border-action rounded-[30px] flex flex-col items-center justify-center">
          <h1 className="lg:text-[48px] lg:leading-[58px]">LP Burned</h1>
          <h1 className="lg:text-[48px] lg:leading-[58px]">At Launch</h1>
        </div>
        <div className="bg-primary text-white px-[56px] py-[42px] border-[4px] border-action rounded-[30px] flex flex-col items-center justify-center">
          <h1 className="lg:text-[48px] lg:leading-[58px]">Ownership</h1>
          <h1 className="lg:text-[48px] lg:leading-[58px]">Revoked</h1>
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
