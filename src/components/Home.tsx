"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

import Card from "./card/Card";
import Card1 from "./card1/Card1";
import ProductSlider from "./ProductSlider/ProductSlider";
import CategoriesPage from "./categories/categories";
import Customers from "./Customers/Customers";

const banners = [
  { id: 1, img: "/S6.jpg" },
  { id: 2, img: "/s8.jpg" },
  { id: 3, img: "/s3.jpg" },
  { id: 4, img: "/S9.jpg" },
];

export default function BannerSlider() {
  return (
    <div className="w-full space-y-8">
      {/* Top Card */}
      <Card />

      {/* Banner Slider */}
      <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="w-full h-[180px] sm:h-[250px] md:h-[350px] lg:h-[450px]"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div className="w-full h-full relative">
                <Image
                  src={banner.img}
                  alt="Banner"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Other Sections */}
      <Card1 />
      <ProductSlider />
      <CategoriesPage />
      <Customers />
    </div>
  );
}
