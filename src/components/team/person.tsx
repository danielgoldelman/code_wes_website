import Image from "next/image";

interface personinput {
  name: string;
  img: string;
  desc: string;
}

export default function Person({ name, img, desc }: personinput) {
  return (
    <div className="border-2 border-slate-700 bg-[#404040] pb-4 pt-6">
      <Image 
        src={img}
        height={200}
        width={200}
        alt={"Photo of " + name}
        className="mx-auto pt-3"
      />
      <div className="text-xl pt-4">{name}</div>
      <div className="italic">{desc}</div>
    </div>
  );
}
