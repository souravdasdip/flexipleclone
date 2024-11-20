import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

const Rightbar = () => {
  return (
    <div className="rounded-lg bg-custom-border-gradient w-full h-[350px] z-[99999] sticky top-2 grid place-items-center">
      <div className="p-8 flex flex-col gap-6 flex-1 w-[99%] h-[99%] bg-[#0C0B0F] rounded-lg">
        <h1 className="text-2xl">
          99% of Flexiple&apos;s clients hire talent after a risk-free trial.
        </h1>

        <p>
          Flexiple&apos;s meticulous screening and matching process connects you
          with exceptional developers perfectly aligned to your specific needs.
        </p>

        <Button variant={"secondary"}>
          Book a consultation call <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default Rightbar;
