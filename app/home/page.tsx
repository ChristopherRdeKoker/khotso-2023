import { Navbar } from "@/component/Navbar";
import { HomeForm } from "./HomeForm";
import { AppLayout } from "../../component/AppLayout";

export default function Homepage() {
  return (
    // <AppLayout>
    <div className=" justify-center flex flex-col w-full gap-2 min-h-screen bg-blue-400 ">
      <Navbar />
      <HomeForm />
    </div>
    // </AppLayout>
  );
}
