import { Button } from "@/components/ui/button";
import React from "react";

const Rightbar = () => {
  return (
    <div className="rounded-lg bg-custom-border-gradient w-full h-[80%]">
      <div className="p-8 flex flex-col gap-6 flex-1">
        <h1 className="text-2xl">
          99% of Flexiple&apos;s clients hire talent after a risk-free trial.
        </h1>

        <p>
          Flexiple&apos;s meticulous screening and matching process connects you
          with exceptional developers perfectly aligned to your specific needs.
        </p>

        <Button>Book a consultation call -&gt;</Button>
      </div>
    </div>
  );
};

export default Rightbar;
