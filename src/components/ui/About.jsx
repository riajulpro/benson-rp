import Image from "next/image";

const About = () => {
  return (
    <section className="container flex flex-col items-center lg:mt-[185px] lg:py-[45px] lg:px-[275px] relative">
      <h1 className="text-[60px] leading-[65px] text-white">
        What is $BENSON?
      </h1>
      <div className="bg-white border-[4px] border-action rounded-[40px] lg:py-[17px] lg:px-[46px] text-[20px] leading-[32px] text-center mt-[67px] mb-[60px]">
        Olivia Benson, Taylor Swifts adopted Scottish Fold cat and the SECOND
        richest
        <p className="px-1">
          cat in the world with a net worth of $97 million dollars is now on
          Base,
        </p>
        <p>but there&apos;s one problem..</p>
        <br />
        Nala, the richest cat, stands in the way.
      </div>
      <button className="text-[24px] leading-normal rounded-[12px] lg:w-[208px] p-5 lg:p-0 lg:h-[68px] bg-action text-white">
        Buy $BENSON
      </button>
      <div className="absolute -right-[70px] bottom-[40px]">
        <Image
          src="/img/about.png"
          alt="About Benson"
          height="350"
          width="351"
        />
      </div>
    </section>
  );
};

export default About;
