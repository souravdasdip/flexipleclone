import Banner from "./_components/banner";
import Jobs from "./_components/jobs";

export default function Home() {
  return (
    <div className="">
      <main className="grid place-items-center">
        <div className=" absolute top-0 left-0 right-0 z-[99999]"/>
        
        <Banner />
        <Jobs />
      </main>
      </div>
  );
}
