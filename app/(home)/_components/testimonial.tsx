import Image from "next/image";

export default function Testimonial() {
  return (
    <div className="bg-gradient-to-b from-black via-[#120d17] to-[#1a0e2b] text-white px-8 py-12 w-full mt-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          100+ fast-growing companies love Flexiple!
        </h2>
        <p className="text-lg md:text-xl text-gray-300">
          Teamwork makes dream work. Flexiple helps companies build the best
          possible team by scouting and identifying the best fit.
        </p>
      </div>

      <div className="mt-10 flex flex-col md:flex-row items-center md:gap-8 max-w-4xl mx-auto">
        {/* Image */}
        <div className="flex-shrink-0">
          <Image
            src="/PaulCikatricis.webp"
            alt="Paul Cikatricis"
            width={150}
            height={150}
            className="rounded-lg"
          />
        </div>

        {/* Testimonial Content */}
        <div className="mt-6 md:mt-0 text-center md:text-left">
          <p className="text-gray-300 italic text-lg">
            “I’ve been pleased with Purab’s performance and work ethics. He is
            proactive in flagging any issues and communicates well. The time
            zone difference is huge, but he provides a sufficient overlap. He
            and I work together very well, and I appreciate his expertise.”
          </p>
          <h3 className="mt-4 font-bold text-xl">Paul Cikatricis</h3>
          <p className="text-sm text-gray-400">
            UX and Conversion Optimization Lead
          </p>
        </div>
      </div>
    </div>
  );
}
