import AboutUs from "@/components/shared/AboutUs";
import ContactUs from "@/components/shared/ContactUs";
import Hero from "@/components/shared/Hero";
import Insights from "@/components/shared/Insights";
import Services from "@/components/shared/Services";
import { Sparkles } from "@/components/ui/Sparkles";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between  w-full">
      <Sparkles />
      <Hero />
      <Insights />
      <Services />
      <AboutUs />
      <ContactUs />
    </main>
  );
}
