import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/careers", label: "Careers" },
    { href: "/blog", label: "Blogs" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <footer className="relative bg-[url(/assets/footer-bg.png)] bg-right-bottom bg-no-repeat bg-cover">
      <div className="absolute inset-0 bg-[rgba(127,86,217,30)] -z-10"></div>
      <div className="container mx-auto md:py-20 py-10 px-5">
        <div className="flex md:flex-row flex-col md:items-center items-start justify-between border-y border-white/50 md:py-8 py-4">
          <a href="/" className="flex items-center">
            <img src="/assets/logo.svg" alt="logo" className="w-10 h-10" />
            <span className="text-white lg:text-xl text-lg font-bold ml-2">
              FutureSphere
            </span>
          </a>
          <ul className="flex items-center md:mt-0 mt-4">
            {navItems.map((item, index) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`text-white text-base ${
                    index === 0 ? "md:ml-4" : "ml-4"
                  } hover:text-[#7F56D9] transition duration-300 ease-in-out`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex md:flex-row flex-col md:items-center items-start justify-between md:mt-8 mt-4">
          <p className="text-white/80 text-xs">
            © {currentYear} FutureSphere. All rights reserved.
          </p>
          <div className="flex items-center md:mt-0 mt-4">
            <img src="/assets/twitter.svg" alt="" className="mr-5" />
            <img src="/assets/facebook.svg" alt="" className="mr-5" />
            <img src="/assets/linkedin.svg" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
