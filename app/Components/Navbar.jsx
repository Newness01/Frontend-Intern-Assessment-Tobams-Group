"use client";

import { useState } from "react";
import { ChevronDown, Menu, User, X } from "lucide-react";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between mb-3">
        
        {/* Logo */}
        <div className="flex items-center shrink-0">
          <img src="/Tobams.png" alt="Tobams logo" className="h-15 w-auto object-contain" />
        </div>

<div className="hidden lg:flex gap-3 shrink-0 ">
          <button className="flex items-center justify-center gap-1 bg-(--Hue-Primary,rgba(87,18,68,1)) text-white px-4 py-2 rounded-lg hover:bg-[#6a1550] transition">
            <User className="w-4 h-4" /> Account <ChevronDown className="w-4 h-4" />
          </button>
          <button className="bg-(--Hue-Secondary,rgba(239,67,83,1)) text-white px-4 py-2 rounded-lg hover:bg-[#f05a64] transition font-medium">
            Take Assessment
          </button>
        </div>


        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white px-4 pb-4 space-y-3 border-t">
          <ul>
          <li className="cursor-pointer hover:text-[#8a0f5d] transition py-2">About</li>
          <li className="cursor-pointer hover:text-[#8a0f5d] transition py-2">What We Do</li>
          <li className="cursor-pointer hover:text-[#8a0f5d] transition py-2">Jobs</li>
          <li className="cursor-pointer hover:text-[#8a0f5d] transition py-2">Projects</li>
          <li className="cursor-pointer hover:text-[#8a0f5d] transition py-2">TG Academy</li>
          <li className="cursor-pointer hover:text-[#8a0f5d] transition py-2">Strategic Partnership</li>
          <li className="cursor-pointer hover:text-[#8a0f5d] transition py-2">Pricing</li>
          <li className="cursor-pointer hover:text-[#8a0f5d] transition py-2">Book a Consultation</li>
</ul>
          <button className="w-full bg-(--Hue-Primary,rgba(87,18,68,1)) text-white py-2 rounded-lg hover:bg-[#6a1550] transition flex items-center justify-center gap-1">
            <User className="w-4 h-4" /> Account
          </button>
          <button className="w-full bg-(--Hue-Secondary,rgba(239,67,83,1)) text-white py-2 rounded-lg hover:bg-[#f05a64] transition font-medium">
            Take Assessment
          </button>
        </div>
      )}

<div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      <ul className="hidden lg:flex gap-8 text-[18px] text-(--Hue-Main-Text,rgba(21,21,21,1)) font-medium items-center mx-auto">
          <li className="flex items-center gap-1 cursor-pointer hover:text-[#8a0f5d] transition">
            About
            <ChevronDown className="w-4 h-4" />
          </li>
          <li className="flex items-center gap-1 cursor-pointer hover:text-[#8a0f5d] transition">What We Do <ChevronDown className="w-4 h-4" /></li>
          <li className="flex items-center gap-1 cursor-pointer hover:text-[#8a0f5d] transition">Jobs <ChevronDown className="w-4 h-4" /></li>
          <li className="cursor-pointer hover:text-[#8a0f5d] transition">Projects</li>
          <li className="cursor-pointer hover:text-[#8a0f5d] transition">TG Academy</li>
          <li className="cursor-pointer hover:text-[#8a0f5d] transition">Strategic Partnership</li>
          <li className="cursor-pointer hover:text-[#8a0f5d] transition">Pricing</li>
          <li className="cursor-pointer hover:text-[#8a0f5d] transition">Book a Consultation</li>
        </ul>
        </div>
        
    </nav>
    
  );
}