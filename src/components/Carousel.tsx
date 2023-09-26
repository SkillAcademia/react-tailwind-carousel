import { useState } from "react";
import Button from "./Button";
import Icons from "./Icons";

const Carousel = ({ slides }: { slides: string[] }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="group relative w-full max-w-7xl aspect-video flex flex-col items-center justify-center overflow-hidden">
        <div className="w-full h-full inline-flex overflow-hidden">
          {slides.map((item, index) => (
            <img
              id={`image-${index}`}
              key={index}
              src={item}
              className={`w-full h-full min-w-full object-cover object-center transition-all duration-500 ${
                currentSlideIndex === index ? "animate-fade" : "hidden"
              }`}
            />
          ))}
        </div>
        <Button className="left-5" onClick={prevSlide}>
          <Icons.ChevronLeft width={20} height={20} />
        </Button>

        <Button className="right-5" onClick={nextSlide}>
          <Icons.ChevronRight width={20} height={20} />
        </Button>
      </div>
      <div className="mt-6 flex items-center gap-4">
        {slides.map((_, index) => (
          <div
            onClick={() => setCurrentSlideIndex(index)}
            className={`h-4 w-4 rounded-full transition-colors duration-200 cursor-pointer ${
              currentSlideIndex === index ? "bg-white" : "bg-black/50"
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default Carousel;
