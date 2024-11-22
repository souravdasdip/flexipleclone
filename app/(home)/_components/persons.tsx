import prisma from "@/lib/db";
import { ITEMS_PER_PAGE } from "@/lib/settings";
import React from "react";
import Pagination from "./pagination";

export default async function Persons({ page }: { page: string | undefined }) {
  const p = page ? parseInt(page) : 1;

  const [persons, countPersons] = await prisma.$transaction([
    prisma.persons.findMany({
      include: {
        noticePeriods: true,
        skills: true,
      },
      take: ITEMS_PER_PAGE,
      skip: ITEMS_PER_PAGE * (p - 1),
    }),
    prisma.persons.count(),
  ]);

  if (!countPersons || !persons || persons.length === 0) {
    return <div>Loading!</div>;
  }

  return (
    <section className="text-white">
      <div className="font-bold">Hire</div>
      <div className="text-md">{countPersons} engineers are available...</div>
      {persons.map((person) => {
        return (
          <div key={person.id}>
            <div className="border-spacing-2 rounded-sm mt-2 w-full p-8 border-2 border-[#838383] bg-[#0C0B0F]">
              <div className="text-4xl mb-4">{person.name}</div>
              <div className="flex items-center flex-wrap justify-between">
                <div className="text-[#e6e6e6]">
                  Experience: {person.experienceYear} year
                </div>
                <div className="text-[#e6e6e6]">
                  Notice Periods:{" "}
                  {person.noticePeriods.map((np) => (
                    <span key={np.id}>{np.title}</span>
                  ))}
                </div>
                <div className="text-[#e6e6e6]">
                  Current CTC: {person.CurrentCTC}
                </div>
              </div>
              <div className="h-[2px] bg-white my-2 text-[#e6e6e6]"></div>
              <div className="text-[#e6e6e6]">Worked at: {person.workedAt}</div>
              <div>
                <span className="text-secondary text-[#e6e6e6]">
                  {person.description}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 items-center text-[#e6e6e6]">
                {person.skills.map((skill) => (
                  <span
                    className="font-semibold rounded-full bg-white text-black p-4"
                    key={skill.id}
                  >
                    {skill.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}

      {/* PAGINATION */}
      <Pagination page={p} count={countPersons} />
    </section>
  );
}
