import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { ITEMS_PER_PAGE } from "@/lib/settings";
import { Prisma } from "@prisma/client";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "1";
  const p = parseInt(page, 10);

  try {
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

    const response: {
      persons: Prisma.PersonsGetPayload<{
        include: { noticePeriods: true; skills: true };
      }>[];
      countPersons: number;
    } = { persons, countPersons };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching persons:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
