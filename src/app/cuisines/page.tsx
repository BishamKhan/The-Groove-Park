import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Grid from "@mui/material/Grid2";
import { ArrowRightIcon } from "lucide-react";
import React from "react";

const array = [
  { name: "Vida Verce", img: "/assets/card1.png", rate: "100 SR PER GUEST" },
  { name: "Zama Zulu", img: "/assets/card1.png", rate: "100 SR PER GUEST" },
  { name: "Khawaja Yanni", img: "/assets/card1.png", rate: "100 SR PER GUEST" },
  { name: "Yamagata", img: "/assets/card1.png", rate: "100 SR PER GUEST" },
];

const Cuisine = () => {
  return (
    <div className="min-h-screen text-white p-4 sm:p-8 md:p-12 lg:p-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <p className="text-4xl md:text-5xl font-primaryFont text-center text-[#fff] ">
          Experience The Finest Cuisine
        </p>
        <p className="text-center text-sm md:text-base font-secondaryFont  text-[#fff] ">
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="max-w-4xl mx-auto space-y-8">
        <Grid container spacing={2} sx={{ mt: 5 }}>
          {array.map((item) => (
            <Grid size={{ xs: 12, md: 6 }}>
              <Card className="rounded-[22px] pt-2 pb-5 px-3 border-none text-[#fff] bg-[#fff]/[0.20] ">
                <CardContent>
                  <div>
                    <img src={item.img} />
                  </div>
                  <div className="flex justify-between items-center p-2">
                    <div>
                      <p className="text-[26px] font-primaryFont ">{item.name}</p>
                      <Badge
                        style={{
                          border: "none",
                          borderRadius: "16px",
                          background:
                            "linear-gradient(180deg, rgba(173,135,73,1) 0%, rgba(220,187,117,1) 070%)",
                        }}
                        className="font-secondaryFont font-light p-1 pl-3 pr-3"
                      >
                        {item.rate}
                      </Badge>
                    </div>
                    <div>
                      <ArrowRightIcon />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Cuisine;
