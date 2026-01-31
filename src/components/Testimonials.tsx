import ImageOfClaireBell from "../assets/testimonials/testimonials-claire-bell.png";
import ImageOfFranciscoLane from "../assets/testimonials/testimonials-francisco-lane.png";
import ImageOfJorgeMurphy from "../assets/testimonials/testimonials-jorge-murphy.png";
import ImageOfRalphFisher from "../assets/testimonials/testimonials-ralph-fisher.png";

function Testimonials() {
  return (
    <section className="pt-50 flex flex-col justify-center items-center gap-15">
      <div className="flex flex-col justify-center items-center gap-7">
        <h1 className="text-white w-70 md:w-170 font-light text-[52px] md:text-[80px] leading-15 md:leading-22 tracking-[0.2px] text-center">
          Testimonials
        </h1>
      </div>
      <div className="text-white grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* First Testimonial */}
        <div className="border border-[#DEDEDE] rounded-lg w-88 lg:w-107.5 h-94 lg:h-82 flex flex-col justify-start p-8 gap-5">
          <div className="flex items-center gap-5 text-[16px]">
            <img
              src={ImageOfClaireBell}
              alt="Image of Claire Bell"
              className="h-12.5 w-12.5 rounded-full"
            />
            <div>
              <p>Claire Bell</p>
              <p>Designer</p>
            </div>
          </div>
          <p className="w-[85%]">
            Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year. Slate helps you see how
            many more days you need to work to reach your financial goal for the
            month and year.your financial goal for the month and year.
          </p>
        </div>

        {/* Second Testimonial */}
        <div className="border border-[#DEDEDE] rounded-lg w-88 lg:w-107.5 h-94 lg:h-76 flex flex-col justify-start p-8 gap-5">
          <div className="flex items-center gap-5 text-[16px]">
            <img
              src={ImageOfFranciscoLane}
              alt="Image of Francisco Lane"
              className="h-12.5 w-12.5 rounded-full"
            />
            <div>
              <p>Francisco Lane</p>
              <p>Designer</p>
            </div>
          </div>
          <p className="w-[85%]">
            Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year. Slate helps you see how
            many more days you need to work to reach your financial goal for the
            month and year.
          </p>
        </div>

        {/* Third Testimonial */}
        <div className="border border-[#DEDEDE] rounded-lg w-88 lg:w-107.5 h-94 lg:h-76 flex flex-col justify-start p-8 gap-5">
          <div className="flex items-center gap-5 text-[16px]">
            <img
              src={ImageOfRalphFisher}
              alt="Image of Ralph Fisher"
              className="h-12.5 w-12.5 rounded-full"
            />
            <div>
              <p>Ralph Fisher</p>
              <p>Designer</p>
            </div>
          </div>
          <p className="w-[85%]">
            Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year. Slate helps you see how
            many more days you need to work to reach your financial goal for the
            month and year.
          </p>
        </div>

        {/* Fourth Testimonial */}
        <div className="border border-[#DEDEDE] rounded-lg w-88 lg:w-107.5 h-94 lg:h-76 flex flex-col justify-start p-8 gap-5 lg:-translate-y-6">
          <div className="flex items-center gap-5 text-[16px]">
            <img
              src={ImageOfJorgeMurphy}
              alt="Image of Jorge Murphy"
              className="h-12.5 w-12.5 rounded-full"
            />
            <div>
              <p>Jorge Murphy</p>
              <p>Designer</p>
            </div>
          </div>
          <p className="w-[85%]">
            Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year. Slate helps you see how
            many more days you need to work to reach your financial goal for the
            month and year.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
