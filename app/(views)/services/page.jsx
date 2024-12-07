import Container from "app/sections/Container";
import HoverCard3 from "app/components/HoverCard3";
import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";
import {
  DividerBlueCenter,
  DividerBlueLeft,
  DividerWhiteLeft,
  DividerWhiteCenter,
} from "app/components/Divider";

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
const services = [
  {
    title: "Finance & Accounting",
  },
  {
    title: "Australian Accounting & Financial Services ",
  },
  {
    title: "Consultancy & Projects",
  },
  {
    title: "Technology",
  },
];
const services2 = [
  {
    title: "Admin Support",
  },
  {
    title: "Digital Marketing",
  },
  {
    title: "Human Resources",
  },
  {
    title: "Remote Teams",
  },
];
const Services = () => {
  return (
    <div className="pt-[10vh] md:pt-[10vh]">
      <section className="flex flex-wrap">
        <div className="w-full sm:w-8/12 mb-10">
          <div className="container mx-auto h-full p-4 sm:p-10">
            <header className="flex flex-col md:flex-row items-center  lg:space-x-8 h-full mt-10 lg:mt-0">
              <div className="w-full">
                <div className="text-2xl lg:text-3xl tracking-widest font-GTAmerica font-bold">
                  SERVICES
                  <span className="bg-gradient-to-bl from-[#27253c] to-[#0000ff] bg-clip-text text-transparent">
                    .
                  </span>
                  <div className="flex justify-start md:justify-start w-full  md:pr-10 ">
                    <div className="w-20 md:w-40 h-[2px] bg-gradient-to-bl from-[#27253c] to-[#0000ff] my-4"></div>
                  </div>
                </div>
                <div className="text-2xl lg:text-3xl tracking-widest font-GTAmerica font-bold">
                  <div className="w-full lg:w-[80%]"></div>
                  <div className="flex  md:flex-row justify-start space-y-3 md:space-y-0 md:space-x-3 max-w-9">
                    <div className="text-5xl md:text-[8vw] lg:text-[6vw]  font-GTAmerica font-bold text-balance">
                      BETTER.
                    </div>
                    <div className="text-5xl md:text-[8vw] lg:text-[6vw]  font-GTAmerica font-bold text-balance">
                      FASTER.
                    </div>
                    <div className="text-5xl md:text-[8vw] lg:text-[6vw]  font-GTAmerica font-bold text-balance">
                      <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                        SMARTER.
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-lg sm:text-xl font-arial mt-7 mb-10 leading-relaxed">
                  We deliver exceptional value through tailored services for
                  better outcomes, faster results, and smarter decisions.
                </p>
              </div>
            </header>
          </div>
        </div>
        <img
          src="/serv/main.jpg"
          alt="wave"
          className="w-full sm:w-4/12 h-64sm:h-screen object-cover rounded-md"
        />
      </section>

      <section className="bg-white dark:bg-gray-900 pt-[5vh] md:pt-[5vh]">
        <div className="py-8 px-4 mx-auto  lg:py-16 lg:px-6">
          <div className="mx-auto-sm text-center mb-8 ">
            <div className={headingStyles.primaryCenter}>
              OUR
              <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                {" "}
                VALUE-ADDED
              </span>{" "}
              SERVICES
            </div>
            <DividerBlueCenter />
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4  px-[5vw]">
            <HoverCard3
              title={"Finance & Accounting"}
              description={
                <div>
                  <a href="/services/finance-and-accounting">
                    <span className="text-white font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2">
                      Learn More
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 25 25"
                      className="w-5 h-5 fill-current "
                    >
                      <path
                        d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                        data-name="Right"
                      />
                    </svg>
                  </a>
                </div>
              }
              img={"/serv/financeAcc.jpg"}
            />
            <HoverCard3
              title={"Technology"}
              description={
                <div>
                  <a href="/services/technology">
                    <span className="text-white font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2">
                      Learn More
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 25 25"
                      className="w-5 h-5 fill-current "
                    >
                      <path
                        d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                        data-name="Right"
                      />
                    </svg>
                  </a>
                </div>
              }
              img={"/serv/tech.jpg"}
            />
            <HoverCard3
              title={"Consultancy & Projects"}
              description={
                <div>
                  <a href="/services/consultancy-and-projects">
                    <span className="text-white font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2">
                      Learn More
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 25 25"
                      className="w-5 h-5 fill-current "
                    >
                      <path
                        d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                        data-name="Right"
                      />
                    </svg>
                  </a>
                </div>
              }
              img={"/serv/projects.jpg"}
            />
            <HoverCard3
              title={"Australian Accounting & Financial Services"}
              description={
                <div>
                  <a href="/services/australian-finance-and-accounting">
                    <span className="text-white font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2">
                      Learn More
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 25 25"
                      className="w-5 h-5 fill-current "
                    >
                      <path
                        d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                        data-name="Right"
                      />
                    </svg>
                  </a>
                </div>
              }
              img={"/serv/aus.jpg"}
            />
            <HoverCard3
              title={"Admin Support"}
              description={
                <div>
                  <a href="/services/admin-support">
                    <span className="text-white font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2">
                      Learn More
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 25 25"
                      className="w-5 h-5 fill-current "
                    >
                      <path
                        d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                        data-name="Right"
                      />
                    </svg>
                  </a>
                </div>
              }
              img={"/serv/admin.jpg"}
            />
            <HoverCard3
              title={"Digital Marketing"}
              description={
                <div>
                  <a href="/services/digital-marketing">
                    <span className="text-white font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2">
                      Learn More
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 25 25"
                      className="w-5 h-5 fill-current "
                    >
                      <path
                        d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                        data-name="Right"
                      />
                    </svg>
                  </a>
                </div>
              }
              img={"/serv/DigitalMarketing.jpg"}
            />
            <HoverCard3
              title={"Human Resources"}
              description={
                <div>
                  <a href="/services/human-resources">
                    <span className="text-white font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2">
                      Learn More
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 25 25"
                      className="w-5 h-5 fill-current "
                    >
                      <path
                        d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                        data-name="Right"
                      />
                    </svg>
                  </a>
                </div>
              }
              img={"/serv/HumanResources.jpg"}
            />
            <HoverCard3
              title={"Remote Teams"}
              description={
                <div>
                  <a href="/services/remote-teams">
                    <span className="text-white font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2">
                      Learn More
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 25 25"
                      className="w-5 h-5 fill-current "
                    >
                      <path
                        d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                        data-name="Right"
                      />
                    </svg>
                  </a>
                </div>
              }
              img={"/serv/remote.jpg"}
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4  px-[5vw]"></div>
      </section>

      <Container className="w-full mt-[-2vh]">
        <section className=" text-black  min-h-[60vh] rounded-md">
          <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
            <div className="flex justify-center pb-10">
              <p className={headingStyles.primaryCenter}>
                FREQUENTLY ASKED
                <span className="bg-gradient-to-bl from-[#17197a] to-[#0000ff] bg-clip-text text-transparent">
                  {"  "} QUESTIONS {"  "}
                </span>
                <DividerBlueCenter />
              </p>
            </div>

            <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700 text-black">
              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  What roles can I outsource?
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    You can outsource any back-office function including Finance
                    & Accounting, Human Resources, Technology Services, and
                    Marketing. You can either hire dedicated resources for
                    specialized, high-demand niches or hire entire teams to
                    completely outsource your function.
                  </p>
                </div>
              </details>
              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  What do I gain by outsourcing?
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    - Reduce overhead costs: Outsourcing non-core functions can
                    significantly reduce your expenses related to hiring,
                    training, and managing in-house staff. This can be as much
                    as 60-70%. <br />
                    - Access to specialized expertise: We have deep-domain
                    expertise in specific business processes.
                    <br />- Improve scalability: We can help you scale their
                    operations quickly and flexibly to meet changing demands. 
                    Focus on growth: By outsourcing you can concentrate on
                    growing your business with our support
                  </p>
                </div>
              </details>
              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  What roles can I outsource?
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    You can outsource any back-office function including Finance
                    & Accounting, Human Resources, Technology Services, and
                    Marketing. You can either hire dedicated resources for
                    specialized, high-demand niches or hire entire teams to
                    completely outsource your function,
                  </p>
                </div>
              </details>

              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  How do you ensure the security of my financial data?
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    We adhere to all global standards such as GDPR, DPA, and
                    Australian Privacy Act, and we are also an ISO 27001
                    certified organization.
                  </p>
                </div>
              </details>

              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  How Do You Handle Time Zone Differences?
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    We work around your preferred time zone to ensure seamless
                    collaboration. Our infrastructure is designed for 24/7
                    operations, so no matter the time, we’re available when you
                    need us. Additionally, our labor laws are flexible and
                    industry-adapted, allowing us to accommodate your specific
                    scheduling requirements without disruption.
                  </p>
                </div>
              </details>

              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  Do You Offer Any Guarantees or Service Level Agreements
                  (SLAs)?
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    Yes, we are confident in the quality of our services and
                    offer a Service Level Agreement that outlines our commitment
                    to you. The SLA specifies key performance indicators (KPIs)
                    to ensure your satisfaction and accountability.
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
                    Absolutely! We create customized solutions tailored to your
                    business goals. With experience across various industries,
                    we collaborate closely with you to understand your unique
                    requirements and deliver a solution that perfectly fits your
                    needs.
                  </p>
                </div>
              </details>

              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  Where are your offices located?
                </summary>
                <div className="px-4 pb-4">
                  <div>
                    We are equipped with two cutting-edge facilities—one
                    situated at the World Trade Centre in Colombo&apos;s
                    financial hub, and the other conveniently located just 5
                    kilometers away from it in the heart of Colombo.
                  </div>
                </div>
              </details>

              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  How does H Connect International’s pricing structure compare
                  to other outsourcing companies?
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    We adopt a transparent pricing structure that considers the
                    complexity of each job. For further details, feel free to
                    reach out to us, and we will provide you with access to our
                    pricing information.
                  </p>
                </div>
              </details>

              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  Why does outsourcing & offshoring to Sri Lanka provide such
                  substantial cost savings?
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    Sri Lanka offers a highly skilled talent pool, a 91%
                    literacy rate, and a flexible education system. Combined
                    with lower living costs and a favorable exchange rate,
                    businesses can achieve significant cost reductions while
                    maintaining high quality and productivity.
                  </p>
                </div>
              </details>

              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  How do I get started with BPO?
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    We recommend a free consultation with us to assess your
                    needs and recommend the best possible approach that fits
                    your needs.
                  </p>
                </div>
              </details>

              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  Will BPO replace my employees?{" "}
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    BPO is designed to improve processes, not replace employees.
                    You will have an off-shore team at H Connect International,
                    who can free up your on-shore team to focus on higher-value
                    tasks.
                  </p>
                </div>
              </details>

              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  Is BPO complex to implement?
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    We have a comprehensive 5-staged BPO onboarding process in
                    place to ensure smooth implementation. We offer change
                    management services to make the transition as smooth as
                    possible.
                  </p>
                </div>
              </details>

              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  How can I measure the success of BPO?
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    We believe in transparency. We have data and analytics in
                    place to track improvements in efficiency, cost savings,
                    time savings, and other key metrics. We have quarterly
                    service reviews with our clients. These sessions allow us to
                    fine-tune our strategies, address any concerns, and reaffirm
                    our commitment to exceeding expectations.
                  </p>
                </div>
              </details>

              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  How long does it take to setup an offshore team?
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    Our sourcing and onboarding process typically takes 6-8
                    weeks. This is complete with induction and relevant
                    training.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Services;
