import CodeSnippets from "../components/CodeSnippets";
import Navbar from "../components/Navbar";

function YourWork() {
  return (
    <>
      <Navbar title="Your FrontCodes" />
      <div className="h-[calc(100%-64px)] mx-[52px] py-5">
        <div className="w-full ">
          <CodeSnippets />
        </div>
      </div>
    </>
  );
}

export default YourWork;
