import { Pangolin } from "next/font/google";
import Image from "next/image";

const pangolin = Pangolin({
  subsets: ["latin"],
  weight: "400",
});

const Note = () => {
  return (
    <section className="relative container flex flex-col items-center lg:mt-[230px]">
      <h1 className="text-[24px] mb-5 lg:mb-0 lg:text-[60px] lg:leading-[65px] text-white text-center">
        $BENSON Note to Anon Reader
      </h1>
      <div className="relative lg:mt-[107px]">
        <div className="hidden lg:block lg:absolute z-40 -right-[280px] bottom-[280px]">
          <Image src="/img/note-1.png" alt="mew 1" height="351" width="350" />
        </div>
        <div className="hidden lg:block absolute -left-[200px] bottom-[95px] -z-10">
          <Image src="/img/note-2.png" alt="mew 2" height="300" width="300" />
        </div>
        <div className="hidden lg:block absolute z-50 text-[128px] leading-[32px] text-action opacity-70">
          🐾
        </div>
        <div className="bg-white w-[286px] h-[222px] lg:w-[572px] lg:h-[444px] rounded-[10px] border-[4px] border-action shadow-lg shadow-action" />
        <div
          className={`bg-white w-[286px] h-[222px] lg:w-[572px] lg:h-[444px] rounded-[10px] border-[4px] border-action ${pangolin.className} rotate-[-5deg] absolute left-1/2 -translate-x-1/2 top-0 flex flex-col items-center pt-14 shadow-xl shadow-action`}
        >
          <h3 className="lg:text-[60px] lg:leading-[65px]">
            Cat season is here!
          </h3>
          <p className="mt-5 lg:text-[35px] rotate-[5deg] text-center lg:leading-[32px] lg:mt-[68px]">
            Are you swift enough to get
            <br />
            #BASED with $BENSON?
          </p>
        </div>
        <div className="flex justify-center lg:mt-[105px]">
          <button className="mt-10 lg:w-[245px] lg:h-[62px] text-[24px] leading-normal rounded-[12px] p-5 lg:p-0 bg-action text-white">
            Spread the word!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Note;
