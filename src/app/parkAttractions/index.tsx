import Carousel from "@/components/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Grid from "@mui/material/Grid2";
import { ArrowRightIcon, ChevronRight } from "lucide-react";
import React from "react";

const array = [
  { name: "Vida Verce", img: "/assets/card1.png", rate: "100 SR PER GUEST" },
  { name: "Zama Zulu", img: "/assets/card1.png", rate: "100 SR PER GUEST" },
  { name: "Khawaja Yanni", img: "/assets/card1.png", rate: "100 SR PER GUEST" },
  { name: "Yamagata", img: "/assets/card1.png", rate: "100 SR PER GUEST" },
];

const ParkAttractions = () => {
  return (
    <div className="p-4 mt-4">
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <div>
            <p className="text-[32px] text-[#fff] ">
              Book general access ticket and enjoy the attractions for free
            </p>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Button
            style={{
              border: "none",
              borderRadius: "16px",
              width: "299px",
              height: "55px",
              textAlign: "center",
              background:
                "linear-gradient(180deg, rgba(173,135,73,1) 0%, rgba(220,187,117,1) 70%)",
            }}
            className="py-2 px-6 rounded-full inline-flex items-center space-x-2 hover:bg-opacity-90 transition-colors w-fit"
          >
            <span>Book reservation now</span>
            <ChevronRight className="w-5 h-5" />
          </Button>
        </Grid>
      </Grid>

      {/* carousel */}
      <Carousel />
    </div>
  );
};

export default ParkAttractions;
