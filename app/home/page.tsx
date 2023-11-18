import { Navbar } from "@/component/Navbar";
import { HomeForm } from "./HomeForm";

export default function Homepage() {
  return (
    <div className=" justify-center flex flex-col w-full gap-2 min-h-screen bg-blue-400 ">
      <Navbar />
      <HomeForm />
    </div>
  );
}
