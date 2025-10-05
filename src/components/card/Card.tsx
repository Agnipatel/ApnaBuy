"use client";

import Image from "next/image";

const categories = [
  { name: "Minutes", img: "/card/b.jpg" },
  { name: "Mobiles & Tablets", img: "/card/Moblie&T.jpg" },
  { name: "TVs & Appliances", img: "/card/tv.jpg" },
  { name: "Electronics", img: "/card/E.jpg" },
  { name: "Fashion", img: "/card/f.jpg" },
  { name: "Home & Kitchen", img: "/card/home.jpg" },
  { name: "Beauty & Toys", img: "/card/b.jpg" },
  { name: "Furniture", img: "/card/fu.jpg" },
  { name: "Flight Bookings", img: "/card/flight.jpg" },
  { name: "Grocery", img: "/card/grocery.jpg" },
];

export default function CategoryMenu() {
  return (
    <div className="w-full bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-3">
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-10 gap-3 sm:gap-4 text-center">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="flex flex-col items-center gap-1 sm:gap-2 cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                <Image
                  src={cat.img}
                  alt={cat.name}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <p className="text-xs sm:text-sm font-medium">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
