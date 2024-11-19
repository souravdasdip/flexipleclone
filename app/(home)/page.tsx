import Banner from "./_components/banner";
import Persons from "./_components/persons";
import Rightbar from "./_components/rightbar";

export default function Home() {
  return (
    <div className="">
      <main className="grid place-items-center">
        <Banner />
        <div className="flex flex-wrap justify-between gap-4 px-10">
          <div className="flex-[.7]">
            <Persons />
          </div>
          <div className="flex-[.3]">
            <Rightbar />
          </div>
        </div>
      </main>
    </div>
  );
}
