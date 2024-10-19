"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "DINE WITH US", href: "#" },
    { name: "PLAN YOUR VISIT", href: "#" },
    { name: "EVENTS", href: "#" },
    { name: "VIEW GROVES MAP", href: "#" },
    { name: "OUR STORY", href: "#" },
    { name: "CONTACT US", href: "#" },
  ];

  return (
    <nav className="bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Image
              src="/assets/logo.png"
              alt="The Groves Logo"
              width={100}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <img
              src="/assets/tiktok.png"
              className="h-5 w-5 text-gray-400 mr-3"
            />
            <img
              src="/assets/insta.png"
              className="h-5 w-5 text-gray-400 mr-3"
            />
            <img
              src="/assets/twitter x.png"
              className="h-5 w-5 text-gray-400 mr-3"
            />
            <img
              src="/assets/snapchat.png"
              className="h-5 w-5 text-gray-400 mr-3"
            />
            <Button
              variant="outline"
                className="font-secondaryFont "
              style={{
                border: "none",
                borderRadius: "16px",
                width: "142px",
                height: "48px",
                background:
                  "linear-gradient(180deg, rgba(173,135,73,1) 0%, rgba(220,187,117,1) 070%)",
              }}
            >
              Log in
            </Button>
            <div className="relative">
              <Button variant="ghost" className="font-secondaryFont  text-gold flex items-center">
                <ChevronDown className="h-4 w-4" />
                <Image
                  src="/assets/flag.png"
                  alt="England flag"
                  width={33}
                  height={22}
                  className="mr-2"
                />
                English
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-b border-[#fff]/[0.60] hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-12">
            <div className="hidden md:flex md:justify-between w-full items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-secondaryFont  font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-gradient-to-r from-[#283606] to-[#0f1500] z-50 flex flex-col justify-between">
          <div className="p-4 flex justify-between items-center">
            <Image
              src="/assets/logo.png"
              alt="The Groves Logo"
              width={100}
              height={40}
              className="h-10 w-auto"
            />
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <X className="block h-6 w-6" />
            </button>
          </div>
          <div className="flex-grow overflow-y-auto mt-2 border-t border-[#fff]">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:bg-[#0D330D] block px-4 py-4 text-lg font-secondaryFont  font-medium border-b border-[#fff]"
              >
                {item.name}
              </Link>
            ))}
          {/* lang and button */}
               <div className="relative mt-3">
            <Button variant="ghost" className=" font-secondaryFont text-gold flex items-center">
              <ChevronDown className="h-4 w-4" />
              <Image
                src="/assets/flag.png"
                alt="England flag"
                width={33}
                height={22}
                className="mr-2 "
              />
              English
            </Button>
          </div>
          <div className="ml-3" >
          <Button
            variant="outline"
            className="font-secondaryFont "
            style={{
              border: "none",
              borderRadius: "16px",
              marginTop:10,
              width: "142px",
              height: "48px",
              background:
                "linear-gradient(180deg, rgba(173,135,73,1) 0%, rgba(220,187,117,1) 070%)",
            }}
          >
            Log in
          </Button>
          </div>
          </div>
          <div className="flex items-center justify-start space-x-6 ml-4 mb-6">
            <img src="/assets/tiktok.png" className="h-6 w-6" />
            <img src="/assets/insta.png" className="h-6 w-6" />
            <img src="/assets/twitter x.png" className="h-6 w-6" />
            <img src="/assets/snapchat.png" className="h-6 w-6" />
          </div>
        </div>
      )}
    </nav>
  );
}
