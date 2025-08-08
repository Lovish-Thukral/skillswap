import Image from "next/image";
import { MainNav } from "@/components/main/MainNav";

export default function Home() {
  return (
    <main className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
     <div className="fixed top-0 p-4 ">
      <MainNav />
      </div>
    </main>
  );
}
