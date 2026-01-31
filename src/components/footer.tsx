// icons
import IconLocation from "../assets/footer/footer-icon-location.svg";
import IconCell from "../assets/footer/footer-icon-cell.svg";
import IconTwitter from "../assets/footer/footer-icon-twitter.svg";
import IconFacebook from "../assets/footer/footer-icon-facebook.svg";
import IconLinkedin from "../assets/footer/footer-icon-linkedin.svg";

function Footer() {
  return (
    <footer className="my-20 w-full flex flex-col lg:flex-row justify-center items-center gap-20 lg:gap-[18%] text-white">
      <div className="flex flex-col lg:flex-row gap-20 items-start w-60 md:w-70 lg:w-auto">
        <div className="flex flex-col gap-6">
          <h6 className="text-lg">Fingertipe</h6>
          <div className="flex flex-col gap-3 text-sm">
            <a className="cursor-pointer">Home</a>
            <a className="cursor-pointer">Examples</a>
            <a className="cursor-pointer">Pricing</a>
            <a className="cursor-pointer">Updates</a>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h6 className="text-lg">Resources</h6>
          <div className="flex flex-col gap-3 text-sm">
            <a className="cursor-pointer">Home</a>
            <a className="cursor-pointer">Examples</a>
            <a className="cursor-pointer">Pricing</a>
            <a className="cursor-pointer">Updates</a>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h6 className="text-lg">About</h6>
          <div className="flex flex-col gap-3 text-sm">
            <a className="cursor-pointer">Home</a>
            <a className="cursor-pointer">Examples</a>
            <a className="cursor-pointer">Pricing</a>
            <a className="cursor-pointer">Updates</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 text-sm w-60 md:w-70 lg:w-auto">
        <div className="flex items-center gap-2">
          <img src={IconLocation} alt="location icon" className="w-8 h-8" />
          <p>7480 Mockingbird Hill undefined </p>
        </div>
        <div className="flex items-center gap-2">
          <img src={IconCell} alt="cell icon" className="w-8 h-8" />
          <p>(239) 555-0108</p>
        </div>
        <div className="flex items-center gap-5">
          <img
            src={IconTwitter}
            alt="twitter icon"
            className="w-7 h-7 cursor-pointer"
          />
          <img
            src={IconFacebook}
            alt="facebook icon"
            className="w-7 h-7 cursor-pointer"
          />
          <img
            src={IconLinkedin}
            alt="linkedin icon"
            className="w-7 h-7 cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
