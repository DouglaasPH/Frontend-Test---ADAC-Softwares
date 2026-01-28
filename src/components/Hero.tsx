// image
import HeroImage from "../assets/hero-image.png";

function Hero() {
  return (
    <section className="pt-20 flex flex-col justify-center items-center gap-15">
      <div className="flex flex-col justify-center items-center gap-7">
        <h1 className="text-white w-70 md:w-170 font-light md:font-medium text-[52px] md:text-[80px] leading-15 md:leading-22 tracking-[0.2px] text-center">
          Work at the speed of thought
        </h1>
        <p className="text-white w-61 md:w-120 opacity-100 text-center text-sm">
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-5.25 md:gap-8.75">
        <button className="text-white bg-[#4452FE] text-sm px-7 h-11">
          Try For Free
        </button>
        <button className="border text-white border-white text-sm px-7 h-11">
          Learn More
        </button>
      </div>
      <div className="relative w-full flex flex-col justify-center items-center">
        <img
          src={HeroImage}
          alt="hero image"
          className="h-125 lg:h-190 xl:h-220 pb-30 object-cover"
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2
               w-full h-180
               bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#0E0E0E_120.15%)]
               pointer-events-none"
        />
      </div>
    </section>
  );
}

export default Hero;
