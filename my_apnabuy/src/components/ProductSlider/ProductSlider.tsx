"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductSlider() {
  const scrollRef = useRef(null);

  const products = [
    "/Product/b.jpg",
    "/Product/b1.jpg",
    "/Product/b6.jpg",
    "/Product/b3.jpg",
    "/Product/b4.jpg",
    "/Product/b5.jpg",
    "/Product/b6.jpg",
    "/Product/b7.jpg",
    "/Product/b8.jpg",
  ];

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollDistance = current.offsetWidth / 2;
    if (direction === "left") {
      current.scrollBy({ left: -scrollDistance, behavior: "smooth" });
    } else {
      current.scrollBy({ left: scrollDistance, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const slider = scrollRef.current;
    const interval = setInterval(() => {
      slider.scrollBy({ left: 1, behavior: "smooth" });
      if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
        slider.scrollLeft = 0;
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-4 md:px-8 py-6 bg-gray-100">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">
        Best Sellers in Sports & Outdoors
      </h2>

      <div className="relative flex items-center">
        {/* Left Button */}
        <Button
          variant="default"
          size="icon"
          onClick={() => scroll("left")}
          className="absolute left-0 z-10 bg-gray-800 hover:bg-gray-700 text-white w-10 h-10 rounded-full flex items-center justify-center"
        >
          <ChevronLeft size={20} />
        </Button>

        {/* Slider */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth gap-4 py-2 scrollbar-hide"
        >
          {products.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 sm:w-44 md:w-48 lg:w-52 xl:w-56 border rounded-lg bg-white p-2 shadow hover:scale-105 transform transition"
            >
              <Image
                src={src}
                alt={`Product ${index + 1}`}
                width={220}
                height={220}
                className="rounded-md object-cover w-full h-48 sm:h-52 md:h-56 lg:h-60 xl:h-64"
              />
            </div>
          ))}
        </div>

        {/* Right Button */}
        <Button
          variant="default"
          size="icon"
          onClick={() => scroll("right")}
          className="absolute right-0 z-10 bg-gray-800 hover:bg-gray-700 text-white w-10 h-10 rounded-full flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </Button>
      </div>
    </div>
  );
}
