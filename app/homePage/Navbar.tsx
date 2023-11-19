import Image from "next/image";
import { format } from "date-fns";
export function Navbar() {
  const today = format(new Date(), "dd MMM yyyy");
  return (
    <div className="w-full px-16 flex flex-row justify-between items-center h-[4.5rem] bg-blue-400 border-black/40 border-2">
      <div className="flex items-center flex-row gap-8">
        <Image width={70} alt="khotso logo" height={400} src="/KhotsoLogo.png" />
        <div className="flex flex-col text-white">
          <h3>Khoto Tubing</h3>
          <h4>{today}</h4>
        </div>
      </div>
      <div>ICONS</div>
    </div>
  );
}
