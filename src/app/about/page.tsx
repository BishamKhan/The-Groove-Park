import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Grid from "@mui/material/Grid2";
import { ArrowRightIcon, PlayCircle } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#1a2e0d] text-white p-4 sm:p-8 md:p-12 lg:p-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-5xl font-primaryFont  text-center">
          Mall Of: Endless Possibilities
        </h1>
        <p className="font-secondaryFont  text-center text-sm md:text-base opacity-80 max-w-2xl mx-auto">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="relative">
          <img
            src="/assets/aboutbg.png"
            alt="The Groves Mall Entrance"
            className="w-full h-[400px] object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <PlayCircle className="w-16 h-16 text-white opacity-80" />
          </div>
          {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <h2 className="text-3xl font-bold text-white drop-shadow-lg">The Groves</h2>
          </div> */}
        </div>
        <div className="bg-[#2a3e1d] rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <p className="text-sm font-secondaryFont ">25 SR/GUEST</p>
            <h3 className="text-2xl font-primaryFont ">
              Get your General Access Ticket
            </h3>
            <p className="text-sm opacity-80 max-w-xl font-secondaryFont ">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum has been the industry's standard dummy text
              e
            </p>
          </div>
          <Button
            variant="ghost"
            className="text-white self-end sm:self-center"
          >
            <span className="sr-only">Get Ticket</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
          
    </div>
  );
};

export default About;
