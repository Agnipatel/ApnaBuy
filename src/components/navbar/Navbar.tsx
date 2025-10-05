"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShoppingCart, User, Store } from "lucide-react";

export default function Navbar() {
  const [search, setSearch] = useState("");

  return (
    <header className="flex items-center justify-between px-4 sm:px-6 py-3 border-b shadow-sm bg-white">
      {/* Left: Logo */}
      <div className="flex items-center gap-2 text-xl font-bold text-blue-600">
        ApnaBuy
        <span className="text-xs text-gray-500">
          Explore <span className="text-yellow-500 font-semibold">Plus ✨</span>
        </span>
      </div>

      {/* Center: Search */}
      <div className="hidden md:flex flex-1 max-w-xl mx-4">
        <Input
          placeholder="Search for Products, Brands and More"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-md bg-blue-50 w-full"
        />
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3 sm:gap-6">
        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" className="flex items-center gap-1">
            <User className="w-4 h-4" /> Login
          </Button>
          <Button variant="ghost" className="flex items-center gap-1">
            <ShoppingCart className="w-4 h-4" /> Cart
          </Button>
          <Button variant="ghost" className="flex items-center gap-1">
            <Store className="w-4 h-4" /> Become a Seller
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <div className="flex flex-col gap-4 mt-6">
              <Button variant="ghost" className="justify-start">
                <User className="w-4 h-4 mr-2" /> Login
              </Button>
              <Button variant="ghost" className="justify-start">
                <ShoppingCart className="w-4 h-4 mr-2" /> Cart
              </Button>
              <Button variant="ghost" className="justify-start">
                <Store className="w-4 h-4 mr-2" /> Become a Seller
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
