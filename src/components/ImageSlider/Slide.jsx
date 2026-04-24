const Slide = ({ image, currentSlide }) => {
  return (
    <div
      className={`w-full h-full shrink-0`}
      style={{
        transform: `translateX(-${currentSlide * 100}%)`,
        transition: "transform 0.5s ease-in-out",
      }}
    >
      <img src={image} alt={""} loading="lazy" className="w-full h-full" />
    </div>
  );
};

export default Slide;
