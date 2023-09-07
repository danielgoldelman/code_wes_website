import Landing from "@/components/landing/landing";
// import Team from "@/components/team/team";
import Links from "@/components/links/links";

export default function Home() {
  return (
    <div className="bg-[#0d1117] overscroll-contain text-white">
      <main className="justify-center">
        <div className="">
          <Landing />
          {/* <Team /> */}
          <Links />
        </div>
      </main>
    </div>
  );
}
