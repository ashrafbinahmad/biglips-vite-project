import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const menuItems = [
    {
      name: "SHOP",
    },
    {
      name: "ABOUT",
    },
    {
      name: "LEARN",
    },
  ];
  return (
    <header className="h-screen max-md:max-h-[500px] w-full md:px-10 md:py-5">
      <div className="w-full h-full md:border-[1.5px] md:border-accent md:rounded-4xl relative p-7 bg-white z-10 overflow-hidden">
        <div className="rounded-4xl bg-accent text-white text-center font-bold p-1 font-theme max-md:text-sm">
          FREE UK SHIPPING ON ORDERS OVER &#8364; 400
        </div>
        <div className="md:hidden flex items-center justify-between w-full">
          <img className="w-[150px] self-center mt-3" src="/logo.png" alt="" />
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className="ml-auto flex justify-between mt-5 relative z-10 md:hidden border-[1.5px] border-accent rounded-4xl w-fit p-3 text-accent cursor-pointer"
          >
            <FaBars />
          </button>
        </div>
        <div
          className={` flex justify-between mt-5 relative z-10 max-md:flex-col max-md:opacity-0 transition-all  ${
            showMenu ? "max-md:opacity-100" : ""
          }`}
        >
          <ul className="FIRST border-[1.5px] max-md:bg-accent border-accent rounded-4xl flex font-theme font-black text-lg overflow-hidden items-center max-md:flex-col">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="py-1 px-[25px] hover:bg-accent-light cursor-pointer shrink-0 hover:text-white transition-all items-center max-md:w-full"
              >
                {item.name}
              </li>
            ))}
          </ul>
          <div className="MIDDLE self-center _absolute place-self-center max-md:hidden">
            <img className="w-[200px]" src="/logo.png" alt="" />
          </div>
          <div className="FIRST flex gap-5 max-md:mt-5">
            <div className="items-center py-1 px-[25px] hover:bg-accent-light cursor-pointer shrink-0 hover:text-white transition-all border-[1.5px] border-accent rounded-4xl flex font-theme font-black text-lg overflow-hidden max-md:bg-accent">
              SEARCH
            </div>
            <div className="items-center pl-[25px] hover:bg-accent-light cursor-pointer shrink-0 hover:text-white transition-all border-[1.5px] border-accent rounded-4xl flex font-theme font-black text-lg overflow-hidden max-md:bg-accent">
              CART
              <div className="ml-3 scale-105 py-1 px-2 hover:bg-accent-light cursor-pointer shrink-0 hover:text-white transition-all border-[1.5px] border-accent rounded-4xl flex font-theme font-black text-lg overflow-hidden">
                10
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-10">
          <h1 className="font-theme text-accent font-black text-6xl max-md:text-3xl">
            BIG LIPS, <br /> BIGGER ENERGY
          </h1>
          <p className=" font-theme mt-2 text-xl">
            Our famous lip liner lines, fills and plumps so you can cheat <br />{" "}
            your way to an instant lip lift.
          </p>
          <button className="hover:bg-accent cursor-pointer shrink-0 px-6 py-1 mt-5 hover:text-white transition-all border-[1.5px] border-accent rounded-4xl flex font-theme font-black text-lg text-accent">
            SHOP PLUMP & FILL
          </button>
        </div>
        <img
          className="h-full object-cover right-10 absolute top-0 max-md:opacity-30 -z-10"
          src="/hero.webp"
          alt=""
        />
      </div>
    </header>
  );
}
