export default function MadeForEveryone() {
  return (
    <section className="h-screen min-h-[800px] max-md:h-auto p-7">
      <div className="rounded-[30px] overflow-hidden flex h-full bg-white max-md:flex-col">
        <img className="LEFT w-1/2 max-md:w-full" src="/faces.png" alt=""></img>
        <div className="CENTER grow-0 bg-accent text-white font-black -ml-4 max-md:hidden">
          <img className="w-[55px] -mt-[90%]" src="/bannerstrip.png" alt="" />
          <img className="w-[55px]" src="/bannerstrip.png" alt="" />
          <img className="w-[55px]" src="/bannerstrip.png" alt="" />
        </div>
        <div className="RIGHT w-1/2 max-md:w-auto flex justify-end p-10 flex-col gap-[20px]">
          <h2 className=" font-black font-theme text-accent text-6xl max-md:text-4xl">
            MADE TO PLUMP, <br />
            MADE FOR
            <br />
            EVERYONE
            <br />
          </h2>
          <p className="font-theme">
            We're here to empower you to celebrate your natural beauty and have
            fun while doing it. That's why we've created derm-approved, clean
            and conscious plumpers that you can actually feel good about
            obsessing over.
          </p>
          <button className="w-fit hover:bg-accent  cursor-pointer px-10 py-1 hover:text-white transition-all border-[1.5px] border-accent-light rounded-4xl flex font-theme font-black text-lg text-accent">
            DISCOVER MORE
          </button>
        </div>
      </div>
    </section>
  );
}
