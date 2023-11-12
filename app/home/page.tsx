import { Navbar } from "@/component/Navbar";
import { HomeForm } from "./HomeForm";
import { AppLayout } from "@/component/AppLayout";

export default function Homepage() {
  return (
    <AppLayout>
      <>
        <Navbar />
        <HomeForm />
      </>
    </AppLayout>
  );
}
