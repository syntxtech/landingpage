"use client";
import AboutUs from "@/components/shared/AboutUs";
import ContactUs from "@/components/shared/ContactUs";
import Hero from "@/components/shared/Hero";
import Insights from "@/components/shared/Insights";
import Services from "@/components/shared/Services";
import { Sparkles } from "@/components/ui/Sparkles";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between min-h-screen  w-full">
      <TracingBeam className="pl-8 lg:pl-20 h-full">
        <Sparkles />
        <Hero />
        <Insights />
        <Services />
        <AboutUs />
        <ContactUs />
      </TracingBeam>
    </main>
  );
}
