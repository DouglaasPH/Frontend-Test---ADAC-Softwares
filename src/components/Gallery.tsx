// images
import GalleryImage1 from "../assets/gallery-image-1.jpg";
import GalleryImage2 from "../assets/gallery-image-2.jpg";
import GalleryImage3 from "../assets/gallery-image-3.jpg";
import GalleryImage4 from "../assets/gallery-image-4.jpg";
import GalleryImage5 from "../assets/gallery-image-5.jpg";
import GalleryImage6 from "../assets/gallery-image-6.jpg";
import GalleryImage7 from "../assets/gallery-image-7.jpg";

function Gallery() {
  return (
    <section className="pt-50 flex flex-col justify-center items-center gap-15">
      <div className="flex flex-col justify-center items-center gap-7">
        <h1 className="text-white w-70 md:w-170 font-light text-[52px] md:text-[80px] leading-15 md:leading-22 tracking-[0.2px] text-center">
          Gallery
        </h1>
        <p className="text-white w-61 md:w-120 opacity-100 text-center text-sm">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
      </div>
      <div className="flex flex-col justify-between items-center gap-5">
        {/* First row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:w-180 mx-auto">
          <img
            src={GalleryImage1}
            alt="Imagem"
            className="w-48 h-45 md:w-42 md:h-50.25 rounded-md object-cover"
          />
          <img
            src={GalleryImage2}
            alt="Imagem"
            className="w-48 h-45 md:w-42 md:h-50.25 rounded-md object-cover"
          />
          <img
            src={GalleryImage3}
            alt="Imagem"
            className="w-48 h-45 md:w-42 md:h-50.25 rounded-md object-cover"
          />
          <img
            src={GalleryImage4}
            alt="Imagem"
            className="w-48 h-45 md:w-42 md:h-50.25 rounded-md object-cover"
          />
        </div>
        {/* Second row */}
        <div className="w-190 hidden md:grid grid-cols-[37%_20%_37%] justify-between gap-5">
          <img
            src={GalleryImage5}
            alt="Imagem"
            className="rounded-md object-cover"
          />
          <img
            src={GalleryImage6}
            alt="Imagem"
            className="h-full rounded-md object-cover"
          />
          <img
            src={GalleryImage7}
            alt="Imagem"
            className="rounded-md object-cover"
          />
        </div>
      </div>
      <div>
        <button className="border text-white border-white text-sm px-7 h-11">
          See More
        </button>
      </div>
    </section>
  );
}

export default Gallery;
