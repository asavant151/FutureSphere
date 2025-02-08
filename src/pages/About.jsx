import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// images
import HeroImageWrapper from "../assets/about-hero-image-wrapper.png";
import MissionImageWrapper from "../assets/mission-image-wrapper.png";
import ContactBgImage from "../assets/contact-bg.png";

import CompanyLogo1 from "../assets/company-logo-1.png";
import CompanyLogo2 from "../assets/company-logo-2.png";
import CompanyLogo3 from "../assets/company-logo-3.png";
import CompanyLogo4 from "../assets/company-logo-4.png";
import CompanyLogo5 from "../assets/company-logo-5.png";

import ValueImage1 from "../assets/value-1.svg";
import ValueImage2 from "../assets/value-2.svg";
import ValueImage3 from "../assets/value-3.svg";
import ValueImage4 from "../assets/value-4.svg";
import ValueImage5 from "../assets/value-5.svg";
import ValueImage6 from "../assets/value-6.svg";

import member1 from "../assets/member1.png";
import member2 from "../assets/member2.png";
import member3 from "../assets/member3.png";
import member4 from "../assets/member4.png";
import member5 from "../assets/member5.png";
import member6 from "../assets/member6.png";
import member7 from "../assets/member7.png";

import Office1 from "../assets/office1.png";
import Office2 from "../assets/office2.png";
import Office3 from "../assets/office3.png";

import linkedinIcon from "../assets/linkedin-purple-icon.svg";
import twitterIcon from "../assets/twitter-purple-icon.svg";
import facebookIcon from "../assets/facebook-purple-icon.svg";

import mail from "../assets/mail.svg";
import { ArrowLeft, ArrowRight } from "lucide-react";

