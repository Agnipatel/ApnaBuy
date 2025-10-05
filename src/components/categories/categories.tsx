"use client";

import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    title: "Most-loved watches",
    items: [
      { name: "Women", img: "/watches/w.jpg" },
      { name: "Men", img: "/watches/w1.jpg" },
      { name: "Girls", img: "/watches/w3.jpg" },
      { name: "Boys", img: "/watches/w5.jpg" },
    ],
    link: "#",
  },
  {
    title: "Deals on top categories",
    items: [
      { name: "Books", img: "/categories/book.jpg" },
      { name: "Fashion", img: "/categories/fashine.jpg" },
      { name: "PC", img: "/categories/pc.jpg" },
      { name: "Beauty", img: "/categories/beauty.jpg" },
    ],
    link: "#",
  },
  {
    title: "Level up your beauty routine",
    items: [
      { name: "Makeup", img: "/beauty routine/makeup.jpg" },
      { name: "Brushes", img: "/beauty routine/brushes.jpg" },
      { name: "Sponges", img: "/beauty routine/sponges.jpg" },
      { name: "Mirrors", img: "/beauty routine/mirrors.jpg" },
    ],
    link: "#",
  },
  {
    title: "Level up your PC here",
    items: [
      { name: "Laptops", img: "/pc/laptop.jpg" },
      { name: "PCs", img: "/pc/pcs.jpg" },
      { name: "Hard Drives", img: "/pc/hard.jpg" },
      { name: "Monitors", img: "/pc/Monitors.jpg" },
    ],
    link: "#",
  },
];

export default function CategoriesPage() {
  return (
    <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-gray-50 min-h-screen">
      {sections.map((section, index) => (
        <div key={index} className="bg-white shadow-md rounded-2xl p-4">
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>

          <div className="grid grid-cols-2 gap-4 mb-4">
            {section.items.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 rounded-md overflow-hidden border">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <p className="mt-2 text-sm font-medium">{item.name}</p>
              </div>
            ))}
          </div>

          <Link
            href={section.link}
            className="text-blue-600 hover:underline text-sm font-medium"
          >
            Discover more
          </Link>
        </div>
      ))}
    </main>
  );
}
