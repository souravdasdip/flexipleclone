import React from "react";
import Pagination from "./pagination";
import { Prisma } from "@prisma/client";

type Person = Prisma.PersonsGetPayload<{
  include: { noticePeriods: true; skills: true };
}>;

export default async function Persons({ page }: { page: string | undefined }) {
  const p = page ? parseInt(page) : 1;

  const response = await fetch(`http://localhost:3000/api/persons?page=${p}`);
  const { persons, countPersons }: { persons: Person[]; countPersons: number } =
    await response.json();

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
