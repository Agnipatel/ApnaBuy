import Image from "next/image";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">

      {/* Fashion Section */}
      <section className="bg-white shadow-md rounded-xl p-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Shop Fashion for less</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="flex flex-col items-center">
            <Image src="/Shop/j.jpg" alt="Jeans under $50" width={200} height={200} className="rounded-md object-cover w-full h-40 sm:h-48" />
            <p className="mt-2 text-sm text-center">Jeans under $50</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/Shop/top.jpg" alt="Tops under $25" width={200} height={200} className="rounded-md object-cover w-full h-40 sm:h-48" />
            <p className="mt-2 text-sm text-center">Tops under $25</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/Shop/dresses.jpg" alt="Dresses under $30" width={200} height={200} className="rounded-md object-cover w-full h-40 sm:h-48" />
            <p className="mt-2 text-sm text-center">Dresses under $30</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/Shop/shoes.jpg" alt="Shoes under $50" width={200} height={200} className="rounded-md object-cover w-full h-40 sm:h-48" />
            <p className="mt-2 text-sm text-center">Shoes under $50</p>
          </div>
        </div>
        <a href="#" className="block mt-4 text-blue-600 hover:underline">See all deals</a>
      </section>

      {/* Gaming Section */}
      <section className="bg-white shadow-md rounded-xl p-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Get your game on</h2>
        <Image src="/home/gaming.jpg" alt="Gaming setup" width={1000} height={400} className="rounded-lg w-full object-cover h-48 sm:h-64 md:h-80" />
        <a href="#" className="block mt-4 text-blue-600 hover:underline">Shop gaming</a>
      </section>

      {/* Home Essentials */}
      <section className="bg-white shadow-md rounded-xl p-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Shop for your home essentials</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="flex flex-col items-center">
            <Image src="/home/cleaning.jpg" alt="Cleaning Tools" width={200} height={200} className="rounded-md object-cover w-full h-40 sm:h-48" />
            <p className="mt-2 text-sm text-center">Cleaning Tools</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/home/hone.jpg" alt="Home Storage" width={200} height={200} className="rounded-md object-cover w-full h-40 sm:h-48" />
            <p className="mt-2 text-sm text-center">Home Storage</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/home/home d.jpg" alt="Home Decor" width={200} height={200} className="rounded-md object-cover w-full h-40 sm:h-48" />
            <p className="mt-2 text-sm text-center">Home Decor</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/home/bedding.jpg" alt="Bedding" width={200} height={200} className="rounded-md object-cover w-full h-40 sm:h-48" />
            <p className="mt-2 text-sm text-center">Bedding</p>
          </div>
        </div>
        <a href="#" className="block mt-4 text-blue-600 hover:underline">Discover more in Home</a>
      </section>

      {/* Kitchen Appliances */}
      <section className="bg-white shadow-md rounded-xl p-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Top categories in Kitchen appliances</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="flex flex-col items-center">
            <Image src="/k/cooker.jpg" alt="Cooker" width={200} height={200} className="rounded-md object-cover w-full h-40 sm:h-48" />
            <p className="mt-2 text-sm text-center">Cooker</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/k/coffee.jpg" alt="Coffee" width={200} height={200} className="rounded-md object-cover w-full h-40 sm:h-48" />
            <p className="mt-2 text-sm text-center">Coffee</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/k/pots.jpg" alt="Pots and Pans" width={200} height={200} className="rounded-md object-cover w-full h-40 sm:h-48" />
            <p className="mt-2 text-sm text-center">Pots and Pans</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/k/kettles.jpg" alt="Kettles" width={200} height={200} className="rounded-md object-cover w-full h-40 sm:h-48" />
            <p className="mt-2 text-sm text-center">Kettles</p>
          </div>
        </div>
        <a href="#" className="block mt-4 text-blue-600 hover:underline">Explore all products in Kitchen</a>
      </section>

    </div>
  );
}
