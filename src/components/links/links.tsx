import LinkTags from "./linktags";

export default function Links() {
  return (
    <div className="h-screen flex flex-col justify-center px-52">
      <div className="text-5xl text-center pb-36">Important Links</div>
      <LinkTags />
    </div>
  );
}
