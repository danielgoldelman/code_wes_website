"use client";
import { useEffect, useState } from "react";

export default function LandingTitle() {
  const [title, setTitle] = useState(" ");

  const landings = [
    {
      lang: "js",
      start: "const name = ",
    },
    {
      lang: "python",
      start: "name = ",
    },
    {
      lang: "java",
      start: "String name = ",
    },
    {
      lang: "C++",
      start: "std::string name = ",
    },
    {
      lang: "swift",
      start: "let name = ",
    },
    {
      lang: "go",
      start: "var name string = ",
    },
    {
      lang: "goShort",
      start: "name := "
    },
    {
      lang: "PHP",
      start: "$name = ",
    },
    {
      lang: "lua",
      start: "local name = "
    },
    {
      lang: "R",
      start: "name <- "
    },
    {
      lang: "Perl",
      start: "my $myString = "
    },
  ];

  function chooseLang(len: number): number {
    return Math.floor(Math.random() * len);
  }

  async function type(str: string) {
    for (let i = 1; i <= str.length; i++) {
      setTitle(str.substring(0, i) + "|");
      await new Promise((res) => setTimeout(res, 50));
    }

    for (let i = 0; i < 3; i++){
      await new Promise((res) => setTimeout(res, 700));
      setTitle(str)
      await new Promise((res) => setTimeout(res, 300));
      setTitle(str + "|")
    }
    await new Promise((res) => setTimeout(res, 700));
    setTitle(str)
    await new Promise((res) => setTimeout(res, 300));

    for (let i = str.length; i > 0; i--) {
      setTitle(str.substring(0, i) + "|");
      await new Promise((res) => setTimeout(res, 25));
    }

    setTitle("|");
    await new Promise((res) => setTimeout(res, 500));
  }

  async function runTitle() {
    const langnum = chooseLang(landings.length);
    const choice = landings[langnum];
    await type(choice.start + '"We are Code_Wes!"');
    runTitle()
  }

  useEffect(() => {
    runTitle()
  }, []);

  return <div className="text-4xl mb-5">{title}</div>;
}
