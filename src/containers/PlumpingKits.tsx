export default function PlumpingKits() {
  const items = [
    {
      image: "/kit1.png",
      name: "THE FULL WORKS",
      category: "Buff, prep & plump kit",
      price: "E42.OO",
      oldPrice: "E42.OO",
    },
    {
      image: "/kit2.png",
      name: "THE FULL WORKS",
      category: "Buff, prep & plump kit",
      price: "E42.OO",
      oldPrice: "E42.OO",
    },
    {
      image: "/kit1.png",
      name: "THE FULL WORKS",
      category: "Buff, prep & plump kit",
      price: "E42.OO",
      oldPrice: "E42.OO",
    },
    {
      image: "/kit2.png",
      name: "THE FULL WORKS",
      category: "Buff, prep & plump kit",
      price: "E42.OO",
      oldPrice: "E42.OO",
    },
  ];
  return (
    <section>
      <div className="p-10 py-[5rem] max-w-[1700px] m-auto">
        <div className="flex justify-between items-center   flex-wrap gap-3">
          <h2 className=" font-black font-theme text-accent text-6xl ">
            PLUMPING KITS
          </h2>
          <button className="hover:bg-accent  cursor-pointer px-10 py-1 hover:text-white transition-all border-[1.5px] border-accent-light rounded-4xl flex font-theme font-black text-lg text-accent">
            ADD TO CART
          </button>
        </div>

        <div className="flex justify-around mt-10 gap-[30px] flex-wrap">
          {items.map((i, ind) => (
            <div className="grow w-[300px] max-w-[500px]">
              <div className="h-[500px] border-accent border rounded-4xl overflow-hidden p-5 bg-white">
                <span className="bg-accent text-white font-black font-theme px-2 py-1 rounded-2xl">
                  22% OFF
                </span>
                <img
                  className="w-full h-full object-cover"
                  src={i.image}
                  alt=""
                />
              </div>
              <h3 className="text-xl font-bold pt-3">{i.name}</h3>
              <p className="font-theme py-2 pt-4 flex gap-5">{i.category}</p>
              <p className="font-theme pb-2 flex gap-5 font-bold">
                <span className="text-accent">&#8364; {i.price}</span>
                <span className=" line-through">&#8364; {i.oldPrice}</span>
              </p>
              <div className="flex gap-1 mt-4">
                {ind === 2 && ["blue", "pink", "red"].map((color) => (
                  <span
                    key={color}
                    className="w-5 h-5 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                  ></span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
