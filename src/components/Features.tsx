// images
import FeaturesImage1 from "../assets/features-image-1.png";
import FeaturesImage2 from "../assets/features-image-2.png";

// vectors
import Vector1 from "../assets/features-vector-1.svg";
import Vector2 from "../assets/features-vector-2.svg";
import Vector3 from "../assets/features-vector-3.svg";

function Features() {
  return (
    <section className="pt-50 flex flex-col justify-center items-center gap-15">
      <div className="flex flex-col justify-center items-center gap-7">
        <h1 className="text-white w-70 md:w-170 font-light text-[52px] md:text-[80px] leading-15 md:leading-22 tracking-[0.2px] text-center">
          FEATURES
        </h1>
        <p className="text-white w-61 md:w-120 opacity-100 text-center text-sm">
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row justify-center items-center xl:items-end gap-5">
        <div className="relative inline-block">
          <img src={FeaturesImage1} alt="image" className="block" />

          <img
            src={FeaturesImage2}
            alt="image"
            className="absolute h-1/2 xl:h-auto -bottom-16 left-1/2 -translate-x-1/2 xl:left-auto xl:translate-x-0 xl:-right-6 z-10"
          />
        </div>
        <div className="h-full flex flex-col gap-10 text-white mt-30 xl:m-0">
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-2">
              <img src={Vector1} alt="vector" className="mt-0.75" />
              <p className="text-lg w-35 leading-6">A single source of truth</p>
            </div>
            <p className="text-gray-200 w-57">
              When you add work to your Slate calendar we automatically
              calculate useful insights
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-2">
              <img src={Vector2} alt="vector" className="mt-0.75" />
              <p className="text-lg w-35 leading-6">Intuitive interface</p>
            </div>
            <p className="text-gray-200 w-57">
              When you add work to your Slate calendar we automatically
              calculate useful insights
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-2">
              <img src={Vector3} alt="vector" className="mt-0.75" />
              <p className="text-lg w-35 leading-6">Or with rules</p>
            </div>
            <p className="text-gray-200 w-57">
              When you add work to your Slate calendar we automatically
              calculate useful insights
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
