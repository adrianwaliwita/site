import Button from "app/components/Button";
const CalltoAction = ({ title, description }) => {
  return (
    <div className=" h-auto ">
      <section>
        <div className="relative">
          <div className="relative">
            <div className="custom-screen py-28 relative">
              <div className="relative z-10 duration-1000 delay-150 opacity-1">
                <div className="max-w-[50vw] text-4xl md:text-4xl lg:text-7xl mx-auto text-center">
                  <h1 className="text-4xl md:text-4xl lg:text-7xl text-white font-bold font-GTAmerica">
                    {title}
                  </h1>

                  <p className=" text-gray-300 text-sm py-3 md:py-5 md:text-base leading-normal ">
                    {description}
                  </p>
                </div>
                <div className="flex justify-center font-medium text-md">
                  <form className="mt-6 flex flex-col items-center sm:flex-row sm:gap-x-3">
                    <div className="sm:pt-0 pt-3">
                      <Button />
                    </div>
                  </form>
                </div>
              </div>
              <img
                src="/wave-dark.jpg"
                decoding="async"
                data-nimg="1"
                className="w-full h-full object-fit absolute inset-0 pointer-events-none"
                loading="lazy"
                style={{ color: "transparent" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalltoAction;
