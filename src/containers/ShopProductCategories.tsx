export default function ShopProductCategories() {
  const items = [
    {
      name: "LIP",
      image: "/lip.webp",
    },
    {
      name: "FACE",
      image: "/face.webp",
    },
    {
      name: "KITS",
      image: "/kits.webp",
    },
  ];
  return (
    <section>
      <div className="container px-5 py-10 flex gap-[40px] m-auto max-md:flex-col">
        {items.map((item) => (
          <div key={item.name} className="relative overflow-hidden h-[650px] w-[200px] max-md:w-full grow rounded-4xl p-5 px-7 bg-black -z-10">
            <div className="text-white  font-bold">
                <p className="text-2xl font-[500] opacity-80">SHOP</p>
                <p className="text-5xl font-black">{item.name}</p>
            </div>
            <img
              src={item.image}
              alt={item.name}
              className="top-0 left-0 -z-10 absolute w-full h-full object-cover opacity-90"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
