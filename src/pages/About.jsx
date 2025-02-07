import React from "react";
// images
import HeroImageWrapper from "../assets/about-hero-image-wrapper.png";
import MissionImageWrapper from "../assets/mission-image-wrapper.png";
import ContactBgImage from "../assets/contact-bg.png";

import CompanyLogo1 from "../assets/company-logo-1.png";
import CompanyLogo2 from "../assets/company-logo-2.png";
import CompanyLogo3 from "../assets/company-logo-3.png";
import CompanyLogo4 from "../assets/company-logo-4.png";
import CompanyLogo5 from "../assets/company-logo-5.png";

import mail from "../assets/mail.svg";

const About = () => {
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
            <button className="text-white bg-[#7f56d9] hover:bg-[#9f7ee7] rounded-[20px] py-2 px-8 text-base ml-4 cursor-pointer">
              Contact Us
            </button>
          </div>
          <div className="flex justify-center md:mt-12 mt-4">
            <img src={HeroImageWrapper} alt="hero" />
          </div>
        </section>
        {/* Our Story */}
        <section className="lg:mt-[104px] md:mt-[80px] mt-[40px]">
          <div className="bg-white border border-solid border-[#EFF0F6] md:py-12 py-5 px-8 rounded-2xl shadow-md mt-12">
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
          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 mt-12">
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
        {/* Contact Us Section */}
        <section className="lg:my-[104px] md:my-[80px] my-[40px]">
          <div style={{ backgroundImage: `url(${ContactBgImage})` }} className="bg-cover bg-center bg-no-repeat rounded-[24px] py-24">
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
