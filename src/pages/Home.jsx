import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Home = () => {
  // State for the counting numbers
  const [newUsersCount, setNewUsersCount] = useState(0);
  const [activeUsersCount, setActiveUsersCount] = useState(0);
  const [satisfiedCustomersCount, setSatisfiedCustomersCount] = useState(0);
  const swiperRef = useRef(null);

  // Function to animate the counting
  const animateCount = (targetValue, setValue, duration) => {
    let start = 0;
    const increment = targetValue / (duration / 16); // 16ms per frame for 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setValue(targetValue);
        clearInterval(timer);
      } else {
        setValue(Math.ceil(start));
      }
    }, 16);
  };

  const services = [
    {
      title: "Streamlined Business Operations",
      description:
        "Our technology solutions streamline and optimize business operations, automating processes, enhancing efficiency, and improving overall productivity. From seamless inventory management to streamlined customer relationship management, our solutions empower businesses to operate at their peak potential, saving time and resources while maximizing profitability.",
    },
    {
      title: "Intuitive User Interfaces",
      description:
        "Our user-friendly interfaces provide an intuitive and engaging experience for users, making it easy for customers to navigate and interact with our products and services. By focusing on user-centered design, we ensure that our products and services are optimized for ease of use, resulting in increased user satisfaction and loyalty.",
    },
    {
      title: "Secure Data Management",
      description:
        "Our secure data management solutions protect sensitive information, ensuring the confidentiality, integrity, and availability of data stored and transmitted. By implementing robust encryption, multi-factor authentication, and regular security audits, we provide a secure environment for businesses to store and access their data.",
    },
    {
      title: "AI-Powered Automation",
      description:
        "Our AI-powered automation solutions streamline business processes, reduce manual tasks, and enhance efficiency. By leveraging advanced algorithms and intelligent systems, we automate tasks such as customer service, inventory management, and data analysis, freeing up human resources for more strategic tasks.",
    },
  ];

  // Start the counting animation when the component mounts
  useEffect(() => {
    animateCount(50, setNewUsersCount, 2000); // 50K in 2 seconds
    animateCount(150, setActiveUsersCount, 2000); // 150K in 2 seconds
    animateCount(98, setSatisfiedCustomersCount, 2000); // 98% in 2 seconds
  }, []);
  return (
    <div className="container mx-auto px-4 lg:mt-[64px] md:mt-[32px] mt-[16px]">
      <div className="text-center">
        <h1 className="lg:text-[72px] md:text-[40px] text-[24px] font-normal text-[#1B152B]">
          Revolutionizing the Future with Cutting-Edge Technology
        </h1>
        <p className="text-[#7A7D9C] text-base md:mt-4 mt-2">
          Empowering Innovation for a Digital Tomorrow
        </p>
        <div className="flex items-center justify-center lg:mt-8 md:mt-4 mt-2">
          <button className="text-white bg-[#1B152B] hover:bg-[#9f7ee7] rounded-[20px] py-2 px-8 text-base cursor-pointer">
            Signup
          </button>
          <button className="text-white bg-[#7f56d9] hover:bg-[#9f7ee7] rounded-[20px] py-2 px-8 text-base ml-4 cursor-pointer">
            Contact Us
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src="/assets/Hero-Image-Wrapper.png"
          alt="hero"
          className="md:mt-12 mt-4"
        />
      </div>
      <div className="bg-white border border-solid border-[#EFF0F6] py-4 px-12 rounded-2xl shadow-md md:mt-12 mt-4">
        <div className="flex md:flex-row flex-col items-center justify-between">
          <div className="flex flex-col items-center">
            <h3 className="text-[#7F56D9] font-semibold lg:text-5xl md:text-4xl text-lg md:mb-4 mb-2">
              {newUsersCount.toLocaleString()}K
            </h3>
            <p className="text-[#7F56D9] text-[24px] md:mb-0 mb-4">
              New users per month
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-[#7F56D9] font-semibold lg:text-5xl md:text-4xl text-lg md:mb-4 mb-2">
              {activeUsersCount.toLocaleString()}K
            </h3>
            <p className="text-[#7F56D9] text-[24px] md:mb-0 mb-4">
              Active Users
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-[#7F56D9] font-semibold lg:text-5xl md:text-4xl text-lg md:mb-4 mb-2">
              {satisfiedCustomersCount}%
            </h3>
            <p className="text-[#7F56D9] text-[24px] md:mb-0 mb-4">
              Satisfied Customers
            </p>
          </div>
        </div>
      </div>
      <div className="text-center lg:mt-[104px] md:mt-[80px] mt-[40px]">
        <span className="text-[#7F56D9] bg-[linear-gradient(90deg,#E9D8FF_-195.88%,rgba(255,255,255,0)_364.12%,#29252E_364.12%)] border border-solid border-[#EEE2FE] rounded-[22px] py-2 px-8 text-base">
          Features
        </span>
        <h3 className="text-[#1B152B] font-normal lg:text-5xl md:text-4xl text-lg mt-5 md:mb-5 mb-2">
          Discover the Tools that Drive Success
        </h3>
        <p className="text-[#7A7D9C] text-base">
          Unleash innovation and accelerate growth with our dynamic product.
        </p>
      </div>
      <div className="bg-white border border-solid border-[#EFF0F6] md:py-12 py-5 px-16 rounded-2xl shadow-md md:mt-12 mt-4">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          <div className="flex flex-col items-center text-center">
            <img src="/assets/feature-1.svg" alt="feature-1" className="mb-4" />
            <h5 className="font-medium text-2xl text-[#1B152B] md:mb-6 mb-2">
              Cutting-Edge Innovation
            </h5>
            <p className="text-[#7A7D9C] text-base lg:mb-0 mb-4">
              Experience groundbreaking technological advancements that push the
              boundaries of what's possible, revolutionizing industries and
              transforming the way we live and work.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src="/assets/feature-2.svg" alt="feature-2" className="mb-4" />
            <h5 className="font-medium text-2xl text-[#1B152B] md:mb-6 mb-2">
              Seamless Connectivity
            </h5>
            <p className="text-[#7A7D9C] text-base lg:mb-0 mb-4">
              Stay connected anytime, anywhere with our robust and reliable
              network infrastructure, ensuring uninterrupted communication and
              effortless access to the digital world.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src="/assets/feature-3.svg" alt="feature-3" className="mb-4" />
            <h5 className="font-medium text-2xl text-[#1B152B] md:mb-6 mb-2">
              Intuitive User Interface
            </h5>
            <p className="text-[#7A7D9C] text-base lg:mb-0 mb-4">
              Enjoy a seamless and intuitive user experience with our sleek and
              user-friendly interface, designed to simplify complex tasks and
              enhance productivity.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-8">
        <button className="text-white bg-[#7f56d9] hover:bg-[#9f7ee7] rounded-[20px] py-2 px-8 text-base mr-6 cursor-pointer">
          Contact Us
        </button>
        <button className="text-[#1B152B] bg-transparent text-base cursor-pointer flex items-center">
          View All <img src="/assets/right-arrow.svg" alt="right-arrow" />
        </button>
      </div>
      <div className="bg-white border border-solid border-[#EFF0F6] md:py-12 py-5 px-5 rounded-2xl shadow-md mt-12">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <span className="text-[#7F56D9] bg-[linear-gradient(90deg,#E9D8FF_-195.88%,rgba(255,255,255,0)_364.12%,#29252E_364.12%)] border border-solid border-[#EEE2FE] rounded-[22px] py-2 px-8 text-base">
              Our Mission Statement
            </span>
            <img
              src="/assets/Mission-Image-Wrapper.png"
              alt="mission"
              className="w-full object-cover rounded-4xl lg:hidden block mt-5"
            />
            <h3 className="text-[#1B152B] font-normal lg:text-5xl md:text-4xl text-lg mt-5 md:mb-5 mb-2">
              Empowering the world through transformative technology solutions
            </h3>
            <p className="text-[#7A7D9C] text-base">
              We are dedicated to empowering individuals, businesses, and
              communities by providing innovative and cutting-edge technology
              solutions that unlock new possibilities and drive positive change.
              Our mission is to make technology accessible, reliable, and
              impactful, enabling our customers to thrive in the digital era and
              shape a better future for all.
            </p>
            <div className="flex items-center mt-8">
              <button className="text-[#7F56D9] bg-transparent text-base cursor-pointer">
                Signup
              </button>
              <button className="text-white bg-[#7f56d9] hover:bg-[#9f7ee7] rounded-[20px] py-2 px-8 text-base ml-6 cursor-pointer">
                Contact Us
              </button>
            </div>
          </div>
          <div>
            <img
              src="/assets/Mission-Image-Wrapper.png"
              alt="mission"
              className="w-full object-cover rounded-4xl lg:block hidden"
            />
          </div>
        </div>
      </div>
      <div className="text-center lg:mt-[104px] md:mt-[80px] mt-[40px]">
        <span className="text-[#7F56D9] bg-[linear-gradient(90deg,#E9D8FF_-195.88%,rgba(255,255,255,0)_364.12%,#29252E_364.12%)] border border-solid border-[#EEE2FE] rounded-[22px] py-2 px-8 text-base">
          Our Clients
        </span>
        <h3 className="text-[#1B152B] font-normal lg:text-5xl md:text-4xl text-lg mt-5 md:mb-5 mb-2">
          Trusted by Industry Leaders
        </h3>
        <p className="text-[#7A7D9C] text-base">
          Join our roster of satisfied clients and experience the exceptional
          results and service that have earned us the trust of industry leaders
          worldwide
        </p>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 mt-12">
        <img src="/assets/company-logo-1.png" alt="company-logo-1" />
        <img src="/assets/company-logo-2.png" alt="company-logo-2" />
        <img src="/assets/company-logo-3.png" alt="company-logo-3" />
        <img src="/assets/company-logo-4.png" alt="company-logo-4" />
        <img src="/assets/company-logo-5.png" alt="company-logo-5" />
      </div>
      <div className="relative bg-white border border-solid border-[#EFF0F6] md:py-12 py-5 px-5 rounded-2xl shadow-md mt-12">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <span className="text-[#7F56D9] bg-[linear-gradient(90deg,#E9D8FF_-195.88%,rgba(255,255,255,0)_364.12%,#29252E_364.12%)] border border-solid border-[#EEE2FE] rounded-[22px] py-2 px-8 text-base">
              Services
            </span>
            <img
              src="/assets/Mission-Image-Wrapper.png"
              alt="mission"
              className="w-full object-cover rounded-4xl lg:hidden block mt-5"
            />
            <div className="relative">
              <Swiper
                ref={swiperRef}
                slidesPerView={1}
                spaceBetween={30}
                className="mySwiper"
                modules={[Navigation]}
              >
                {services.map((service, index) => (
                  <SwiperSlide key={index}>
                    <h3 className="text-[#A05BF8] font-normal md:text-4xl text-lg mt-5 md:mb-5 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-[#7A7D9C] text-base">
                      {service.description}
                    </p>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="absolute right-4 z-10 flex space-x-2 md:mt-6 mt-3">
                <button
                  onClick={() => swiperRef.current?.swiper.slidePrev()}
                  className="bg-transparent border border-solid border-[#7F56D9] p-3 rounded-full hover:bg-[#7F56D9] cursor-pointer transition duration-300"
                >
                  <ArrowLeft className="text-[#7556d9] group-hover:text-white" />
                </button>
                <button
                  onClick={() => swiperRef.current?.swiper.slideNext()}
                  className="bg-transparent border border-solid border-[#7F56D9] p-3 rounded-full hover:bg-[#7F56D9] cursor-pointer transition duration-300"
                >
                  <ArrowRight className="text-[#7556d9] group-hover:text-white" />
                </button>
              </div>
            </div>
          </div>
          <div>
          <img
              src="/assets/Mission-Image-Wrapper.png"
              alt="mission"
              className="w-full object-cover rounded-4xl lg:block hidden"
            />
          </div>
        </div>
      </div>
      <div className="text-center lg:mt-[104px] md:mt-[80px] mt-[40px]">
        <span className="text-[#7F56D9] bg-[linear-gradient(90deg,#E9D8FF_-195.88%,rgba(255,255,255,0)_364.12%,#29252E_364.12%)] border border-solid border-[#EEE2FE] rounded-[22px] py-2 px-8 text-base">
        Testimonials
        </span>
        <h3 className="text-[#1B152B] font-normal lg:text-5xl md:text-4xl text-lg mt-5 md:mb-5 mb-2">
        1M+ Global Customers
        </h3>
      </div>
    </div>
  );
};

export default Home;
