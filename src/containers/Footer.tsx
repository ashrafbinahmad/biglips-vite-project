import React from "react";
import { FaInstagram, FaMeta, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  const items = [
    {
      heading: "SHOP",
      items: ["Lip", "Face", "Kits", "Shop All"],
    },
    {
      heading: "ABOUT",
      items: ["Our Story", "Clinically Proven"],
    },
    {
      heading: "HELP",
      items: ["Contact Us", "FAQs"],
    },
  ];
  return (
    <footer className="relative">
      <SignupContainer />
      <div className="-mt-[5rem] bg-accent pt-[6rem] p-5 text-white">
        <div className="container mx-auto flex flex-col md:flex-row flex-wrap justify-between gap-10 px-4 md:px-10">
          <div className="flex flex-wrap gap-10">
            {items.map((i, idx) => (
              <div key={idx} className="min-w-[150px]">
                <h5 className="text-lg font-theme font-black">{i.heading}</h5>
                {i.items.map((text, index) => (
                  <p key={index} className="mt-4 text-sm md:text-base">
                    {text}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <div className="flex gap-5 text-2xl md:text-xl justify-start md:justify-end">
            <a className="p-2" href="#"><FaMeta /></a>
            <a className="p-2" href="#"><FaInstagram /></a>
            <a className="p-2" href="#"><FaTiktok /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SignupContainer() {
  return (
    <div className="z-10 relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-center border-2 border-accent rounded-4xl bg-white p-5 sm:p-10 max-w-[1500px] mx-auto">
      <div>
        <h2 className="font-black font-theme text-accent text-3xl sm:text-4xl lg:text-5xl">
          GET ON THE VIP LIST
        </h2>
        <p className="text-accent text-base sm:text-lg mt-4">
          Sign up for 15% off and be the first to know about our latest offers & news
        </p>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="w-full">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            className="w-full sm:grow px-5 text-sm border-accent border rounded-3xl text-accent outline-none p-3 placeholder:text-accent-light"
            type="text"
            placeholder="Your name"
          />
          <input
            className="w-full sm:grow px-5 text-sm border-accent border rounded-3xl text-accent outline-none p-3 placeholder:text-accent-light"
            type="email"
            placeholder="Your email"
          />
        </div>
        <button className="bg-accent rounded-3xl text-white font-theme font-bold w-full p-3 mt-5">
          SIGN UP
        </button>
        <p className="text-accent text-sm sm:text-base mt-4 text-center">
          *By signing up, you agree to our Privacy Policy.
        </p>
      </form>
    </div>
  );
}
