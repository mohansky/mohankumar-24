import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Work from "@/components/sections/work";
import Process from "@/components/sections/process";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="bg-base-200 min-h-screen">
      <Hero />
      <Services />
      <Work />
      <Process />
      <Contact />
    </div>
  );
}
