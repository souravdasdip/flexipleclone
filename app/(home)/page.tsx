import Banner from "./_components/banner";
import Persons from "./_components/persons";
import Rightbar from "./_components/rightbar";
import Testimonial from "./_components/testimonial";

export default async function Home({
  searchParams,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  searchParams: any;
}) {
  const { page } = await searchParams;

  return (
    <div className="relative">
      <main className="grid place-items-center relative">
        <Banner />
        <div className="flex flex-wrap justify-between gap-4 px-10 relative">
          <div className="flex-[.7]">
            <Persons page={page} />
          </div>
          <div className="flex-[.3]">
            <Rightbar />
          </div>
        </div>

        <Testimonial />
      </main>
    </div>
  );
}
