import { HomeForm } from "./HomeForm";
import { Navbar } from "./Navbar";

export default function Homepage() {
  return (
    <div className="w-full bg-blue-700">
      <Navbar />
      <div className="flex flex-col  bg-blue-700 w-[64rem] mx-auto align-center min-h-screen">
        <HomeForm />
      </div>
    </div>
  );
}
