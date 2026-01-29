import ContentsMacBookPro from "../assets/contents-macbook-pro.png";
import ContentsScreen from "../assets/contents-screen.png";

function Contents() {
  return (
    <section className="pt-50 flex flex-col justify-center items-center gap-15">
      <div className="flex flex-col justify-center items-center gap-7">
        <h1 className="text-white w-70 md:w-170 font-light text-[52px] md:text-[80px] leading-15 md:leading-22 tracking-[0.2px] text-center">
          Contents
        </h1>
        <p className="text-white w-61 md:w-120 opacity-100 text-center text-sm">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 max-w-250">
        <div className="bg-white rounded-lg flex flex-col justify-between items-center gap-6 py-5 px-5">
          <div className="flex flex-col gap-4 items-center">
            <h6 className="font-semibold text-lg">Work</h6>
            <p className="text-gray-600 w-55 opacity-100 text-center text-sm">
              Ever wondered if you're too reliant on a client for work? Slate
              helps you identify.
            </p>
          </div>
          <button className="text-white bg-[#4452FE] text-sm px-7 h-11">
            Sign Up
          </button>
          <img
            src={ContentsMacBookPro}
            alt="MacBook Pro"
            className="h-35 lg:h-45"
          />
        </div>
        <div className="bg-white rounded-lg flex flex-col justify-between items-center gap-6 py-5 px-5">
          <div className="flex flex-col gap-4 items-center">
            <h6 className="font-semibold text-lg">Design with real data</h6>
            <p className="text-gray-600 w-55 opacity-100 text-center text-sm">
              Ever wondered if you're too reliant on a client for work? Slate
              helps you identify.
            </p>
          </div>
          <button className="text-white bg-[#4452FE] text-sm px-7 h-11">
            Try For Free
          </button>
          <img
            src={ContentsScreen}
            alt="Screenshoot"
            className="h-39 lg:h-59 w-68.75 lg:w-94.75"
          />
        </div>
      </div>
    </section>
  );
}

export default Contents;
