import Container from "app/sections/Container";
import MarqueeVert from "app/components/MarqueeVert";
import { Card } from "app/components/Card";
import Footer from "app/sections/Footer";
import GrowWithoutLimits from "../../components/GrowWithoutLimits";

const progressImages = [
  { img: "/progress/1.jpg" },
  {
    img: "/progress/2.jpg",
  },
  {
    img: "/progress/3.jpg",
  },
  {
    img: "/progress/4.jpg",
  },
  {
    img: "/progress/5.jpg",
  },
  {
    img: "/progress/6.jpg",
  },
  {
    img: "/progress/6.jpg",
  },
  {
    img: "/progress/7.jpg",
  },
  {
    img: "/progress/8.jpg",
  },
  {
    img: "/progress/9.jpg",
  },
  {
    img: "/progress/10.jpg",
  },
  {
    img: "/progress/11.jpg",
  },
  {
    img: "/progress/12.jpg",
  },
  {
    img: "/progress/13.jpg",
  },
];

const Services = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full sm:w-8/12 mb-10">
        <div className="container mx-auto h-full sm:p-10">
          <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
            <div className="w-full">
              <div className="text-2xl lg:text-3xl tracking-widest font-GTAmerica font-bold">
                <div className="flex flex-row justify-start space-x-3">
                  <p className="font-GTAmerica font-bold text-6xl md:text-7xl mt-8 tracking-normal text-balance ">
                    BETT
                    <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                      ER.{" "}
                    </span>
                  </p>
                  <p className="font-GTAmerica font-bold text-6xl md:text-7xl mt-8 tracking-normal text-balance ">
                    {" "}
                    FAST
                    <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                      ER.{" "}
                    </span>
                  </p>
                  <p className="font-GTAmerica font-bold text-6xl md:text-7xl mt-8 tracking-normal text-balance ">
                    SMART
                    <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                      ER.{" "}
                    </span>
                  </p>
                </div>

                <div className="w-40 h-[2px] bg-gradient-to-bl from-[#27253c] to-[#0000ff] my-4"></div>
              </div>
              <p className="text-xl font-arial mt-7 mb-10">
                We deliver exceptional value through tailored services for
                better outcomes, faster results, and smarter decisions.
              </p>
            </div>
          </header>
        </div>
      </div>
      <img
        src="/wave-2.jpg"
        alt="wave"
        className="w-full h-full object-cover  sm:h-screen sm:w-4/12  rounded-md"
      />

      <Container>
        <section>
          <div className="">
            <div className="px-8 pb-24 mx-auto mb-[-50px]  bg-white">
              <div className="flex flex-col">
                {/* Starts component */}
                <div className="mt-6 pt-12">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-1 md:gap-24 items-center text-center">
                    {/* Marquee comes first on mobile */}

                    <div>
                      <p className="font-GTAmerica font-bold text-6xl md:text-7xl mt-8 tracking-normal text-balance ">
                        OUR
                        <span className="bg-gradient-to-bl from-[#17197a] to-[#0000ff] bg-clip-text text-transparent">
                          {"  "} VALUE {"  "}
                        </span>
                        ADDED SERVICES
                        {"  "}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Ends component 1 */}
                <GrowWithoutLimits> </GrowWithoutLimits>
                <div className="mt-[-100px]"></div>
                <GrowWithoutLimits> </GrowWithoutLimits>
              </div>
            </div>
          </div>
        </section>
      </Container>

      <Container className="w-full mt-[-100px]">
        <section className=" text-black  min-h-screen rounded-md">
          <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
            <div className="flex justify-center pb-10">
              <p className="font-GTAmerica font-bold text-6xl md:text-7xl mt-8 tracking-normal text-balance ">
                FREQUENTLY ASKED
                <span className="bg-gradient-to-bl from-[#17197a] to-[#0000ff] bg-clip-text text-transparent">
                  {"  "} QUESTIONS {"  "}
                </span>
              </p>
            </div>
            <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700 text-black">
              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  What roles can I outsource?
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    You can easily place an order on our website by browsing our
                    product catalog, selecting the items you want, and adding
                    them to your cart. Then, proceed to checkout, where you can
                    provide your shipping and payment information to complete
                    the order.
                  </p>
                </div>
              </details>
              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  What do I gain by outsourcing?
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    We accept various payment methods, including credit cards,
                    debit cards, net banking, and mobile wallet payments. You
                    can choose the payment option that is most convenient for
                    you during the checkout process.
                  </p>
                </div>
              </details>
              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  How do you ensure the security of my financial data?{" "}
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    Shipping times may vary depending on your location and the
                    shipping method chosen. Typically, orders are processed
                    within 1-2 business days, and delivery can take 3-7 business
                    days within India. You will receive a tracking notification
                    once your order is shipped.
                  </p>
                </div>
              </details>
              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  How Do You Handle Time Zone Differences?{" "}
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    Yes, we have a hassle-free return policy. If you are not
                    satisfied with your purchase, you can initiate a return
                    within 30 days of receiving the product. Please contact our
                    customer support at{" "}
                    <a href="" className="underline">
                      example@gmail.com
                    </a>{" "}
                    for assistance.
                  </p>
                </div>
              </details>
              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  Do You Offer Any Guarantees or Service Level Agreements
                  (SLAs)?{" "}
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    Currently, we only provide shipping services within India.
                    However, we may consider expanding our shipping options to
                    international locations in the future. Please stay updated
                    with our website for any changes in shipping destinations.
                  </p>
                </div>
              </details>
              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  Where are your offices located?{" "}
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    If you have any questions, concerns, or need assistance, you
                    can reach our customer support team at 9911083755 during our
                    business hours, Monday to Saturday from 10 am to 6 pm. You
                    can also contact us via email at{" "}
                    <a href="" className="underline">
                      example@gmail.com
                    </a>
                    .
                  </p>
                </div>
              </details>
              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  Can you tailor your services to meet my specific business
                  needs?{" "}
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    You can find our detailed terms and conditions by visiting
                    our{" "}
                    <a href="" className="underline">
                      Terms of Service
                    </a>{" "}
                    page on our website. It includes information about our
                    policies, user guidelines, and more.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default Services;
