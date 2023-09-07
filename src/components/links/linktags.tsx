import Image from "next/image";

export default function LinkTags() {
  const sources = [
    {
      thing: "Discord",
      img: "/vectors/discord-icon-svgrepo-com.svg",
      typ: "svg",
      link: "https://discord.gg/abTZpXBM7",
      bg: "bg-[#0d1117] ",
    },
    {
      thing: "GitHub",
      img: "/vectors/github-color-svgrepo-com.svg",
      typ: "svg",
      link: "https://github.com/orgs/Code-Wes/repositories",
      bg: "bg-[#0d1117] ",
    },
    {
      thing: "WesNest",
      img: "/vectors/wesnest.png",
      typ: "png",
      link: "https://wesleyan.campuslabs.com/engage/organization/code_wes",
      bg: "bg-white ",
    },
  ];

  return (
    <div className="grid grid-cols-5 place-items-center">
      <div></div> {/* Here to take the first col */}
      {sources.map((source) => {
        if (source.typ == "svg") {
          return (
            <a href={source.link} target="_blank">
              <Image
                src={source.img}
                height={100}
                width={100}
                alt={source.thing + " Link"}
                className={source.bg}
              />
            </a>
          );
        } else {
          return (
            <a href={source.link} target="_blank">
              <Image
                src={source.img}
                height={100}
                width={150}
                alt={source.thing + " Link"}
                className={source.bg}
              />
            </a>
          );
        }
      })}
    </div>
  );
}
