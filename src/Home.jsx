/* eslint-disable react/prop-types */
import clsx from "clsx";
import { careers, events, industries, news, services, strength } from "./data";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CareerModal from "./components/CareerModal";

export default function Home() {
  return (
    <>
      <section
        className="w-full bg-black px-3 h-screen bg-no-repeat bg-contain lg:bg-70% bg-right"
        style={{
          backgroundImage: "url('/mockup-videos.gif')",
          backgroundPosition: "right",
        }}
      >
        <div className="layout grid grid-cols-1 lg:grid-cols-2 gap-10 pt-40">
          <div className="w-full text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1
              className={clsx(
                "text-white font-semibold",
                "text-4xl leading-relaxed lg:text-7xl px-12 lg:px-0"
              )}
            >
              Transforming your business.{" "}
              <span className="text-orange-500">Be our partner.</span>
            </h1>
            <button className="text-xs font-medium w-[250px] h-[50px] py-2 bg-white px-10 rounded-full block mt-10 hover:bg-orange-400 hover:text-white transition-colors duration-200">
              APPLY FOR A JOB
            </button>
            <button className="text-xs font-medium w-[250px] h-[50px] py-2 bg-white px-10 rounded-full block mt-5 hover:bg-orange-400 hover:text-white transition-colors duration-200">
              REQUEST FOR SERVICE CONSULTATION
            </button>
          </div>
          <div className="w-full"></div>
        </div>
      </section>
      <section className="relative" id="services">
        <div className="absolute top-0 left-0 w-full h-auto">
          <img
            src="/background2-scaled.jpg"
            className="object-contain w-full h-full"
          />
        </div>
        <section className="layout mx-auto relative z-10" id="services">
          <h2 className="text-2xl font-bold lg:text-5xl text-center pt-20">
            What we <span className="text-orange-500">offer?</span>
          </h2>
          <ul className="mt-20 lg:mt-36 grid grid-cols-1 lg:grid-cols-3 gap-5 px-3">
            {services.map((item) => (
              <ServiceItem
                key={item.title}
                title={item.title}
                image={item.image}
                description={item.description}
              />
            ))}
          </ul>
        </section>
      </section>
      <div className="w-full h-auto relative">
        <img
          src="/background5-2048x448.png"
          alt="Acc"
          className="object-contain w-full h-full"
        />
      </div>
      <section className="mt-12 lg:mt-24" id="about">
        <section className="layout grid grid-cols-1 lg:grid-cols-2 gap-10 px-3">
          <motion.div
            initial={{
              left: -100,
              opacity: 0,
            }}
            whileInView={{
              left: 0,
              opacity: 1,
            }}
            className="min-h-[300px] w-full bg-orange-500 relative"
          >
            <img
              src="/about-us.jpg"
              alt="About Us Image"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{
              right: -100,
              opacity: 0,
            }}
            whileInView={{
              right: 0,
              opacity: 1,
            }}
            className="relative"
          >
            <h2 className="text-8xl lg:text-9xl relative font-bold text-center">
              About <br />
              <span className="text-orange-500 absolute top-16 lg:top-20 right-1/2 translate-x-1/2">
                Us
              </span>
            </h2>
            <p className="text-sm text-center mt-28">
              We understand that success in today’s dynamic business environment
              requires the right talent, seamless administrative support, and
              expert visa services. As your dedicated partner, we bring
              unparalleled expertise to streamline your operations and empower
              your growth journey.
            </p>
          </motion.div>
        </section>
        <section className="mt-32 layout px-3">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            <span className="w-full h-1 bg-orange-500"></span>
            <h2 className="text-2xl lg:text-4xl text-center">
              What Sets Us Apart?
            </h2>
            <span className="w-full h-1 bg-orange-500"></span>
          </div>
          <ul className="flex flex-wrap justify-center mt-24">
            {strength.map((item) => (
              <StrengthItem
                key={item.title}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </ul>
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="order-last lg:order-first col-span-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
              <motion.div
                initial={{
                  left: -100,
                  opacity: 0,
                }}
                whileInView={{
                  left: 0,
                  opacity: 1,
                }}
                className="lg:col-start-1 lg:col-end-9 relative mt-16 lg:mt-0"
              >
                <h3 className="text-lg font-bold">Strategic Recruitment</h3>
                <p className="mt-5 text-sm">
                  Elevate your workforce with our strategic recruitment
                  solutions. We go beyond just filling positions – we find the
                  perfect match for your company culture and objectives,
                  ensuring long-term success.
                </p>
              </motion.div>
              <motion.div
                initial={{
                  left: -100,
                  opacity: 0,
                }}
                whileInView={{
                  left: 0,
                  opacity: 1,
                }}
                className="lg:col-start-2 lg:col-end-11 relative"
              >
                <h3 className="text-lg font-bold">Effortless Administration</h3>
                <p className="mt-5 text-sm">
                  Say goodbye to administrative hassles. Our comprehensive admin
                  services cover everything from documentation management to HR
                  support, allowing you to focus on your core business
                  functions.
                </p>
              </motion.div>
              <motion.div
                initial={{
                  left: -100,
                  opacity: 0,
                }}
                whileInView={{
                  left: 0,
                  opacity: 1,
                }}
                className="lg:col-start-3 lg:col-end-12 relative"
              >
                <h3 className="text-lg font-bold">Visa Expertise</h3>
                <p className="mt-5 text-sm">
                  Navigating visa processes can be a labyrinth. Let our visa
                  experts guide you through the complexities, offering reliable
                  and timely services for individuals and businesses alike.
                </p>
              </motion.div>
            </div>
            <div className="col-span-2">
              <h3 className="text-3xl text-center lg:text-right leading-[3rem]">
                Unlock Your Business Potential With{" "}
                <span className="text-orange-500 font-bold">8Bacus Corp</span>{" "}
                Your Complete Solutions Partner!
              </h3>
            </div>
          </div>
        </section>
        <div className="w-full h-auto mt-20">
          <img
            src="/background10-2048x448.png"
            alt="Acc"
            className="object-contain w-full h-full "
          />
        </div>
      </section>
      <section className="w-full bg-black relative -mt-1 px-3">
        <div className="layout pt-20 pb-24">
          <h2 className="text-5xl font-bold text-orange-500 text-center">
            Industries We Serve
          </h2>
          <ul className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-10">
            {industries.map((item, index) => (
              <IndustryItem
                title={item.title}
                key={`${item.title}${index}`}
                image={item.image}
              />
            ))}
          </ul>
          <p className="text-sm mt-5 text-white ">
            Your concerns are our priority. We proactively collaborate with you
            to understand your challenges and goals, ensuring that our services
            are perfectly aligned with your vision for success. We pride
            ourselves on being responsive and attentive partners, ready to
            address your needs and provide timely solutions.
          </p>
        </div>
      </section>
      <section className="-mt-2">
        <div className="w-full h-auto relative">
          <img
            src="/background11-2048x448.png"
            alt="Acc"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="layout flex flex-col items-center mt-20">
          <h2 className="text-5xl">Our Partners</h2>
          <div className="swiper"></div>
        </div>
        <div className="w-full h-auto mt-28">
          <img
            src="/background5-2048x448.png"
            alt="Acc"
            className="object-contain w-full h-full "
          />
        </div>
      </section>
      <CompanyEvents />
      <Careers />
      <section className="mt-24">
        <div className="layout grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-3">
          <motion.div
            initial={{
              scale: 0,
            }}
            whileInView={{
              scale: 1,
            }}
            className="w-full h-[500px] bg-orange-500 relative"
          >
            <img
              src="/8b-image-0001.jpg"
              alt="Image"
              className="object-cover w-full h-full"
            />
          </motion.div>
          <motion.div
            initial={{ right: -100 }}
            whileInView={{ right: 0 }}
            className="relative text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <h2 className="text-yellow-400 text-3xl font-semibold">
              Why Should You Choose Us?
            </h2>
            <p className="text-sm mt-6">
              Welcome to <strong>8Bacus Corp.</strong>, where excellence meets
              innovation. We pride ourselves on being the driving force behind
              your business success by providing unmatched recruitment, admin,
              and visa services. Choose us for a seamless journey toward growth
              and efficiency.
            </p>
            <a
              href=""
              className="px-16 py-3 bg-yellow-400 block w-fit rounded-full text-sm mt-8"
            >
              LEARN MORE
            </a>
          </motion.div>
        </div>
        <div className="w-full h-auto mt-28">
          <img
            src="/background8-2048x448.png"
            alt="Acc"
            className="object-contain w-full h-full "
          />
        </div>
      </section>
      <section className="mt-16" id="news">
        <div className="layout flex flex-col items-center px-3">
          <h2 className="text-5xl font-bold">News</h2>
          <ul className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-20">
            {news.map((item) => (
              <motion.li
                initial={{
                  top: -300,
                  opacity: 0.3,
                }}
                whileInView={{
                  top: 0,
                  opacity: 1,
                }}
                key={item.title}
                className="bg-white border relative"
              >
                <div className="w-full h-fit group relative py-8">
                  <div className="w-full h-[100px] realtive">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <a
                    href=""
                    className={clsx(
                      "group-hover:opacity-100 opacity-0 transition-opacity duration-200",
                      "flex flex-col items-center justify-center",
                      "bg-black/60 absolute top-0 left-0 w-full h-full"
                    )}
                  >
                    <img
                      src="/arrow-right-solid.svg"
                      alt="Arrow Icon"
                      height={20}
                      width={20}
                    />
                  </a>
                </div>
                <div className="mt-5 px-5">
                  <h3 className="font-semibold text-xl h-[100px] leading-6">
                    {item.title}
                  </h3>
                  <p className="text-sm line-clamp-2 mt-5">
                    {item.description}
                  </p>
                </div>
                <a
                  href=""
                  className="block mt-10 mx-5 mb-5 text-sm text-blue-700 font-medium"
                >
                  Read more
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="w-full h-auto mt-24">
          <img
            src="/background10-2048x448.png"
            alt="Acc"
            className="object-contain w-full h-full "
          />
        </div>
      </section>
      <section className="-mt-2 bg-black px-3">
        <div className="layout text-white pt-16 pb-8">
          <h2 className="text-5xl text-center">
            Connect with{" "}
            <span>
              <img src="/top-logo-head.png" className="h-16 inline" />
            </span>
          </h2>
          <p className="text-sm text-center mt-16">
            We are your dedicated partner on the path to success.
          </p>
          <div className="w-full h-[300px] lg:h-[500px] mt-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d811.8252873205869!2d121.01928024479025!3d14.558361812722476!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c94ae4f2887d%3A0x4f8768415d368f09!2sPBCom%20Tower!5e0!3m2!1sid!2sid!4v1722492786601!5m2!1sid!2sid"
              className="w-full h-full
                "
              style={{
                border: 0,
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

const Careers = () => {
  const [openModal, setOpenModal] = useState(false);
  const toggle = () => {
    setOpenModal(!openModal);
  };

  console.log(openModal);
  return (
    <>
      <AnimatePresence>
        {openModal && <CareerModal toggle={toggle} />}
      </AnimatePresence>
      <section className="mt-40" id="careers">
        <div className="layout flex flex-col items-center px-3">
          <h2 className="text-5xl">Careers</h2>
          <ul className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
            {careers.map((item) => (
              <motion.li
                onClick={toggle}
                initial={{
                  left: -100,
                }}
                whileInView={{
                  left: 0,
                }}
                key={item.id}
                id={item.id}
                className="relative w-full px-4 py-3 hover:bg-orange-600 transition-colors duration-150 cursor-pointer bg-orange-400 flex justify-between items-center rounded-2xl border border-orange-600"
              >
                <h2 className="font-semibold text-xl">{item.title}</h2>
                <img
                  src="/arrow-right-solid-black.svg"
                  className="h-6 w-auto"
                />
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="w-full h-auto mt-20">
          <img
            src="/background5-2048x448.png"
            alt="Acc"
            className="object-contain w-full h-full "
          />
        </div>
      </section>
    </>
  );
};

const CompanyEvents = () => {
  const [isMore, setIsMore] = useState(false);

  const handleClick = () => setIsMore(!isMore);

  return (
    <section className="mt-28" id="events">
      <div className="layout flex flex-col items-center px-3">
        <h2 className="text-5xl font-bold">Company Events</h2>
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-20">
          {events.map((item, index) => {
            if (index < 6) {
              return (
                <motion.li
                  initial={{
                    scale: 0,
                  }}
                  whileInView={{
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="w-full min-h-[250px] relative"
                  key={item}
                >
                  <img
                    src={item}
                    alt="Event"
                    className="w-full h-full object-cover"
                  />
                </motion.li>
              );
            }
          })}
          <AnimatePresence>
            {isMore &&
              events.slice(5, -1).map((item) => (
                <motion.li
                  initial={{
                    y: -15,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  exit={{
                    y: -15,
                    opacity: 0,
                  }}
                  className="w-full min-h-[250px] relative"
                  key={item}
                >
                  <img
                    src={item}
                    alt="Event"
                    className="w-full h-full object-cover"
                  />
                </motion.li>
              ))}
          </AnimatePresence>
        </ul>
        <button
          onClick={handleClick}
          className="bg-yellow-400 px-8 py-4 rounded-full mt-16 font-medium hover:bg-orange-500 transition-colors duration-200 hover:text-white"
        >
          {!isMore ? "Load more" : "Hide"}
        </button>
      </div>
      <div className="w-full h-auto relative mt-20">
        <img
          src="/background5-2048x448.png"
          alt="Acc"
          className="object-contain w-full h-full"
        />
      </div>
    </section>
  );
};

const IndustryItem = (props) => {
  return (
    <motion.li
      initial={{
        rotate: -45,
      }}
      whileInView={{
        rotate: 0,
      }}
      className="bg-white w-full  h-fit p-5 flex flex-col items-center rounded-2xl"
    >
      <div className="w-24 aspect-square relative">
        <img
          src={props.image}
          alt="Icon"
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="mt-10">{props.title}</h3>
    </motion.li>
  );
};

const StrengthItem = (props) => {
  return (
    <motion.li
      className={clsx(
        "w-full lg:w-1/3 p-3 text-center flex flex-col items-center"
      )}
    >
      <div className="w-40 aspect-square relative">
        <img
          src={props.image}
          alt="Icon"
          className="wf-full h-full object-contain"
        />
      </div>
      <div className="mt-16 min-h-fit h-[200px]">
        <h3 className="text-orange-500 font-bold text-lg">{props.title}</h3>
        <p className="text-sm mt-3">{props.description}</p>
      </div>
    </motion.li>
  );
};

const ServiceItem = (props) => {
  return (
    <motion.li
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      className={clsx(
        "w-full p-3 text-center flex flex-col items-center cursor-pointer rounded-lg",
        "group hover:border border-orange-500",
        "transition-all duration-200"
      )}
    >
      <div className="w-40 aspect-square relative">
        <img
          src={props.image}
          alt="Icon 1"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="mt-10 lg:mt-20 min-h-fit h-[200px]">
        <h3 className="font-bold">{props.title}</h3>
        <hr className="border border-black mt-5" />
        <p className="text-sm mt-5">{props.description}</p>
      </div>
      <button className="bg-yellow-300 px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange-400 hover:text-white transition-colors duration-200">
        Request for Proposal
      </button>
    </motion.li>
  );
};
