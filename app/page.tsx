import Image from "next/image";
import Timer from "./components/Timer";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center h-screen p-10
     bg-zinc-50 font-sans dark:bg-black bg-gradient-to-tr from-blue-300 to-purple-100">
      <Timer />
    </div>
  );
}