const About = () => {
  const swiperRef = useRef(null);

  const teamMembers = [
    {
      id: 1,
      image: member1,
    },
    {
      id: 2,
      image: member2,
    },
    {
      id: 3,
      image: member3,
    },
    {
      id: 4,
      image: member4,
    },
    {
      id: 5,
      image: member5,
    },
    {
      id: 6,
      image: member6,
    },
    {
      id: 7,
      image: member7,
    },
    {
      id: 8,
      image: member4,
    },
    {
      id: 9,
      image: member5,
    },
  ];

  const offices = [
    {
      id: 1,
      image: Office1,
      title: "San Francisco",
      location: "123 Main Street, Suite 200",
      contact: "(555) 123-4567",
    },
    {
      id: 2,
      image: Office2,
      title: "New Mexico",
      location: "789 Canyon Road",
      contact: "(555) 555-1234",
    },
    {
      id: 3,
      image: Office3,
      title: "London",
      location: "789 Oak Street, 4th Floor, Suite 402",
      contact: "+44 20 1234 5678",
    },
  ];

  const vacancies = [
    {
      id: 1,
      title: "Product Manager",
      time: "On site",
      description:
        "FutureSphere is in need of a talented Product Designer with more tha 3 years of past experience in tech sector.",
    },
    {
      id: 2,
      title: "Human Resources",
      time: "On site",
      description:
        "FutureSphere is in need of a talented Product Designer with more tha 3 years of past experience in tech sector.",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      time: "Remote",
      description:
        "FutureSphere is in need of a talented Product Designer with more tha 3 years of past experience in tech sector.",
    },
  ];

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.on("slideChange", () => {
        const slides = document.querySelectorAll(".swiper-slide");
        slides.forEach((slide, index) => {
          if (index === swiperRef.current.swiper.activeIndex) {
            slide.classList.add("center-slide");
          } else {
            slide.classList.remove("center-slide");
          }
        });
      });
    }
  }, []);
  return (
    <>
      <div className="container mx-auto px-4 lg:mt-[70px] md:mt-[32px] mt-[16px]">
        {/* About Hero */}
        <section>
          <h4 className="md:text-5xl text-2xl text-[#1B152B] md:font-normal font-medium lg:max-w-[935px] md:max-w-[600px] max-w-full md:mb-4 mb-2 text-center mx-auto">
            To revolutionize industries through innovative technology solutions,
            driving positive change and empowering individuals and businesses
          </h4>
          <p className="text-[#7A7D9C] text-center lg:max-w-[930px] md:max-w-[600px] max-w-full mx-auto">
            At FutureSphere our mission is to empower individuals and businesses
            through innovative technology solutions that enrich lives, foster
            growth, and drive positive change. We are dedicated to pushing the
            boundaries of what's possible, creating transformative experiences
            that make a lasting impact in a rapidly evolving digital landscape.
          </p>
          <div className="flex items-center justify-center lg:mt-8 md:mt-4 mt-2">
            <button className="text-white bg-[#1B152B] hover:bg-[#9f7ee7] rounded-[20px] py-2 px-8 text-base cursor-pointer">
              Signup
            </button>
            <button className="text-white bg-[#7f56d9] hover:bg-[#9581AE] rounded-[20px] py-2 px-8 text-base ml-4 cursor-pointer">
              Contact Us
            </button>
          </div>
          <div className="flex justify-center md:mt-12 mt-4">
            <img src={HeroImageWrapper} alt="hero" />
          </div>
        </section>
        {/* Our Story */}
        <section className="lg:mt-[104px] md:mt-[80px] mt-[40px]">
          <div className="bg-white border border-solid border-[#EFF0F6] md:py-12 py-5 px-8 rounded-2xl shadow-md md:mt-12 mt-6">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 items-center">
              <div>
                <span className="text-[#7F56D9] bg-[linear-gradient(90deg,#E9D8FF_-195.88%,rgba(255,255,255,0)_364.12%,#29252E_364.12%)] border border-solid border-[#EEE2FE] rounded-[22px] py-2 px-8 text-base">
                  Our Story
                </span>
                <p className="text-[#7A7D9C] my-4">
                  In 2010, our founder, Vasily, faced a daunting challenge -
                  preparing for the Law School Admission Test (LSAT) while
                  juggling an internship and evening classes in different
                  cities. The lack of time and a conducive study environment
                  made it incredibly difficult for him to achieve his dream of
                  becoming a lawyer.
                </p>
                <p className="text-[#7A7D9C]">
                  During a train ride, a moment of inspiration struck Vasily. He
                  wished for a convenient study tool on his phone to help him
                  prepare for the LSAT. However, such an app didn't exist at the
                  time. Determined to overcome this hurdle, Vasily took matters
                  into his own hands and developed one of the earliest and most
                  comprehensive LSAT apps on the market. The app quickly gained
                  popularity, becoming the #1 paid LSAT app for over a year.
                </p>
              </div>
              <div>
                <img
                  src={MissionImageWrapper}
                  alt="mission"
                  className="w-full object-cover rounded-4xl mt-5"
                />
              </div>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-12 items-center">
              <div className="lg:order-1 order-2">
                <img
                  src={MissionImageWrapper}
                  alt="mission"
                  className="w-full object-cover rounded-4xl mt-5"
                />
              </div>
              <div className="lg:order-2 order-1">
                <p className="text-[#7A7D9C] my-4">
                  In 2010, our founder, Vasily, faced a daunting challenge -
                  preparing for the Law School Admission Test (LSAT) while
                  juggling an internship and evening classes in different
                  cities. The lack of time and a conducive study environment
                  made it incredibly difficult for him to achieve his dream of
                  becoming a lawyer.
                </p>
                <p className="text-[#7A7D9C]">
                  During a train ride, a moment of inspiration struck Vasily. He
                  wished for a convenient study tool on his phone to help him
                  prepare for the LSAT. However, such an app didn't exist at the
                  time. Determined to overcome this hurdle, Vasily took matters
                  into his own hands and developed one of the earliest and most
                  comprehensive LSAT apps on the market. The app quickly gained
                  popularity, becoming the #1 paid LSAT app for over a year.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Our Clients */}
        <section className="lg:mt-[104px] md:mt-[80px] mt-[40px]">
          <div className="text-center">
            <span className="text-[#7F56D9] bg-[linear-gradient(90deg,#E9D8FF_-195.88%,rgba(255,255,255,0)_364.12%,#29252E_364.12%)] border border-solid border-[#EEE2FE] rounded-[22px] py-2 px-8 text-base">
              Our Clients
            </span>
            <h3 className="text-[#1B152B] font-normal lg:text-5xl md:text-4xl text-lg mt-5 md:mb-5 mb-2">
              Trusted by Industry Leaders
            </h3>
            <p className="text-[#7A7D9C] text-base">
              Join our roster of satisfied clients and experience the
              exceptional results and service that have earned us the trust of
              industry leaders worldwide
            </p>
          </div>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 md:mt-12 mt-6">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <img src={CompanyLogo1} alt="company-logo-1" />
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <img src={CompanyLogo2} alt="company-logo-2" />
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <img src={CompanyLogo3} alt="company-logo-3" />
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <img src={CompanyLogo4} alt="company-logo-4" />
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <img src={CompanyLogo5} alt="company-logo-5" />
            </div>
          </div>
        </section>
        {/* Our Values */}
        <section className="lg:mt-[104px] md:mt-[80px] mt-[40px]">
          <div className="text-center">
            <span className="text-[#7F56D9] bg-[linear-gradient(90deg,#E9D8FF_-195.88%,rgba(255,255,255,0)_364.12%,#29252E_364.12%)] border border-solid border-[#EEE2FE] rounded-[22px] py-2 px-8 text-base">
              Our Values
            </span>
            <h3 className="text-[#1B152B] font-normal lg:text-5xl md:text-4xl text-lg mt-5 md:mb-5 mb-2">
              Guided by Integrity and Purpose
            </h3>
            <p className="text-[#7A7D9C] text-base">
              Join our roster of satisfied clients and experience the
              exceptional results and service that have earned us the trust of
              industry leaders worldwide
            </p>
          </div>
          <div className="bg-white border border-solid border-[#EFF0F6] md:py-12 py-5 md:px-16 px-8 rounded-2xl shadow-md md:mt-12 mt-6">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
              <div className="flex flex-col items-center text-center lg:mb-20 mb-8">
                <img src={ValueImage1} alt="value-1" className="mb-4" />
                <h5 className="font-medium text-2xl text-[#1B152B] md:mb-6 mb-2">
                  Integrity
                </h5>
                <p className="text-[#7A7D9C] text-base lg:mb-0 mb-4">
                  Upholding honesty and ethical conduct in everything we do,
                  building trust with our stakeholders.
                </p>
              </div>
              <div className="flex flex-col items-center text-center lg:mb-20 mb-8">
                <img src={ValueImage2} alt="value-2" className="mb-4" />
                <h5 className="font-medium text-2xl text-[#1B152B] md:mb-6 mb-2">
                  Innovation
                </h5>
                <p className="text-[#7A7D9C] text-base lg:mb-0 mb-4">
                  Embracing a culture of creativity and continuous improvement
                  to drive groundbreaking solutions.
                </p>
              </div>
              <div className="flex flex-col items-center text-center lg:mb-20 mb-8">
                <img src={ValueImage3} alt="value-3" className="mb-4" />
                <h5 className="font-medium text-2xl text-[#1B152B] md:mb-6 mb-2">
                  Collaboration
                </h5>
                <p className="text-[#7A7D9C] text-base lg:mb-0 mb-4">
                  Fostering a collaborative environment that encourages
                  teamwork, diversity, and shared success.
                </p>
              </div>
              <div className="flex flex-col items-center text-center lg:mb-0 mb-8">
                <img src={ValueImage4} alt="value-4" className="mb-4" />
                <h5 className="font-medium text-2xl text-[#1B152B] md:mb-6 mb-2">
                  Customer-centric
                </h5>
                <p className="text-[#7A7D9C] text-base lg:mb-0 mb-4">
                  Putting our customers at the heart of everything we do,
                  delivering exceptional experiences and exceeding their
                  expectations.
                </p>
              </div>
              <div className="flex flex-col items-center text-center lg:mb-0 mb-8">
                <img src={ValueImage5} alt="value-5" className="mb-4" />
                <h5 className="font-medium text-2xl text-[#1B152B] md:mb-6 mb-2">
                  Sustainability
                </h5>
                <p className="text-[#7A7D9C] text-base lg:mb-0 mb-4">
                  Operating with a focus on environmental and social
                  responsibility, striving for a more sustainable future.
                </p>
              </div>
              <div className="flex flex-col items-center text-center lg:mb-0 mb-8">
                <img src={ValueImage6} alt="value-6" className="mb-4" />
                <h5 className="font-medium text-2xl text-[#1B152B] md:mb-6 mb-2">
                  Excellence
                </h5>
                <p className="text-[#7A7D9C] text-base lg:mb-0 mb-4">
                  Pursuing excellence in all aspects of our work, setting high
                  standards and striving for continuous growth and improvement.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Our Team */}
        <section className="lg:mt-[104px] md:mt-[80px] mt-[40px]">
          <div className="text-center">
            <span className="text-[#7F56D9] bg-[linear-gradient(90deg,#E9D8FF_-195.88%,rgba(255,255,255,0)_364.12%,#29252E_364.12%)] border border-solid border-[#EEE2FE] rounded-[22px] py-2 px-8 text-base">
              Our Team
            </span>
            <h3 className="text-[#1B152B] font-normal lg:text-5xl md:text-4xl text-lg mt-5 md:mb-5 mb-2">
              Meet our team
            </h3>
            <p className="text-[#7A7D9C] text-base">
              Meet our passionate and talented team, committed to delivering
              exceptional results, driving innovation, and transforming your
              vision into reality.
            </p>
          </div>
          <div className="bg-white rounded-2xl py-[30px] lg:px-[100px] px-[40px] lg:max-w-[900px] max-w-full mx-auto shadow-lg mt-12">
            <p className="text-[#7A7D9C] text-base text-center mb-7">
              During a train ride, a moment of inspiration struck Vasily. He
              wished for a convenient study tool on his phone to help him
              prepare for the LSAT. However, such an app didn't exist at the
              time. Determined to overcome this hurdle, Vasily took matters into
              his own hands and developed one of the earliest and most
              comprehensive LSAT apps on the market. The app quickly gained
              popularity, becoming the #1 paid LSAT app for over a year.
            </p>
            <h6 className="text-base font-semibold text-[#7F56D9] mb-2.5 text-center">
              John Wick
            </h6>
            <p className="text-[#7A7D9C] text-base mb-2.5 text-center">
              CEO FutureSphere
            </p>
            <div className="flex items-center justify-center gap-5">
              <img src={twitterIcon} alt="twitter" className="w-6 h-6" />
              <img src={facebookIcon} alt="facebook" className="w-6 h-6" />
              <img src={linkedinIcon} alt="linkedin" className="w-6 h-6" />
            </div>
          </div>
          <div className="relative mt-16">
            <Swiper
              ref={swiperRef}
              modules={[Navigation]}
              slidesPerView={7}
              centeredSlides={true}
              loop={true}
              className="team-swiper"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: -40,
                },
                1024: {
                  slidesPerView: 7,
                  spaceBetween: -50,
                },
              }}
            >
              {teamMembers.map((member) => (
                <SwiperSlide key={member.id}>
                  <div className="transition-all duration-300 py-8">
                    <img
                      src={member.image}
                      alt="Team Member"
                      className="w-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 space-x-2 my-16 md:flex hidden">
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
        </section>
        {/* Our Offices */}
        <section className="lg:pt-[104px] md:mt-[80px] pt-[40px]">
          <div className="text-center">
            <span className="text-[#7F56D9] bg-[linear-gradient(90deg,#E9D8FF_-195.88%,rgba(255,255,255,0)_364.12%,#29252E_364.12%)] border border-solid border-[#EEE2FE] rounded-[22px] py-2 px-8 text-base">
              Our Offices
            </span>
            <h3 className="text-[#1B152B] font-normal lg:text-5xl md:text-4xl text-lg mt-5 md:mb-5 mb-2">
              Discover Our Global Network of Offices
            </h3>
            <p className="text-[#7A7D9C] text-base">
              Experience our expansive network of offices across the world,
              connecting you to our exceptional services wherever you are.
            </p>
          </div>
          <div className="bg-white rounded-2xl py-12 md:px-16 px-8 border border-[#EFF0F6] shadow-lg md:mt-12 mt-6">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
              {offices.map((office) => (
                <div key={office.id}>
                  <img
                    src={office.image}
                    alt={office.name}
                    className="w-full object-cover rounded-[8px] mb-8"
                  />
                  <h4 className="text-[#7F56D9] font-normal text-xl mb-2.5">
                    {office.title}
                  </h4>
                  <p className="text-base text-[#7A7D9C] mb-2.5">
                    {office.location}
                  </p>
                  <span className="text-base text-[#1B152B]">
                    {office.contact}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center mt-8">
            <button className="text-white bg-[#1B152B] hover:bg-[#9f7ee7] rounded-[20px] py-2 px-8 text-base cursor-pointer">
              Signup
            </button>
            <button className="text-white bg-[#7f56d9] hover:bg-[#9581AE] rounded-[20px] py-2 px-8 text-base ml-4 cursor-pointer">
              Contact Us
            </button>
          </div>
        </section>
        {/* Careers */}
        <section className="lg:mt-[104px] md:mt-[80px] mt-[60px]">
          <div className="text-center">
            <span className="text-[#7F56D9] bg-[linear-gradient(90deg,#E9D8FF_-195.88%,rgba(255,255,255,0)_364.12%,#29252E_364.12%)] border border-solid border-[#EEE2FE] rounded-[22px] py-2 px-8 text-base">
              Careers
            </span>
            <h3 className="text-[#1B152B] font-normal lg:text-5xl md:text-4xl text-lg mt-5 md:mb-5 mb-2">
              New job opportunities
            </h3>
            <p className="text-[#7A7D9C] text-base">
              Browse through vacancies. internships and job postings at
              FutureSphere
            </p>
          </div>
          <div className="md:mt-12 mt-6">
            {vacancies.map((vacancy) => (
              <div className="bg-white rounded-lg border border-[#EFF0F6] shadow-lg p-5 mb-2.5">
                <div className="flex md:items-center items-start justify-between">
                  <div className="flex flex-col gap-4">
                    <h4 className="text-[#272422] font-medium text-xl">
                      {vacancy.title}
                    </h4>
                    <p className="text-base text-[#7A7D9C]">
                      Full Time -{" "}
                      <span className="text-[#9F5AF7]">{vacancy.time}</span>
                    </p>
                    <p className="text-base text-[#7A7D9C]">
                      {vacancy.description}
                    </p>
                  </div>
                  <div>
                    <button className="bg-transparent border border-solid border-[#7F56D9] p-3 rounded-full cursor-pointer">
                      <ArrowRight className="text-[#7556d9]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Contact Us Section */}
        <section className="lg:my-[104px] md:my-[80px] my-[40px]">
          <div
            style={{ backgroundImage: `url(${ContactBgImage})` }}
            className="bg-cover bg-center bg-no-repeat rounded-[24px] py-24"
          >
            <div className="flex items-center justify-center">
              <img src={mail} alt="mail" className="w-12 h-12" />
            </div>
            <div className="text-center">
              <h5 className="text-white lg:text-5xl md:text-4xl text-3xl mt-12">
                Do cool things with us.
              </h5>
              <p className="text-white text-xl mt-7">
                Stay in the loop with updates from our team and community. Once
                a month.
              </p>
            </div>
            <div className="md:mt-12 mt-8 px-4 max-w-[600px] mx-auto">
              <div className="relative md:flex md:items-center md:bg-white md:rounded-[12px] md:p-2">
                <div className="flex items-center bg-white rounded-[12px] md:flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-5 md:py-2 outline-none text-gray-700 bg-transparent"
                  />
                </div>
                <button className="w-full md:w-auto mt-4 md:mt-0 bg-[#7F56D9] text-white px-8 py-4 md:py-3 rounded-[10px] hover:bg-[#6941C6] transition-colors">
                  Subscribe to newsletter
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
