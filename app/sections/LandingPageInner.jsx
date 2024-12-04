const LandingPageInner = ({
  titleBeforeBlue,
  titleAfterBlue,
  blueTitle,
  description,
  subtitle,
  ImgUrl,
}) => {
  return (
    <section className="flex flex-wrap flex-col-reverse sm:flex-row">
      {/* Text Content */}
      <div className="w-full sm:w-8/12  ">
        <div className="container mx-auto lg:px-20 h-[50vh] md:h-dvh ">
          <div className="container px-4 flex flex-col justify-center items-center h-full lg:mt-0 ">
            <div className="w-full text-center md:text-left ">
              <div className="text-2xl lg:text-3xl tracking-widest font-GTAmerica font-bold">
                {subtitle}
                <span className="bg-gradient-to-bl from-[#27253c] to-[#0000ff] bg-clip-text text-transparent">
                  .
                </span>
                <div className="flex justify-center md:justify-start w-full">
                  <div className="w-40 h-[2px] bg-gradient-to-bl from-[#27253c] to-[#0000ff] my-4"></div>
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-[6vw] font-GTAmerica font-bold text-center md:text-left pr-2">
                {titleBeforeBlue}
                <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                  {blueTitle}
                </span>
                <br /> {titleAfterBlue}
              </h1>
              <p className="text-sm md:text-base xl:text-xl font-arial mt-7 text-center md:text-left">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image */}
      <img
        src={ImgUrl}
        alt="Finance Reports"
        className="w-full sm:h-screen sm:w-4/12 object-cover hidden md:block"
      />
    </section>
  );
};

export default LandingPageInner;
