"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Gildan Adult Fleece Hoodie Sweatshirt, Style G18500, Multipack",
    img: "/Customers/C1.jpg",
    rating: 4.5,
    reviews: 116933,
    price: "$16.49",
    shipping: "$19.80 shipping",
    sustainability: "1 sustainability feature",
  },
  {
    id: 2,
    name: "Fruit of the Loom Eversoft Fleece Pullover Hooded Sweatshirt",
    img: "/Customers/C2.jpg",
    rating: 4.4,
    reviews: 28778,
    price: "$9.96",
    shipping: "$14.75 shipping",
    sustainability: "1 sustainability feature",
  },
  {
    id: 3,
    name: "Hanes Men's Ultimate Cotton Heavyweight Pullover Hoodie Sweatshirt",
    img: "/Customers/C3.jpg",
    rating: 4.3,
    reviews: 984,
    price: "$11.86",
    shipping: "$16.78 shipping",
    sustainability: "1 sustainability certification",
  },
  {
    id: 4,
    name: "Hanes 10 oz Ultimate Cotton Pullover Fleece Hood",
    img: "/Customers/C4.jpg",
    rating: 4.2,
    reviews: 46873,
    price: "$22.00",
    shipping: "$15.62 shipping",
    sustainability: "1 sustainability certification",
  },
  {
    id: 5,
    name: "Jerzees Men’s NuBlend Fleece Hoodies & Sweatshirts",
    img: "/Customers/C5.jpg",
    rating: 4.3,
    reviews: 40520,
    price: "$14.99",
    shipping: "$16.06 shipping",
    sustainability: "1 sustainability feature",
  },
  {
    id: 6,
    name: "Amazon Essentials Men's Athletic-Fit Stretch Jeans",
    img: "/Customers/C6.jpg",
    rating: 4.1,
    reviews: 32692,
    price: "$13.95",
    shipping: "$14.71 shipping",
    sustainability: "1 sustainability feature",
    badge: "#1 Best Seller",
  },
];

export default function Recommendations() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollDistance = container.offsetWidth / 2; // Use container, not slider
    if (direction === "left") {
      container.scrollBy({ left: -scrollDistance, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollDistance, behavior: "smooth" });
    }
  };

  return (
    <main className="p-6 bg-white">
      <h2 className="text-xl font-semibold mb-4">
        Customers who viewed items in your browsing history also viewed
      </h2>

      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100"
        >
          <ChevronLeft />
        </button>

        {/* Slider */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 scroll-smooth pb-4 px-10"
        >
          {products.map((p) => (
            <div
              key={p.id}
              className="min-w-[200px] max-w-[220px] border rounded-lg p-3 bg-white flex-shrink-0 hover:shadow-md"
            >
              <div className="relative w-full h-56">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-contain rounded"
                />
              </div>

              <h3 className="text-blue-700 text-sm font-medium mt-2 hover:underline cursor-pointer line-clamp-2">
                {p.name}
              </h3>

              {/* Ratings */}
              <div className="flex items-center mt-1 text-orange-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < Math.round(p.rating) ? "orange" : "none"}
                    strokeWidth={1}
                  />
                ))}
                <span className="text-xs text-gray-600 ml-1">
                  {p.reviews.toLocaleString()}
                </span>
              </div>

              {/* Price */}
              <p className="text-lg font-semibold mt-1">{p.price}</p>
              <p className="text-xs text-gray-500">{p.shipping}</p>

              {/* Badge */}
              {p.badge && (
                <span className="text-xs bg-orange-500 text-white font-semibold px-2 py-0.5 rounded mt-1 inline-block">
                  {p.badge}
                </span>
              )}

              {/* Sustainability */}
              <p className="text-xs text-green-600 mt-1">
                🌿 {p.sustainability}
              </p>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100"
        >
          <ChevronRight />
        </button>
      </div>

      <p className="text-sm text-right mt-3 text-gray-600">Page 1 of 5</p>
    </main>
  );
}
