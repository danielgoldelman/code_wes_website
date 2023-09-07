import Image from "next/image";
import LandingTitle from "./title";

export default function Landing() {
  return (
    <div className="h-screen flex flex-col justify-center px-72">
      <div className="grid grid-cols-3 py-32">
        <div className="my-auto col-span-2 py-10">
          <LandingTitle />
          <p className="pt-4 text-lg">
            A place where students interested in coding can discuss the CS
            major,
            <br />
            interact outside of classes, and work on cool projects.
          </p>
        </div>
        <Image
          src="/cwlogo.png"
          alt="Code_Wes Logo"
          height={10000}
          width={10000}
          className="m-auto"
        />
      </div>
    </div>
  );
}
