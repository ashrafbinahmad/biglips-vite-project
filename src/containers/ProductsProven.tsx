export default function ProductsProven() {
  return (
    <section className=" p-7">
      <div className="relative text-center">
        <img className="min-w-[800px] object-cover" src="/pastes.png" alt="" />
        <h2 className=" font-black font-theme text-accent text-5xl">
          PRODUCTS PROVEN <br /> TO PLUMP
        </h2>
        <p className="font-theme py-5">
          Clean, conscious and clinically proven, our plumpers deliver real
          results so you can plump <br /> up your beauty, naturally.
        </p>
        <button className="m-auto hover:bg-accent cursor-pointer shrink-0 px-6 hover:text-white transition-all border-[1.5px] border-accent-light rounded-4xl flex font-theme font-black text-lg text-accent">
          SEE THE RESULTS
        </button>
      </div>
      <div className="container m-auto flex pt-[4rem] gap-7 w-full  flex-wrap">
        <div className="w-[300px] grow max-md:w-full min-w-[200px] relative h-[550px] overflow-hidden rounded-[30px] p-7  hover:shadow-2xl transition-all">
          <span className="p-1 font-theme bg-accent text-white font-black px-2 rounded-lg text-sm">
            TRENDING ON TIKTOK
          </span>
          <h3 className="text-white text-5xl font-theme font-black mt-5">
            YOUR LIPS <br />
            BUT JUICIER
          </h3>
          <img
            src="/juicier.png"
            alt=""
            className="absolute w-full h-full  top-0 left-0 object-center object-cover -z-10"
          />
        </div>
        <div className="w-[300px] grow max-md:w-full min-w-[200px] relative h-[550px] overflow-hidden rounded-[30px] p-7 bg-white hover:shadow-2xl transition-all">
          <img className="h-[70%]" src="/plumpjuice.png" alt="" />
          <div className="absolute bottom-10 left-10">
            <h3 className="text-2xl font-black ">PLUMP JUICE</h3>
            <p className="font-theme py-2 flex gap-5">
              Coconut <li>Clear</li>{" "}
            </p>
            <p className="font-theme pb-2 flex gap-5 font-bold">
              &#8364; 18.00{" "}
            </p>
            <button className="hover:bg-accent cursor-pointer shrink-0 px-10 hover:text-white transition-all border-[1.5px] border-accent-light rounded-4xl flex font-theme font-black text-lg text-accent">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
