import React from "react";

export default function Marquee() {
  const items = [
    "CLINICALLY PROVEN TO PLUMP ",
    "100% NATURAL ",
    "VEGAN ",
    "CRUELTY-FREE",
    "CERTIFIED",
  ];
  return (
    <section className="bg-white p-5">
      <MarqueeMover>
        <div className="flex gap-[40px] text-accent font-black text-2xl items-center">
          {items.map((i, ind) => (
            <>
              {ind !== 0 && ind !== items.length - 1 && (
                <span className="w-2 h-2 rounded-full bg-accent-light"></span>
              )}
              <span>{i}</span>
            </>
          ))}
        </div>
      </MarqueeMover>
    </section>
  );
}

const MarqueeMover = ({ children }: { children: React.ReactNode }) => (
  <div className="marquee">
    <span> {children}</span>
  </div>
);
