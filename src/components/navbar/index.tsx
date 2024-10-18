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
            //   className="text-gold border-gold hover:bg-gold hover:text-black rounded-[16px]"
              style={{
                border:'none',
                borderRadius:'16px',
                width: '142px',
                height: '48px',
                background: "linear-gradient(180deg, rgba(173,135,73,1) 0%, rgba(220,187,117,1) 070%)",
              }}
            >
              Log in
            </Button>
            <div className="relative">
              <Button variant="ghost" className="text-gold flex items-center">
                <Image
                  src="/assets/flag.png"
                  alt="England flag"
                  width= {33}
                  height={22}
                  className="mr-2"
                />
                English
                <ChevronDown className="ml-2 h-4 w-4" />
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
      <div className="border-t border-b border-[#fff]/[0.60] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="hidden md:flex w-full items-center space-x-4">
              {navItems.map((item) => (
                // <div className="grid grid-cols-6 text-center " >
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-green-900">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 flex items-center justify-center space-x-4">
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
            </div>
            <div className="mt-4">
              <Button
                variant="outline"
                className="text-gold border-gold hover:bg-gold hover:text-black w-full"
              >
                Log in
              </Button>
            </div>
            <div className="mt-4">
              <Button
                variant="ghost"
                className="text-gold flex items-center justify-center w-full"
              >
                <Image
                  src="/placeholder.svg"
                  alt="England flag"
                  width={20}
                  height={15}
                  className="mr-2"
                />
                English
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
