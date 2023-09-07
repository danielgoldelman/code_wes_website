import Person from "./person";

export default function Team() {
  const people = [
    { name: "Daniel Goldelman", img: "/Daniel.jpg", desc: "Masters Student, Founder" },
    { name: "Gunn Jungpaibul", img: "/Daniel.jpg", desc: "Senior" },
    { name: "Anan Afrida", img: "/Daniel.jpg", desc: "Sophomore, FM, President" },
    { name: "Nishant Aggarwal Kim", img: "/Daniel.jpg", desc: "Sophomore, Kim's Baby Momma" },
  ];

  return (
    <div className="h-screen flex flex-col justify-center px-52">
      <div className="text-5xl text-center pb-36">Code_Wes Leadership</div>
      <div className="grid grid-cols-4 gap-4 text-center">
        {people.map((person) => {
          return (
            <div className="col-span-1">
              <Person name={person.name} img={person.img} desc={person.desc} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
